import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    title: 'Bathroom Remodel - Modern Design',
    description: 'Complete bathroom renovation with modern fixtures and elegant tiling',
    imageUrl: '/gallery/bathroom-remodel-1.jpg',
    category: 'Bathroom',
    tags: ['remodel', 'modern', 'bathroom']
  },
  {
    id: '2',
    title: 'Water Heater Installation',
    description: 'Professional installation of a high-efficiency tankless water heater',
    imageUrl: '/gallery/water-heater-1.jpg',
    category: 'Installation',
    tags: ['water heater', 'installation', 'tankless']
  },
  // Add more gallery images here
];

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              className="object-cover rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="relative max-w-4xl w-full aspect-video">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
