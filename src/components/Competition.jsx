import { competition } from "../metaData";

const Competition = () => {
   return (
      <div id="competition" className='bg-tail py-24 sm:py-32'>
         <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
               <h2 className='text-lg font-semibold leading-7 text-fuchsia-500'>
                  Competition Guidelines
               </h2>
               <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Announcing The Hackathon For the Third Time in Sri Lankan History in direct
                  collaboration with NASA
               </p>
               <p className='mt-6 text-md leading-8 text-gray-300'>
                  We are proud and thrilled to announce, ‘NASA Space Apps Colombo, 2022’, for the
                  third consecutive year, in line with NASA’s guidelines and direct collaboration.
                  The event is organized by SEDS Sri Lanka, which is the international body that
                  strives to promote space exploration and development via educational and
                  engineering projects.
               </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl'>
               <dl className='grid max-w-4xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
                  {competition.map((feature, index) => (
                     <div
                        key={feature.name}
                        className={`relative pl-16 ${
                           index === competition.length - 1 && competition.length % 3 === 1
                              ? 'lg:col-start-2'
                              : ''
                        }`}
                     >
                        <dt className='text-base font-semibold leading-7 text-white'>
                           <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-fuchsia-500'>
                              {index + 1}
                           </div>
                           {feature.name}
                        </dt>
                        <dd className='mt-2 text-sm leading-7 text-gray-300 text-justify'>
                           {feature.description}
                        </dd>
                     </div>
                  ))}
               </dl>
            </div>
         </div>
      </div>
   );
};

export default Competition;
