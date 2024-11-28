export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const metric = entry.name;
      const value = entry.startTime;
      
      // Send to analytics
      console.log(`Performance Metric - ${metric}: ${value}`);
    });
  });

  observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

  // First Input Delay
  const fidObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const value = entry.duration;
      console.log(`First Input Delay: ${value}`);
    });
  });

  fidObserver.observe({ entryTypes: ['first-input'] });

  // Layout Shifts
  const clsObserver = new PerformanceObserver((list) => {
    let clsValue = 0;
    list.getEntries().forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    console.log(`Cumulative Layout Shift: ${clsValue}`);
  });

  clsObserver.observe({ entryTypes: ['layout-shift'] });
}

export function measurePageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const timing = performance.timing;
    const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  });
}