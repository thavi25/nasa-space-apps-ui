import { Fragment } from 'react';
import { challenges } from '../metaData';

const Challenges = () => {
   return (
      <Fragment>
         <section className='bg-white pt-96 pb-24'>
            <div className='max-w-7xl mx-auto'>
               <h2 className='text-4xl text-stone-900 font-bold text-center mb-5'>
                  Challenges For Space App Sri Lanka 2022
               </h2>
               <p className='text-center text-stone-700'>
                  The Space App Sri Lanka is a Space Hackathon that is being conducted in Sri Lanka!
                  Here are the set of challenges that you can work on.
               </p>
               <ul
                  role='list'
                  className='grid grid-cols-1 gap-6 pt-12 px-4 xl:px-0 md:grid-cols-2 xl:grid-cols-3'
               >
                  {challenges.map(({ title, description, img }, idx) => (
                     <li
                        key={idx}
                        className='col-span-1 flex flex-col min-h-[400px] divide-gray-200 rounded-lg bg-white text-center shadow border-2 border-tail relative [perspective:1000px] group'
                     >
                        <div className='flex flex-1 flex-col px-8 justify-center group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] transition-all duration-500 [backface-visibility:hidden] absolute inset-0 m-auto [-webkit-backface-visibility:hidden]'>
                           <div>
                              <img
                                 alt='science-icon'
                                 src={img}
                                 className='mx-auto h-full w-full flex-shrink-0  object-contain'
                              />
                              <h3 className='mt-1 mb-4 font-bold text-gray-950'>{title}</h3>
                           </div>
                           <p
                              className='text-sm text-gray-700  font-bold text-balance leading-6 text-justify [transform:rotateY(180deg)]
                            [backface-visibility:hidden] absolute inset-x-0 mx-auto px-5 [-webkit-backface-visibility:hidden]'
                           >
                              {description}
                           </p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </section>
      </Fragment>
   );
};

export default Challenges;
