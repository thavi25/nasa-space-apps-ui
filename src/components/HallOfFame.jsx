import { Fragment } from 'react';
import { globalAwards2020, globalAwards2021, localAwards2020, localAwards2021 } from '../metaData';

export default function HallOfFame() {
   return (
      <Fragment>
         <div className='bg-white pb-24 pt-80 '>
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
               <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                     International Awards 2021
                  </h2>
               </div>
               <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
               >
                  {globalAwards2021.map((award, idx) => (
                     <li
                        key={idx}
                        className={`rounded-2xl bg-tail px-8 py-10 ring-2 ring-gray-500 shadow-lg ${
                           idx === localAwards2021.length - 1 && localAwards2021.length % 3 === 1
                              ? 'lg:col-start-2'
                              : ''
                        }`}
                     >
                        <img
                           alt=''
                           src={award.imageUrl}
                           className='mx-auto h-48 w-48 rounded-md md:h-56 md:w-56 object-cover'
                        />
                        <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                           {award.name}
                        </h3>
                        <p className='text-sm leading-6 text-gray-400'>{award.role}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className='bg-white pb-24'>
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
               <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                     International Awards 2021
                  </h2>
               </div>
               <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
               >
                  {localAwards2021.map((award, idx) => (
                     <li
                        key={idx}
                        className={`rounded-2xl bg-tail px-8 py-10 ring-2 ring-fuchsia-500 shadow-lg ${
                           idx === localAwards2021.length - 1 && localAwards2021.length % 3 === 1
                              ? 'lg:col-start-2'
                              : ''
                        }`}
                     >
                        <img
                           alt=''
                           src={award.imageUrl}
                           className='mx-auto h-48 w-48 rounded-md md:h-56 md:w-56 object-cover'
                        />
                        <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                           {award.name}
                        </h3>
                        <p className='text-sm leading-6 text-gray-400'>{award.role}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className='bg-white pb-24'>
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
               <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                     International Awards 2021
                  </h2>
               </div>
               <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
               >
                  {globalAwards2020.map((award, idx) => (
                     <li
                        key={idx}
                        className={`rounded-2xl bg-tail px-8 py-10 ring-2 ring-fuchsia-500 shadow-lg ${
                           idx === localAwards2021.length - 1 && localAwards2021.length % 3 === 1
                              ? 'lg:col-start-2'
                              : ''
                        }`}
                     >
                        <img
                           alt=''
                           src={award.imageUrl}
                           className='mx-auto h-48 w-48 rounded-md md:h-56 md:w-56 object-cover'
                        />
                        <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                           {award.name}
                        </h3>
                        <p className='text-sm leading-6 text-gray-400'>{award.role}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className='bg-white pb-24'>
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
               <div className='mx-auto max-w-2xl'>
                  <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                     International Awards 2021
                  </h2>
               </div>
               <ul
                  role='list'
                  className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'
               >
                  {localAwards2020.map((award, idx) => (
                     <li
                        key={idx}
                        className={`rounded-2xl bg-tail px-8 py-10 ring-2 ring-fuchsia-500 shadow-lg ${
                           idx === localAwards2021.length - 1 && localAwards2021.length % 3 === 1
                              ? 'lg:col-start-2'
                              : ''
                        }`}
                     >
                        <img
                           alt=''
                           src={award.imageUrl}
                           className='mx-auto h-48 w-48 rounded-md md:h-56 md:w-56 object-cover'
                        />
                        <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-white'>
                           {award.name}
                        </h3>
                        <p className='text-sm leading-6 text-gray-400'>{award.role}</p>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </Fragment>
   );
}
