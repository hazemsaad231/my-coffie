import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10" id='about'>



     <div className="mt-20">

        <div className="px-10 sm:px-10 md:px-20 lg:px-20">
        <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-5xl text-amber-900 font-bold mb-4'>
                Discover the best coffee
         </h1>
 
       
        <h6 className='w-full text-lg text-gray-400 font-sans mb-2'>
                Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood.
                 Having a cup of coffee is good, but having a cup of real coffee is greater.
                 
        </h6>
        <button className="bg-[#F9C06A] text-black px-4 mt-2 py-2 w-max rounded-full cursor-pointer">Learn More</button>
        </div>
                <Image src="/img/coffee_blast.png" alt="About Coffee" width={400} height={300} />

     </div>

        <div>
       <Image src="/img/coffee.png" alt="About Coffee" width={600} height={400}></Image>
        </div>

    </div>
  );
};

export default AboutPage;