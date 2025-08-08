import AboutPage from './components/about/page';
import FedbackPage from './components/feedback/page';
import HeroPage from './components/hero/page';
import MenuPage from './components/menu/page';
import SerivesPage from './components/serives/page';
export default function Home() {
  return (
    <div className="">

      
      <HeroPage />
      <AboutPage/>
      <MenuPage/>
      <SerivesPage/>
      <FedbackPage/>

    </div>
  );
}
