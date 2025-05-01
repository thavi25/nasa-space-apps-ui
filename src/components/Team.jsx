import { people } from "../metaData";

export default function Team() {
   return (
      <div className='bg-white py-24 sm:py-32'>
         <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
               <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Our team
               </h2>
               <p className='mt-6 text-lg leading-8 text-gray-600'>
                  We’re a dynamic group of individuals who are passionate about what we do and
                  dedicated to delivering the best results for our clients.
               </p>
            </div>
            <ul
               role='list'
               className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'
            >
               {people.map((person, idx) => (
                  <li key={idx}>
                     <img
                        alt=''
                        src={person.imageUrl}
                        className='mx-auto h-24 w-24 rounded-full shadow-xl'
                     />
                     <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900'>
                        {person.name}
                     </h3>
                     <p className='text-sm leading-6 text-gray-600'>{person.role}</p>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
