export interface CacheConfig {
  maxAge: number;
  staleWhileRevalidate?: number;
  tags?: string[];
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  tags: string[];
}

export const cacheConfigs: Record<string, CacheConfig> = {
  page: {
    maxAge: 60 * 60, // 1 hour
    staleWhileRevalidate: 60 * 5, // 5 minutes
    tags: ['page']
  },
  api: {
    maxAge: 60 * 5, // 5 minutes
    staleWhileRevalidate: 60, // 1 minute
    tags: ['api']
  },
  static: {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    tags: ['static']
  },
  image: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    tags: ['image']
  }
};

class CacheManager {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private subscribers: Map<string, Set<(data: any) => void>> = new Map();

  async get<T>(key: string, fetcher: () => Promise<T>, config: CacheConfig): Promise<T> {
    const entry = this.cache.get(key);
    const now = Date.now();

    if (entry) {
      const age = now - entry.timestamp;
      if (age < config.maxAge * 1000) {
        return entry.data;
      }
      if (config.staleWhileRevalidate && age < (config.maxAge + config.staleWhileRevalidate) * 1000) {
        this.revalidate(key, fetcher, config);
        return entry.data;
      }
    }

    const data = await fetcher();
    this.set(key, data, config);
    return data;
  }

  private set<T>(key: string, data: T, config: CacheConfig): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      tags: config.tags || []
    };
    this.cache.set(key, entry);
    this.notifySubscribers(key, data);
  }

  private async revalidate<T>(key: string, fetcher: () => Promise<T>, config: CacheConfig): Promise<void> {
    try {
      const data = await fetcher();
      this.set(key, data, config);
    } catch (error) {
      console.error(`Revalidation failed for key: ${key}`, error);
    }
  }

  subscribe<T>(key: string, callback: (data: T) => void): () => void {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }
    this.subscribers.get(key)!.add(callback);

    return () => {
      this.subscribers.get(key)?.delete(callback);
    };
  }

  private notifySubscribers(key: string, data: any): void {
    this.subscribers.get(key)?.forEach(callback => callback(data));
  }

  invalidateByTag(tag: string): void {
    for (const [key, entry] of this.cache.entries()) {
      if (entry.tags.includes(tag)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cacheManager = new CacheManager();

export function generateCacheControl(config: CacheConfig): string {
  const directives = [
    'public',
    `max-age=${config.maxAge}`
  ];

  if (config.staleWhileRevalidate) {
    directives.push(`stale-while-revalidate=${config.staleWhileRevalidate}`);
  }

  return directives.join(', ');
}