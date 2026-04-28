import Hero from '@/components/Hero'
import PropertyGrid from '@/components/PropertyGrid'
import Features from '@/components/Features'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Properties Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our hand-picked selection of premium properties in the most sought-after locations.
            </p>
          </div>
          <PropertyGrid />
          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      <Features />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-luxury-600">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our expert team guide you through the journey of finding your perfect luxury property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
