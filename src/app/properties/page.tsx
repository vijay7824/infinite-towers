import PropertyGrid from '@/components/PropertyGrid'

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Properties"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient">Properties</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our exclusive collection of luxury properties in prime locations.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Locations</option>
                <option>New York</option>
                <option>California</option>
                <option>Florida</option>
                <option>Colorado</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Types</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Loft</option>
                <option>Estate</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Price Range</option>
                <option>$0 - $1M</option>
                <option>$1M - $3M</option>
                <option>$3M - $5M</option>
                <option>$5M+</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">6</span> properties
            </p>
          </div>
          <PropertyGrid />
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
