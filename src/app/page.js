import Header from '@/components/common/Header';
import HeroSection from '@/components/home/HeroSection';
import OurCommitment from '@/components/home/OurCommitment';
import OurServices from '@/components/home/OurServices';
import OurValues from '@/components/home/OurValues';


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurCommitment />
      <OurServices />
      <OurValues />
    </>
  );
}
