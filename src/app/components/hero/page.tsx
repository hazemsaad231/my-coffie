
import Image from 'next/image';
import Navbar from '../navbar/page';

const HeroPage = () => {
  return (
    <div className="h-screen pb-10 pt-5 relative px-4 sm:px-10 md:px-12 lg:px-20" id='home'>

      <Navbar />

      {/* الخلفية - الصورة */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        
      />
      <Image src="/img/coffee_image.png" alt="Coffee background" layout="fill" objectFit="cover" />

      {/* التدرج (Gradient) فوق الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] to-transparent" />

      {/* المحتوى فوق كل شيء */}
      <div className="relative z-10 flex flex-col gap-3 justify-center h-full   text-white">
        <h4 className="text-xl font-semibold">
          We’ve got your morning covered with the best coffee in town!
        </h4>
        <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl py-6 tracking-[0.3em]">Coffee</h1>

        <h6 className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 text-xl'>
          It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.
        </h6>
        <button className="bg-[#F9C06A] text-black px-4 py-2 mt-4 w-max rounded-full cursor-pointer">Order Now</button>
      </div>
    </div>
  );
};
export default HeroPage;
