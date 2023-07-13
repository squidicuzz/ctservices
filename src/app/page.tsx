import Landing from '@/layout/Landing';
import Sales from '@/layout/Sales';
import Services from '@/layout/Services';
import Contacts from '@/layout/Contacts';
import Support from '@/layout/Support';
import Footer from '@/components/Footer';
import Cryptectest from '@/layout/Cryptectest';

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
