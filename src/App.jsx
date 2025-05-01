import { Fragment } from 'react';
import Hero from './components/Hero';
import PartnerSlider from './components/PartnerSlider';
import WaveDivider from './components/WaveDivider';
import Competition from './components/Competition';
import Stats from './components/Stats';
import Team from './components/Team';
import About from './components/About';
import ContactForm from './components/ContactForm';


const App = () => {
   return (
      <Fragment>
         <Hero />
         <PartnerSlider />
         <WaveDivider />
         <Competition />
         <Stats />
         <WaveDivider invert />
         <Team />
         <WaveDivider />
         <About />
         <WaveDivider invert />
         <ContactForm />
      </Fragment>
   );
};

export default App;
