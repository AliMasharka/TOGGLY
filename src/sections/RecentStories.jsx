import { truckFast } from "../assets/icons";
// import img1 from './assets/aliens1.png'

const Services = () => {
  return (
    <section className="flex-center flex-col">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-center">
          <h2 className="font-palanquin text-[30px] bold-40 lg:bold-64 xl:max-w-[390px]">Our Sponsored Companies</h2>
        </div>
        <div className="flex flex-wrap justify-between">
        <img 
            src={truckFast}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Services