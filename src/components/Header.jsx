import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WaveDivider from "./WaveDivider";

const navigation = [
   { name: 'Home', href: '/' },
   { name: 'Challenges', href: '/challenges' },
   { name: 'Hall of Fame', href: '/hall-of-fame' },
   { name: 'FAQ', href: '/faq' },
];

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const { pathname } = useLocation();
   const homeRoute = pathname === '/';
   const handleScroll = (event, href) => {
      if (href.startsWith('#')) {
         event.preventDefault();
         const targetId = href.substring(1);
         const targetElement = document.getElementById(targetId);
         if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };


   return (
      <header className={`absolute inset-x-0 top-0 z-50 flex flex-col ${!homeRoute ? 'bg-tail' : ''}`}>
         <div className='flex justify-center'>
            <nav
               aria-label='Global'
               className='flex max-w-7xl w-full items-center justify-between p-6 lg:px-8'
            >
               <div className='flex lg:flex-1'>
                  <Link to='/' className='-m-1.5 p-1.5'>
                     <span className='sr-only'>Nasa SpaceApps</span>
                     <img alt='logo' src='/logo.png' className='h-16 w-full' />
                  </Link>
               </div>
               <div className='flex lg:hidden'>
                  <button
                     type='button'
                     onClick={() => setMobileMenuOpen(true)}
                     className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
                  >
                     <span className='sr-only'>Open main menu</span>
                     <Bars3Icon aria-hidden='true' className='h-6 w-6' />
                  </button>
               </div>
               <div className='hidden lg:flex lg:gap-x-12 lg:mr-6'>
                  {navigation.map((item) => {
                     return item.href.includes('#') ? (
                        <a
                           key={item.name}
                           href={item.href}
                           onClick={(event) => handleScroll(event, item.href)}
                           className='relative text-sm font-semibold leading-6 text-white 
          before:bg-fuchsia-500 before:h-px before:w-0 before:absolute before:bottom-0 
          before:transition-all before:duration-300 before:ease-in-out hover:before:w-full'
                        >
                           {item.name}
                        </a>
                     ) : (
                        <Link
                           key={item.name}
                           to={item.href}
                           className='relative text-sm font-semibold leading-6 text-white 
          before:bg-fuchsia-500 before:h-px before:w-0 before:absolute before:bottom-0 
          before:transition-all before:duration-300 before:ease-in-out hover:before:w-full'
                        >
                           {item.name}
                        </Link>
                     );
                  })}
               </div>

            </nav>
         </div>
         {!homeRoute && <WaveDivider invert />}
         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
            <div className='fixed inset-0 z-50' />
            <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-tail px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
               <div className='flex items-center justify-between'>
                  <a href='#' className='-m-1.5 p-1.5'>
                     <span className='sr-only'>Your Company</span>
                     <img alt='' src='/logo.png' className='h-20 -ml-10 w-full' />
                  </a>
                  <button
                     type='button'
                     onClick={() => setMobileMenuOpen(false)}
                     className='-m-2.5 rounded-md p-2.5 text-gray-400'
                  >
                     <span className='sr-only'>Close menu</span>
                     <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                  </button>
               </div>
               <div className='mt-6 flow-root'>
                  <div className='-my-6 divide-y divide-gray-500/25'>
                     <div className='space-y-2 py-6'>
                        {navigation.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800'
                           >
                              {item.name}
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </DialogPanel>
         </Dialog>
      </header>
   );
};

export default Header;
