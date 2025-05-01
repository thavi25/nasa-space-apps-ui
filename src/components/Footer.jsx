import { Fragment } from "react";
import WaveDivider from "./WaveDivider";

const footerMetaData = {
   usefulLinks: [
      { name: 'Space Apps Challenge', href: 'https://www.spaceappschallenge.org/' },
      { name: 'NASA`s Open Data Universe', href: '/NASAs_Open_Data_Universe.pdf' },
      { name: 'Space Apps COVID-19', href: 'https://covid19.spaceappschallenge.org/' },
      { name: 'Participant FAQ', href: 'https://www.spaceappschallenge.org/resources/faq/' },
      { name: 'CODIV-19 Bootcamp', href: 'https://covid19.spaceappschallenge.org/bootcamp/' },
      { name: '2019 Live Stream', href: 'https://2019.spaceappschallenge.org/live-stream' }
   ],
   Resources: [
      { name: '2022 Virtual Bootcamp', href: 'https://www.spaceappschallenge.org/resources/space-apps-2021-virtual-bootcamp/' },
      { name: '2022 Judging and Awards', href: '/Space_Apps_2021_Judging_and_Awards_Guide.pdf' },
      { name: '2022 Team Formation Guide', href: '' },
      { name: '2022 FAQ', href: 'https://www.spaceappschallenge.org/resources/faq/' },
      { name: '2022 Project Submission Guide', href: 'Space_Apps_2021_Project_Submission_Guide_rev-9-27/pdf' },
      { name: '2022 Project Demo Guide', href: 'Space_Apps_2021_Project_Submission_Guide_rev-9-27/pdf' }
   ],
   contact: [
      { name: '+94 71 206 8707' },
      { name: 'info@spaceappscolombo.org', },
      { name: 'SEDS Sri Lanka, Colombo', },
   ],
   social: [
      {
         name: 'Facebook',
         href: 'https://www.facebook.com/nasaspaceappscolombo/',
         icon: (props) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
               <path
                  fillRule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clipRule='evenodd'
               />
            </svg>
         )
      },
      {
         name: 'Instagram',
         href: 'https://www.instagram.com/nasa_spaceapps_colombo/?r=nametag',
         icon: (props) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
               <path
                  fillRule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clipRule='evenodd'
               />
            </svg>
         )
      },
      {
         name: 'X',
         href: 'https://x.com/SpaceAppsLK',
         icon: (props) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
               <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
            </svg>
         )
      },
      {
         name: 'YouTube',
         href: 'https://www.youtube.com/channel/UCTLG4OxFsG0a-TrPlLGwtbw?view_as=subscriber',
         icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
               <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
               />
            </svg>
         ),
      },
      {
         name: 'LikedIn',
         href: 'https://www.linkedin.com/company/nasa-space-apps-colombo',
         icon: (props) => (
            <svg fill='currentColor' viewBox='1 1 22 22' {...props}>
               <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.27V1.73C24 .774 23.208 0 22.23 0zm-13.8 20.452h-3.69V9.005h3.69v11.447zm-1.842-13.04c-1.18 0-2.135-.96-2.135-2.144 0-1.184.954-2.145 2.135-2.145 1.18 0 2.135.961 2.135 2.145 0 1.184-.955 2.144-2.135 2.144zm14.602 13.04h-3.688v-5.88c0-1.4-.028-3.2-1.951-3.2-1.952 0-2.252 1.524-2.252 3.095v5.985h-3.69V9.005h3.544v1.563h.051c.493-.935 1.697-1.924 3.493-1.924 3.734 0 4.422 2.457 4.422 5.65v6.158z" />
            </svg>
         )
      }
   ]
};

export default function Footer() {
   return (
      <Fragment>
         <WaveDivider />
         <footer aria-labelledby='footer-heading' className='bg-tail'>
            <h2 id='footer-heading' className='sr-only'>
               Footer
            </h2>
            <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>
               <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                  <div className='space-y-8'>
                     <img alt='Company name' src='logo.png' className='h-24 w-fit' />
                     <p className='text-sm leading-6 text-white'>
                        Making the world a better place through constructing elegant hierarchies.
                     </p>
                     <div className='flex space-x-6'>
                        {footerMetaData.social.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              className='text-white transition-all hover:text-fuchsia-400'
                           >
                              <span className='sr-only'>{item.name}</span>
                              <item.icon aria-hidden='true' className='h-6 w-6' />
                           </a>
                        ))}
                     </div>
                  </div>
                  <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:w-max'>
                     <div className='md:grid md:grid-cols-3 md:gap-8'>
                        <div>
                           <h3 className='text-sm font-semibold leading-6 text-white'>Useful Links</h3>
                           <ul role='list' className='mt-6 space-y-4'>
                              {footerMetaData.usefulLinks.map((item) => (
                                 <li key={item.name}>
                                    <a
                                       href={item.href}
                                       target="_blank"
                                       className='text-sm leading-6 text-gray-200 transition-all hover:text-white'
                                    >
                                       {item.name}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className='mt-10 md:mt-0'>
                           <h3 className='text-sm font-semibold leading-6 text-white'>Resources</h3>
                           <ul role='list' className='mt-6 space-y-4'>
                              {footerMetaData.Resources.map((item) => (
                                 <li key={item.name}>
                                    <a
                                       target="_blank"
                                       href={item.href}
                                       className='text-sm leading-6 text-gray-300 hover:text-white'
                                    >
                                       {item.name}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div>
                           <h3 className='text-sm font-semibold leading-6 text-white'>Contact Us</h3>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                           </svg>

                           <ul role='list' className='mt-6 space-y-4'>
                              {footerMetaData.contact.map((item) => (
                                 <li key={item.name}>
                                    <span
                                       className='text-sm leading-6 text-gray-200 transition-all hover:text-white'
                                    >
                                       {item.name}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>


                  </div>
                  <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
                     <p className='text-xs leading-5 text-gray-400'>
                        Copyright © 2022 SEDS Sri Lanka. All Rights Reserved
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      </Fragment>
   );
}
