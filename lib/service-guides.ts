export interface ServiceGuide {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  difficulty: 'Easy' | 'Moderate' | 'Professional';
  estimatedTime: string;
  tools: string[];
  materials: string[];
  steps: {
    title: string;
    description: string;
    imageUrl?: string;
  }[];
  warnings: string[];
  tips: string[];
}

export const serviceGuides: ServiceGuide[] = [
  {
    id: 'toilet-replacement',
    title: 'Professional Toilet Replacement Guide',
    slug: 'toilet-replacement-guide',
    excerpt: 'Complete guide to replacing a toilet, from removal to installation.',
    content: `
      A proper toilet installation ensures years of reliable use. This guide covers the complete process of replacing a toilet, including necessary preparations and finishing touches.

      Before starting, ensure you have all required tools and materials. While this guide provides detailed steps, consider professional installation for optimal results.
    `,
    category: 'Installation',
    difficulty: 'Moderate',
    estimatedTime: '2-3 hours',
    tools: [
      'Adjustable wrench',
      'Channel-lock pliers',
      'Putty knife',
      'Level',
      'Sponge',
      'Bucket'
    ],
    materials: [
      'New toilet',
      'Wax ring',
      'Toilet supply line',
      'Mounting bolts',
      'Silicone caulk'
    ],
    steps: [
      {
        title: 'Preparation',
        description: 'Turn off water supply, flush toilet, remove remaining water',
        imageUrl: '/guides/toilet-prep.jpg'
      },
      {
        title: 'Remove Old Toilet',
        description: 'Disconnect supply line, remove mounting bolts, lift toilet',
        imageUrl: '/guides/toilet-removal.jpg'
      },
      {
        title: 'Prepare Flange',
        description: 'Clean flange, inspect for damage, install new bolts',
        imageUrl: '/guides/flange-prep.jpg'
      },
      {
        title: 'Install New Toilet',
        description: 'Place wax ring, position toilet, secure mounting bolts',
        imageUrl: '/guides/toilet-install.jpg'
      },
      {
        title: 'Final Steps',
        description: 'Connect water supply, test flush, check for leaks',
        imageUrl: '/guides/toilet-final.jpg'
      }
    ],
    warnings: [
      'Never reuse an old wax ring',
      'Do not overtighten toilet bolts',
      'Ensure proper ventilation',
      'Call a professional if you encounter plumbing issues'
    ],
    tips: [
      'Have a helper available for lifting',
      'Place towels around work area',
      'Consider replacing supply line',
      'Test floor stability before installation'
    ]
  },
  {
    id: 'water-heater-maintenance',
    title: 'Water Heater Maintenance Guide',
    slug: 'water-heater-maintenance-guide',
    excerpt: 'Essential maintenance steps for extending water heater life.',
    content: `
      Regular maintenance of your water heater is crucial for optimal performance and longevity. This guide covers essential maintenance tasks that help prevent common issues and ensure efficient operation.

      While some maintenance tasks can be performed by homeowners, always consult a professional for complex issues or annual inspections.
    `,
    category: 'Maintenance',
    difficulty: 'Easy',
    estimatedTime: '1-2 hours',
    tools: [
      'Garden hose',
      'Bucket',
      'Screwdriver',
      'Wrench',
      'Work gloves'
    ],
    materials: [
      'Replacement anode rod (if needed)',
      'Pipe tape',
      'Vacuum cleaner'
    ],
    steps: [
      {
        title: 'Visual Inspection',
        description: 'Check for leaks, corrosion, and proper ventilation',
        imageUrl: '/guides/heater-inspection.jpg'
      },
      {
        title: 'Test Pressure Relief Valve',
        description: 'Lift test lever to ensure proper operation',
        imageUrl: '/guides/pressure-relief.jpg'
      },
      {
        title: 'Flush Tank',
        description: 'Connect hose to drain valve, remove sediment',
        imageUrl: '/guides/tank-flush.jpg'
      },
      {
        title: 'Check Anode Rod',
        description: 'Remove and inspect anode rod condition',
        imageUrl: '/guides/anode-check.jpg'
      },
      {
        title: 'Temperature Setting',
        description: 'Verify and adjust temperature setting if needed',
        imageUrl: '/guides/temp-setting.jpg'
      }
    ],
    warnings: [
      'Water may be extremely hot',
      'Turn off power before maintenance',
      'Avoid contact with hot surfaces',
      'Do not force stuck valves'
    ],
    tips: [
      'Maintain consistent maintenance schedule',
      'Document maintenance dates',
      'Keep area around heater clear',
      'Consider professional inspection annually'
    ]
  }
];
