// ─── Project Data ──────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  overview: string;
  objective: string;
  visualDirection: string;
  prompt: string;
  tools: string[];
  process: string[];
  image: string;
  accentColor: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'aura',
    number: '01',
    title: 'AURA',
    subtitle: 'Premium Fragrance Advertising',
    category: 'Product Advertising',
    badge: 'Concept Project',
    description: 'A luxury fragrance brand campaign exploring cinematic product lighting and editorial photography aesthetics through AI generation.',
    overview: 'AURA is a conceptual luxury fragrance brand campaign that explores the intersection of premium product photography and AI-generated visuals. The project focuses on creating an amber perfume bottle bathed in warm golden light against a rich, dark background.',
    objective: 'Demonstrate how AI image generation can replicate and enhance luxury editorial product photography, creating assets suitable for high-end fragrance advertising.',
    visualDirection: 'Dark chocolate brown backgrounds, warm golden amber lighting, scattered light particles, shallow depth of field, and premium editorial composition — evoking brands like Tom Ford, Dior, and Chanel.',
    prompt: '"Luxury amber crystal perfume bottle, rich warm golden side lighting, scattered gold dust particles floating in air, dark chocolate brown background, cinematic bokeh, ultra-realistic editorial product photography, premium fragrance brand aesthetic, 8K render"',
    tools: ['Midjourney', 'Adobe Firefly', 'Adobe Photoshop', 'Leonardo AI'],
    process: [
      'Researched luxury fragrance brand aesthetics and editorial photography references',
      'Developed 15+ detailed AI prompts focusing on lighting and composition',
      'Generated 40+ variations using Midjourney and Leonardo AI',
      'Selected the strongest compositions for post-processing in Adobe Photoshop',
    ],
    image: '/assets/project_aura.png',
    accentColor: '#d4a852',
    tags: ['Product', 'Advertising', 'Luxury'],
  },
  {
    id: 'volterra',
    number: '02',
    title: 'VOLTERRA EV',
    subtitle: 'Next-Generation Automotive Campaign',
    category: 'Automotive Campaign',
    badge: 'Concept Project',
    description: 'A cinematic electric vehicle advertising campaign featuring a futuristic EV in dramatic natural environments.',
    overview: 'Volterra EV is a conceptual automotive campaign exploring how AI generation can create compelling vehicle advertising visuals that rival traditional CGI rendering studios. The campaign features a sleek dark blue electric SUV in dramatic outdoor environments.',
    objective: 'Show AI\'s potential to democratize high-quality automotive advertising by generating cinematic EV visuals without physical shoots or expensive CGI pipelines.',
    visualDirection: 'Dark navy and midnight blue vehicle, dramatic golden sunset horizon, wet reflective road surface, atmospheric fog, wide cinematic framing — inspired by Tesla and Rivian campaign aesthetics.',
    prompt: '"Futuristic electric SUV, dark navy metallic paint, dramatic golden sunset with moody clouds, wide ultra-cinematic shot, wet road reflections, atmospheric fog, professional automotive photography, hyperrealistic, 8K"',
    tools: ['Midjourney', 'Leonardo AI', 'Adobe Photoshop'],
    process: [
      'Studied premium automotive campaign photography and lighting setups',
      'Crafted detailed prompts specifying vehicle design, environment, and mood',
      'Ran iterative prompt refinements to achieve realistic vehicle proportions',
      'Applied color grading and atmosphere adjustments in post-processing',
    ],
    image: '/assets/project_volterra_ev.png',
    accentColor: '#3b82f6',
    tags: ['Automotive', 'Campaign', 'Cinematic'],
  },
  {
    id: 'terraleaf',
    number: '03',
    title: 'TERRALEAF',
    subtitle: 'Eco-Friendly Skincare Campaign',
    category: 'Brand Campaign',
    badge: 'Concept Project',
    description: 'A sustainable skincare brand campaign marrying botanical elegance with premium product photography aesthetics.',
    overview: 'TerrLeaf is a conceptual eco-conscious skincare brand campaign designed to communicate sustainability and premium quality simultaneously. The visual identity draws from nature while maintaining a luxury brand feel.',
    objective: 'Demonstrate AI\'s ability to create cohesive brand visual campaigns for sustainable product lines, balancing eco authenticity with aspirational aesthetic quality.',
    visualDirection: 'Olive green and cream color palette, glass packaging with botanical plants, soft diffused natural lighting, clean white or earthy backgrounds, premium sustainable brand aesthetic.',
    prompt: '"Elegant glass skincare bottles surrounded by fresh botanical herbs and leaves, cream and olive green palette, soft diffused natural light from window, premium eco-friendly beauty brand, ultra-realistic product photography, clean minimal composition"',
    tools: ['Adobe Firefly', 'Midjourney', 'Canva', 'Adobe Photoshop'],
    process: [
      'Defined brand persona: sustainable, premium, natural, modern',
      'Developed visual mood board from eco-luxury brand references',
      'Generated product photography variations with different botanical arrangements',
      'Created cohesive visual identity across multiple product shots',
    ],
    image: '/assets/project_terraleaf.png',
    accentColor: '#6b8f47',
    tags: ['Skincare', 'Eco', 'Brand'],
  },
  {
    id: 'fashion',
    number: '04',
    title: 'AI FASHION EDITORIAL',
    subtitle: 'Creative Fashion Photography',
    category: 'Fashion Editorial',
    badge: 'Creative Exploration',
    description: 'An exploration of AI-generated fashion photography pushing editorial boundaries with cinematic portraiture and bold styling.',
    overview: 'This project explores the creative potential of AI in fashion photography — generating editorial portraits with sophisticated styling, dramatic lighting, and consistent visual storytelling that rival traditional fashion magazine shoots.',
    objective: 'Push the boundaries of AI portrait generation to produce fashion editorial imagery with magazine-quality composition, creative fashion styling, and emotional resonance.',
    visualDirection: 'Dramatic cinematic side lighting, deep navy and purple tones, avant-garde designer clothing, emotional portraiture, luxury fashion magazine composition.',
    prompt: '"High fashion editorial portrait, model wearing avant-garde flowing designer outfit, dramatic cinematic side lighting, deep navy purple background, Vogue editorial aesthetic, sophisticated styling, ultra high quality fashion photography, emotional expression"',
    tools: ['Midjourney', 'Leonardo AI', 'Adobe Photoshop', 'Adobe Lightroom'],
    process: [
      'Analyzed editorial fashion photography across Vogue, Dazed, and i-D references',
      'Developed specific prompts for consistent character appearance and styling',
      'Ran multiple generation passes refining lighting and composition',
      'Applied fashion magazine color grading and retouching in post-processing',
    ],
    image: '/assets/project_fashion.png',
    accentColor: '#9333ea',
    tags: ['Fashion', 'Editorial', 'Portrait'],
  },
  {
    id: 'neuraforge',
    number: '05',
    title: 'NEURAFORGE AI',
    subtitle: 'AI Technology Brand Campaign',
    category: 'Tech Branding',
    badge: 'Concept Project',
    description: 'A futuristic brand identity campaign for a fictional AI platform exploring neural network visualization aesthetics.',
    overview: 'NeuraForge AI is a conceptual technology brand campaign designed to communicate cutting-edge artificial intelligence capabilities through striking visual design. The campaign blends data visualization aesthetics with cinematic science fiction elements.',
    objective: 'Create compelling visual brand assets for an AI technology company that communicate sophistication, innovation, and computational power through generative art.',
    visualDirection: 'Deep dark backgrounds, glowing electric purple neural network nodes, holographic interface elements, particle systems, and dramatic neon lighting creating a sense of advanced computational power.',
    prompt: '"Glowing electric purple neural network visualization, floating luminous nodes connected by energy streams, dark void background with subtle blue ambient, holographic interface elements, cinematic sci-fi tech brand visual, ultra detailed, 8K digital art"',
    tools: ['Midjourney', 'ChatGPT', 'Adobe Photoshop', 'Adobe Illustrator'],
    process: [
      'Researched AI company brand identities and scientific visualization aesthetics',
      'Defined brand language: intelligent, visionary, precise, powerful',
      'Generated multiple visual directions from abstract to representational',
      'Refined color palette and lighting to create brand-consistent imagery',
    ],
    image: '/assets/project_neuraforge.png',
    accentColor: '#7c3aed',
    tags: ['AI', 'Tech', 'Branding'],
  },
  {
    id: 'vetrio',
    number: '06',
    title: 'VETRIO GLOBAL',
    subtitle: 'Ecommerce Product Visualization',
    category: 'Ecommerce',
    badge: 'Personal Brand',
    description: 'AI-powered product visualization for VETRIO GLOBAL — my personal ecommerce initiative exploring premium product presentation.',
    overview: 'VETRIO GLOBAL is my personal ecommerce brand where I explore how AI tools can elevate product photography and presentation for online retail. This project demonstrates practical, real-world application of AI in ecommerce marketing.',
    objective: 'Use AI image generation and editing tools to create premium product photography that competes with professional studio photography, enabling high-quality ecommerce presentation without traditional photoshoot costs.',
    visualDirection: 'Clean white and cream backgrounds, soft natural side lighting, premium lifestyle product arrangements, minimal and sophisticated composition — suitable for luxury ecommerce presentation.',
    prompt: '"Premium lifestyle product photography, elegantly arranged products on clean white marble surface, soft directional natural light, luxury brand ecommerce aesthetic, minimal composition, ultra-sharp detail, commercial photography quality"',
    tools: ['Adobe Firefly', 'Adobe Photoshop', 'Canva', 'ChatGPT'],
    process: [
      'Analyzed top-performing ecommerce product photography styles',
      'Developed AI prompts optimized for consistent product presentation',
      'Generated multiple background and lighting scenarios per product',
      'Optimized final images for web performance and visual quality',
    ],
    image: '/assets/project_vetrio.png',
    accentColor: '#0ea5e9',
    tags: ['Ecommerce', 'Product', 'Personal'],
  },
  {
    id: 'aitransform',
    number: '07',
    title: 'AI IMAGE TRANSFORMATION',
    subtitle: 'AI-Powered Creative Editing',
    category: 'AI Demonstration',
    badge: 'Creative Exploration',
    description: 'A before-and-after demonstration of how AI tools transform ordinary product photos into premium commercial visuals.',
    overview: 'This project demonstrates the transformative power of AI image editing — taking a simple, everyday product photograph and elevating it into a premium commercial advertisement through intelligent AI tools and post-processing.',
    objective: 'Illustrate the practical value of AI in commercial photography: dramatically improving product imagery quality, lighting, and composition without a physical studio setup.',
    visualDirection: 'Dramatic contrast between raw snapshot (plain, flat lighting) and AI-transformed output (cinematic lighting, premium background, atmospheric depth) showing clear commercial value.',
    prompt: '"Transform to: premium luxury advertisement photography, dramatic warm studio lighting with golden highlights, dark cinematic background, steam rising from product, ultra-sharp commercial photography quality, advertisement composition"',
    tools: ['Adobe Firefly', 'Google Gemini', 'Adobe Photoshop', 'Midjourney'],
    process: [
      'Captured or sourced a simple product photograph as the starting point',
      'Developed a detailed transformation prompt targeting commercial quality',
      'Applied AI-powered background removal and replacement',
      'Refined lighting, atmosphere, and color grading to achieve premium output',
    ],
    image: '/assets/project_ai_after.png',
    accentColor: '#f59e0b',
    tags: ['AI Editing', 'Transformation', 'Demo'],
  },
  {
    id: 'zest',
    number: '08',
    title: 'ZEST',
    subtitle: 'Surreal Beverage Advertising',
    category: 'Beverage Campaign',
    badge: 'Concept Project',
    description: 'A vibrant, surreal beverage ad campaign featuring dynamic liquid splashes and floating citrus in bold commercial photography style.',
    overview: 'Zest is a conceptual beverage brand campaign exploring surreal commercial photography — where product, ingredients, and environment merge into one energetic visual composition. The campaign borrows from brands like Fanta and Tropicana.',
    objective: 'Showcase AI\'s ability to create the complex composite product photography typical of beverage advertising — floating elements, dynamic liquids, and bold color contrasts that are traditionally expensive to produce.',
    visualDirection: 'Bright blue sky backdrop, vibrant orange and yellow tones, dynamic water splash frozen in motion, floating orange and lemon slices, energetic and playful commercial photography composition.',
    prompt: '"Orange soda can surrounded by dynamic liquid splash explosion, floating citrus fruit slices in bright blue sky, ultra-vivid commercial beverage photography, energetic composition, floating droplets frozen in time, studio advertisement quality"',
    tools: ['Midjourney', 'Adobe Firefly', 'Adobe Photoshop'],
    process: [
      'Studied beverage brand advertising and splash photography techniques',
      'Developed prompts specifically targeting dynamic liquid and floating element generation',
      'Iterated through multiple compositions for optimal product visibility',
      'Applied commercial color grading to enhance vibrancy and impact',
    ],
    image: '/assets/project_zest.png',
    accentColor: '#f97316',
    tags: ['Beverage', 'Surreal', 'Campaign'],
  },
];

// ─── Skills / Tools Data ───────────────────────────────────────────────────────
export interface Tool {
  name: string;
  emoji: string;
  category: 'AI' | 'Design' | 'Technical';
  color: string;
}

export const tools: Tool[] = [
  { name: 'ChatGPT', emoji: '🤖', category: 'AI', color: '#10a37f' },
  { name: 'Google Gemini', emoji: '✨', category: 'AI', color: '#4285f4' },
  { name: 'Midjourney', emoji: '🎨', category: 'AI', color: '#7289da' },
  { name: 'Adobe Firefly', emoji: '🔥', category: 'AI', color: '#e44f26' },
  { name: 'Leonardo AI', emoji: '🦁', category: 'AI', color: '#f7931e' },
  { name: 'Adobe Photoshop', emoji: '🖼️', category: 'Design', color: '#31a8ff' },
  { name: 'Adobe Illustrator', emoji: '✒️', category: 'Design', color: '#ff9a00' },
  { name: 'Canva', emoji: '🎭', category: 'Design', color: '#00c4cc' },
  { name: 'Python', emoji: '🐍', category: 'Technical', color: '#3776ab' },
  { name: 'TensorFlow', emoji: '🧠', category: 'Technical', color: '#ff6f00' },
  { name: 'Scikit-learn', emoji: '📊', category: 'Technical', color: '#f89939' },
  { name: 'GitHub', emoji: '🐙', category: 'Technical', color: '#6e5494' },
];

// ─── Process Steps ─────────────────────────────────────────────────────────────
export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    icon: '🔍',
    description: 'Understand the project objective, target audience, creative direction, and technical constraints before generating a single asset.',
  },
  {
    number: '02',
    title: 'Imagine',
    icon: '💡',
    description: 'Develop creative concepts and craft highly detailed AI prompts, translating ideas into clear visual language that AI tools can interpret effectively.',
  },
  {
    number: '03',
    title: 'Generate',
    icon: '⚡',
    description: 'Run iterative AI generation experiments, exploring multiple visual directions and refining outputs through prompt engineering and tool selection.',
  },
  {
    number: '04',
    title: 'Refine',
    icon: '✨',
    description: 'Select the strongest outputs, apply post-processing in design tools, and prepare the final visual for its intended commercial application.',
  },
];
