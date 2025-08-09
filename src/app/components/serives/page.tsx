
import Image from 'next/image';

const ServicesPage = () => {
  return (

    <>
    <div className="relative">


      {/* الخلفية - الصورة */}
      <div 
        className="absolute inset-0 bg-cover" 
        
      />
      <Image src="/img/Rectangle.png" alt="Coffee background" layout="fill" objectFit="center"/>

      {/* التدرج (Gradient) فوق الخلفية */}
      <div className="absolute inset-0 bg-[#6F4E3796]" />

      {/* المحتوى فوق كل شيء */}
      <div className='relative z-10 flex justify-around items-center'>
 <div className="flex flex-col gap-3 px-5 sm:px-10 md:px-20 lg:px-20 text-white">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-full md:w-3/4 lg:w-3/4" >
            Get a chance to have an Amazing morning
        </h1>

        <h6 className='w-full sm:w-full md:w-3/4 lg:w-3/4 text-sm sm:text-sm md:text-lg lg:text-xl'>
          We are giving you are one time opportunity to experience a better life with coffee.
        </h6>
        <button className="bg-[#F9C06A] px-4 text-black py-2 mt-4 w-max rounded-full cursor-pointer my-4">Order Now</button>
      </div>
      <div className='z-10 py-10'>
 <Image src="/img/cup.png" alt="Coffee product" width={300} height={300} />
      </div>
        </div>
    <div className="absolute right-0 bottom-0 z-5 w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
  <Image
    src="/img/coffee_bean.png"
    alt="Coffee background"
    width={500}
    height={500}
    className="w-full h-auto object-contain"
  />
</div>
      
    </div>
   
    </>
  );
};
export default ServicesPage;
