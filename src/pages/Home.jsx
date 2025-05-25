import CustomSection from '../features/home/CustomSection';
import FeaturesSection from '../features/home/FeaturesSection';
import MainHome from '../features/home/MainHomeSection';
import NewsLetterSection from '../features/home/NewsLetterSection';

function Home() {
  return (
    <>
      <MainHome />
      <FeaturesSection />
      <CustomSection />
      <NewsLetterSection />
    </>
  );
}

export default Home;
