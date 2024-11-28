export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export const faqCategories = [
  'General',
  'Emergency',
  'Pricing',
  'Services',
  'Maintenance'
];

export const faqs: FAQ[] = [
  {
    id: 'emergency-response',
    question: 'What constitutes a plumbing emergency?',
    answer: `A plumbing emergency typically includes situations that pose immediate risks to your property or health:
    - Burst pipes
    - Major water leaks
    - Sewage backups
    - No water supply
    - Gas leaks (if you smell gas, evacuate immediately and call 911)
    
    For these situations, we provide 24/7 emergency service with rapid response times.`,
    category: 'Emergency',
    tags: ['emergency', 'urgent', '24/7']
  },
  {
    id: 'water-heater-lifespan',
    question: 'How long should a water heater last?',
    answer: `The average lifespan of a water heater depends on the type:
    - Traditional tank water heaters: 8-12 years
    - Tankless water heaters: 15-20 years
    
    Regular maintenance can extend these lifespans. Signs you need replacement:
    - Rusty water
    - Strange noises
    - Inconsistent heating
    - Visible corrosion
    - Age over 10 years`,
    category: 'Maintenance',
    tags: ['water heater', 'maintenance', 'replacement']
  },
  {
    id: 'pricing-structure',
    question: 'How is pricing determined for plumbing services?',
    answer: `Our pricing structure is transparent and based on several factors:
    1. Type of service required
    2. Time and complexity of the job
    3. Parts and materials needed
    4. Time of service (emergency/after-hours)
    
    We provide detailed estimates before beginning work and offer financing options for larger projects.`,
    category: 'Pricing',
    tags: ['pricing', 'estimates', 'costs']
  },
  {
    id: 'maintenance-tips',
    question: 'What regular maintenance should I perform on my plumbing?',
    answer: `Regular maintenance can prevent costly repairs:
    Monthly:
    - Check for leaks
    - Clean shower heads
    - Test water pressure
    
    Quarterly:
    - Clean drain strainers
    - Check toilet components
    - Inspect visible pipes
    
    Annually:
    - Water heater maintenance
    - Sewer line inspection
    - Professional plumbing inspection`,
    category: 'Maintenance',
    tags: ['maintenance', 'prevention', 'tips']
  }
];
