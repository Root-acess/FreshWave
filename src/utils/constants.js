export const SERVICES = [
  {
    id: 'wash-fold',
    icon: '🫧',
    title: 'Wash & Fold',
    description: 'Clean, folded & ready to wear. Premium detergents, perfect results every time.',
  },
  {
    id: 'dry-clean',
    icon: '💨',
    title: 'Dry Cleaning',
    description: 'Expert care for suits, silk, wool & all delicate garments with precision techniques.',
  },
  {
    id: 'steam-press',
    icon: '👕',
    title: 'Steam Press',
    description: 'Crisp, wrinkle-free results with professional-grade steam pressing equipment.',
  },
  {
    id: 'pickup',
    icon: '🚐',
    title: 'Free Pickup',
    description: 'We come to your door on your schedule. No waiting, no hassle, no extra charge.',
  },
  {
    id: 'delivery',
    icon: '📦',
    title: 'Fast Delivery',
    description: '24-hour turnaround with real-time tracking. Freshness guaranteed at your door.',
  },
]

export const STEPS = [
  {
    id: 1,
    number: '1',
    title: 'Schedule Pickup',
    description: 'Choose a time via app or web. We\'ll be there on the dot.',
  },
  {
    id: 2,
    number: '2',
    title: 'We Collect',
    description: 'Our team picks up your laundry in eco-friendly bags we provide.',
  },
  {
    id: 3,
    number: '3',
    title: 'Expert Cleaning',
    description: 'Your clothes are cleaned using premium products and specialist techniques.',
  },
  {
    id: 4,
    number: '4',
    title: 'Doorstep Delivery',
    description: 'Fresh, folded & returned within 24 hours. Track every step in real-time.',
  },
]

export const PLANS = [
  {
    id: 'essential',
    name: 'Essential',
    price: '₹499',
    period: 'per order · up to 5kg',
    featured: false,
    features: ['Wash & Fold', '48-hour turnaround', 'Free pickup', 'Eco-friendly detergent'],
    cta: 'Get Started',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹899',
    period: 'per order · up to 10kg',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Wash, Dry & Press',
      '24-hour turnaround',
      'Priority pickup & delivery',
      'Garment-by-garment care',
      'Live order tracking',
    ],
    cta: 'Choose Premium',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '₹2,499',
    period: 'per month · unlimited',
    featured: false,
    features: [
      'Unlimited pickups',
      'Express 12h option',
      'Dry cleaning included',
      'Dedicated care specialist',
    ],
    cta: 'Subscribe',
  },
]

export const REVIEWS = [
  {
    id: 1,
    initials: 'AR',
    name: 'Arjun Reddy',
    location: 'Bengaluru',
    text: 'FreshWave has completely changed my life. My shirts come back crisper than they ever were from my old dry cleaner — and it costs half as much.',
  },
  {
    id: 2,
    initials: 'PM',
    name: 'Priya Mehta',
    location: 'Mumbai',
    text: 'I use the monthly plan and it\'s genuinely the best subscription I have. My clothes smell incredible and the folding is immaculate every single time.',
  },
  {
    id: 3,
    initials: 'SK',
    name: 'Siddharth Kumar',
    location: 'Hyderabad',
    text: 'Scheduled a pickup at 8pm, had everything back by noon the next day. The live tracking feature is brilliant — I knew exactly where my laundry was.',
  },
  {
    id: 4,
    initials: 'NA',
    name: 'Nandita Agarwal',
    location: 'Delhi',
    text: 'I have silk blouses I was terrified to send anywhere. FreshWave handled them perfectly. The team clearly knows what they\'re doing with delicates.',
  },
  {
    id: 5,
    initials: 'VS',
    name: 'Vikram Singh',
    location: 'Pune',
    text: 'As a business traveler, I need clean clothes on demand. The 24h turnaround and door-to-door service fits perfectly into my schedule. Highly recommend.',
  },
]

export const FAQS = [
  {
    id: 1,
    question: 'How do I schedule a pickup?',
    answer:
      'Simply click "Schedule Pickup" on our website or app, choose your preferred date and time slot, and we\'ll handle the rest. We operate 7 days a week, from 7am to 9pm.',
  },
  {
    id: 2,
    question: 'What areas do you service?',
    answer:
      'We currently serve Bengaluru, Mumbai, Hyderabad, Delhi NCR, and Pune. New cities are being added regularly. Enter your pincode on our website to check availability.',
  },
  {
    id: 3,
    question: 'How do you handle delicate or luxury garments?',
    answer:
      'All delicate items are processed by our trained specialists using the appropriate methods — hand-wash, cold-water wash, or professional dry cleaning — based on each garment\'s care label.',
  },
  {
    id: 4,
    question: 'What if an item is damaged or lost?',
    answer:
      'We carry full insurance on all garments in our care. In the unlikely event of damage or loss, we\'ll compensate you per our published claims policy. Your clothes are always in safe hands.',
  },
  {
    id: 5,
    question: 'Can I track my laundry in real time?',
    answer:
      'Yes! Every order gets a unique tracking link with real-time status updates — from pickup through cleaning to delivery. You\'ll also receive SMS and email notifications at each stage.',
  },
  {
    id: 6,
    question: 'Are your detergents eco-friendly?',
    answer:
      'Absolutely. We use only biodegradable, phosphate-free, certified eco-friendly detergents. We\'re also committed to net-zero delivery through electric vehicle partnerships.',
  },
]

export const TRUST_BADGES = [
  { id: 1, icon: '🏆', label: 'Best of 2024' },
  { id: 2, icon: '🌿', label: 'Eco Certified' },
  { id: 3, icon: '🔒', label: 'Fully Insured' },
  { id: 4, icon: '⭐', label: '4.9 on Google' },
  { id: 5, icon: '🚀', label: '50K+ Orders' },
]

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]
