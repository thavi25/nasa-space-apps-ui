const Hero = () => {
   return (
      <section className='bg-gray-900'>
         <div className='relative isolate overflow-hidden pt-14 min-h-screen'>
            <img
               alt=''
               src='/hero.png'
               className='absolute inset-0 -z-10 h-full w-full object-cover'
            />
            <div
               aria-hidden='true'
               className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            >
               <div
                  style={{
                     clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                  }}
                  className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
               />
            </div>
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
               <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                  <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-white/20'>
                     Colombo, Sri Lanka{' '}
                     <span href='#' className='font-semibold text-white'>
                        <span aria-hidden='true' className='absolute inset-0' />
                        1st & 2nd October
                        {/* <span aria-hidden='true'>&rarr;</span> */}
                     </span>
                  </div>
               </div>
               <div className='text-center'>
                  <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                     Challenge Yourself This Year with Space App <br /> Sri Lanka
                  </h1>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                     {/* Gray text under the h1 */}
                  </p>
                  <div className='mt-10 flex items-center justify-center gap-x-6'>
                     <a
                        href='https://www.youtube.com/watch?v=39WSi3JKMIs&t=17s&ab_channel=SEDSSriLanka'
                        target='_blank'
                        className='rounded-md bg-fuchsia-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'
                     >
                        See It in Action
                     </a>
                     <a
                        href='https://2022.spaceappschallenge.org/locations/colombo'
                        target='_blank'
                        className='text-sm font-bold leading-6 focus:outline-none text-white'
                     >
                        Register Now <span aria-hidden='true'>→</span>
                     </a>
                  </div>
               </div>
            </div>
            <div
               aria-hidden='true'
               className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            >
               <div
                  style={{
                     clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                  }}
                  className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
               />
            </div>
         </div>
      </section>
   );
};

export default Hero;
