import { Footer, Hero,
PopularProducts, RecentStories, SpecialOffer,
SuperQuality } from './sections';
import Nav from './components/Nav';



export default function App() {
  return (
    <main className="relative">
      <Nav /> 
      <section className="xl:padding-1
      wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="bg-pale-blue padding">
        <PopularProducts />
      </section>
      
      <section className="bg-pale-blue padding-x py-10">
      <RecentStories />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section> */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
  )
}