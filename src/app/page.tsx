import Landing from '@/components/Landing';
import Sales from '@/components/Sales';
import Services from '@/components/Services';
import Contacts from '@/components/Contacts';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import Cryptectest from '@/components/Cryptectest';

export default function Home() {
  return (
    <main>
      <Landing />
      <Sales />
      <Services />
      <Contacts />
      <Support />
      <Cryptectest />
      <Footer />
    </main>
  )
}
