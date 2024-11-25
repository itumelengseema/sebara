import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HeroSection from '@/components/home/HeroSection';
import OurCommitment from '@/components/home/OurCommitment';
import OurProjects from '@/components/home/OurProjects';
import OurServices from '@/components/home/OurServices';
import OurValues from '@/components/home/OurValues';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurProjects />
      <OurValues />
      <OurCommitment />
      <OurServices />
      <Footer />  
    </>
  );
}
