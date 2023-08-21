import Landing from '@/layout/sections/Landing';
import Sales from '@/layout/sections/Sales';
import Services from '@/layout/sections/Services';
import Contacts from '@/layout/sections/Team';
import Support from '@/layout/sections/Contact';
import Footer from '@/layout/components/Footer';
import Cryptectest from '@/layout/sections/CryptectestGame';
import Navbar from '@/layout/components/Navbar';
import Metrix from '@/layout/sections/Metrix';
import MetrixMobile from '@/layout/sections/MetrixMobile';
import ContactUs from '@/layout/components/Email';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Sales />
      <Support />
      <Services />
      <Contacts />
      <Metrix />
      <MetrixMobile />
      <Cryptectest />
      <ContactUs />
      <Footer />
    </main>
  )
}
