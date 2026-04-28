import PropertyCard from './PropertyCard'

const properties = [
  {
    id: '1',
    title: 'Modern Sky Villa',
    location: 'Manhattan, New York',
    price: '$2,850,000',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
  },
  {
    id: '2',
    title: 'Luxury Penthouse',
    location: 'Beverly Hills, California',
    price: '$5,750,000',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25418c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
  },
  {
    id: '3',
    title: 'Ocean View Estate',
    location: 'Miami Beach, Florida',
    price: '$3,200,000',
    bedrooms: 3,
    bathrooms: 2,
    area: '2,800 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'Urban Loft',
    location: 'Brooklyn, New York',
    price: '$1,850,000',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,600 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'Mountain Retreat',
    location: 'Aspen, Colorado',
    price: '$4,200,000',
    bedrooms: 6,
    bathrooms: 5,
    area: '5,500 sq ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '6',
    title: 'Waterfront Mansion',
    location: 'Malibu, California',
    price: '$8,900,000',
    bedrooms: 7,
    bathrooms: 6,
    area: '7,200 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25418c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: true,
  },
]

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  )
}
