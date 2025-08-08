import Image from 'next/image';

const FedbackPage = () => {
  return (
    <div className='text-center py-10'>
    <div className="flex flex-col justify-end items-center " >
    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-amber-900 p-2">Our coffee perfection feedback</h1>
    <p className="text-gray-500 text-lg p-2">Our customers has amazing things to say about us</p>
    
    <div className="flex flex-col w-7/8 sm:w-7/8 md:w-3/4 lg:w-3/4 rounded-lg pt-4 mt-2 bg-orange-50 border-2 border-orange-100">
      <div className="absolute right-0 z-5 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
      <Image
        src="/img/coffee_blast2.png"
        alt="Coffee background"
        width={500}
        height={500}
        className="w-full h-auto object-contain  relative md:bottom-25"
      />
    </div>
    <div className='text-8xl font-bold text-amber-900 relative right-60'>‘‘</div>
        <p className="text-gray-600 w-full m-auto mt-2 text-lg p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
             <div className='flex flex-col items-center justify-center mt-4'>
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-amber-900">Jonny Thomas</h1>
                <p className='text-gray-500 text-lg'>Project Manager</p>
                <Image src={'/img/Rectangle9.png'} alt="client" width={100} height={100} className={'relative top-10'}/>
             </div>
    </div>
   <div className="absolute left-0 z-5 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
      <Image
        src="/img/coffee_blast1.png"
        alt="Coffee background"
        width={500}
        height={500}
      />
    </div>
    </div>
      
    </div>
  );
};
export default FedbackPage;