"use client";

import { Card } from "@/components/ui/card";

export function GoogleMap() {
  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107121.0271737346!2d-96.7968559!3d33.0198431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21da13c59513%3A0x62aa036489cd602b!2sPlano%2C%20TX!5e0!3m2!1sen!2sus!4v1710937433316!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Card>
  );
}