import { customer1 } from "../assets/images";
import { chevronLeft } from "../assets/icons";


const SuperQuality = () => {
  return (
    <section className="flex-center flex-col">
      <div className="padding-container max-container w-full pb-24">
      <p className="uppercase regular-18 -mt-1 mb-3 text-sky-500/50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="font-palanquin text-[70px] bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="info-text regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
      <img src={customer1}
       alt='rating icon'
        width={1440}
         height={580}
         className="w-full object-cover object-center rounded-3xl" />
         <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
         <img 
            src={chevronLeft}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="info-text regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-sky-500/50">48 min</p>
              </div>
              <p className="info-text bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="info-text regular-16 text-gray-20">Start track</p>
              <h4 className="info-text bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuperQuality