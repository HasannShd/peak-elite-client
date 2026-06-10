import {
  Briefcase,
  Building2,
  CalendarCheck,
  ClipboardList,
  Handshake,
  Home,
  Hotel,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const company = {
  name: 'PEAK ELITE W.L.L',
  location: 'Bahrain',
  email: 'info@peakelitebh.com',
  phone: '+973 0000 0000',
  whatsapp: '+973 0000 0000',
};

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Markets', href: '#markets' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '5+', label: 'Years in Bahrain' },
  { value: '50+', label: 'Team Members' },
  { value: '24/7', label: 'Support Available' },
];

export const services = [
  {
    title: 'Cleaning Services',
    body: 'Routine and deep cleaning for offices, commercial sites, residential properties, and operational spaces — done properly, every time.',
    icon: Sparkles,
  },
  {
    title: 'Wardrobe Management',
    body: 'Professional decluttering, categorising, arranging, ironing, and steaming — transforming chaotic wardrobes into calm, organised spaces.',
    icon: Shirt,
  },
  {
    title: 'Facility Maintenance',
    body: 'Day-to-day facility support, minor maintenance coordination, site readiness, and operational upkeep for commercial and residential clients.',
    icon: Wrench,
  },
  {
    title: 'Hospitality Staffing',
    body: 'Professional staffing for hotels, serviced residences, events, receptions, and guest-facing business environments.',
    icon: Hotel,
  },
  {
    title: 'Event Support',
    body: 'Pre-event setup, on-ground support, cleaning coordination, guest flow management, and post-event operational assistance.',
    icon: CalendarCheck,
  },
  {
    title: 'General Operations',
    body: 'Flexible support for recurring operations, temporary workload needs, and service coordination across any type of space.',
    icon: ClipboardList,
  },
];

export const strengths = [
  {
    title: 'Bahrain-focused delivery',
    body: 'Built for local businesses, residences, hospitality venues, and event teams that need reliable, on-ground support.',
    icon: Building2,
  },
  {
    title: 'Elite presentation standards',
    body: 'Uniformed teams, professional conduct, and service standards that protect your environment and guest experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Flexible coverage',
    body: 'Support structured around recurring schedules, seasonal needs, special events, or urgent requests — at any scale.',
    icon: Handshake,
  },
];

export const markets = [
  { label: 'Commercial Offices', icon: Building2 },
  { label: 'Hospitality Venues', icon: Hotel },
  { label: 'Events & Exhibitions', icon: CalendarCheck },
  { label: 'Residential Clients', icon: Home },
  { label: 'Retail & Mixed-Use Spaces', icon: ShoppingBag },
  { label: 'Business Operations Teams', icon: Briefcase },
];

export const process = [
  'Requirement Review',
  'Service Plan',
  'Team Coordination',
  'On-Site Delivery',
  'Follow-Up',
];

export const socialGoals = [
  'Instagram',
  'TikTok',
  'Facebook',
  'WhatsApp Business',
];

export const trustPoints = [
  'Cleaning & facility support',
  'Hospitality & event staffing',
  'Bahrain market focus',
  'Professional uniforms',
];
