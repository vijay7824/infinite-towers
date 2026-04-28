export const PROPERTY_TYPES = [
  'Villa',
  'Penthouse',
  'Loft',
  'Estate',
  'Condo',
  'Townhouse',
  'Mansion',
] as const

export const PROPERTY_STATUS = [
  'available',
  'sold',
  'pending',
  'off-market',
] as const

export const PRICE_RANGES = [
  { label: '$0 - $500K', min: 0, max: 500000 },
  { label: '$500K - $1M', min: 500000, max: 1000000 },
  { label: '$1M - $2M', min: 1000000, max: 2000000 },
  { label: '$2M - $5M', min: 2000000, max: 5000000 },
  { label: '$5M+', min: 5000000, max: Infinity },
] as const

export const LOCATIONS = [
  'Manhattan, New York',
  'Beverly Hills, California',
  'Miami Beach, Florida',
  'Aspen, Colorado',
  'Brooklyn, New York',
  'Malibu, California',
] as const

export const AMENITIES = [
  'Swimming Pool',
  'Gym',
  'Garden',
  'Garage',
  'Security System',
  'Smart Home',
  'Wine Cellar',
  'Home Theater',
  'Tennis Court',
  'Spa',
] as const

export const CONTACT_SUBJECTS = [
  { value: 'property-inquiry', label: 'Property Inquiry' },
  { value: 'schedule-tour', label: 'Schedule Tour' },
  { value: 'valuation', label: 'Property Valuation' },
  { value: 'general', label: 'General Question' },
  { value: 'partnership', label: 'Partnership Opportunity' },
] as const

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
] as const
