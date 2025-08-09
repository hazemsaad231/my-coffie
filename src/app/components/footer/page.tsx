
import Image from 'next/image';

const FooterPage = () => {
    return (
        <>
            <div className="relative">
            
            
                  {/* الخلفية - الصورة */}
                  <div 
                    className="absolute inset-0 bg-cover" 
                    
                  />
                  <Image src="/img/Rectangle.png" alt="Coffee background" layout="fill" objectFit="center"/>
            
                  {/* التدرج (Gradient) فوق الخلفية */}
                  <div className="absolute inset-0 bg-[#6F4E3799]" />
            
                  {/* المحتوى فوق كل شيء */}
                  <div className='relative z-10'>
                    <div className='flex justify-center items-center p-6'>
                        <input type="text" placeholder='Enter your email' className='bg-amber-50 w-1/2 rounded-l-lg p-3' />
                        <button className="bg-[#F9C06A] text-black p-3 w-max rounded-r-lg cursor-pointer">Subscribe</button>

                    </div>
                    <div className='flex justify-between'><div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
                          <Image
                            src="/img/pngwing1.png"
                            alt="Coffee background"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        
                         <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
                          <Image
                            src="/img/pngwing2.png"
                            alt="Coffee background"
                            width={500}
                            height={500}
                            className="w-full h-auto object-contain"
                          />
                        </div></div>
                     

                        </div>
                  
                </div>





             <div className="relative">
            
            
                  {/* الخلفية - الصورة */}
                  <div 
                    className="absolute inset-0 bg-cover" 
                    
                  />
                  <Image src="/img/footer_image.png" alt="Coffee background" layout="fill" objectFit="center"/>
            
                  {/* التدرج (Gradient) فوق الخلفية */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#603809] to-transparent" />
            
                  {/* المحتوى فوق كل شيء */}
                  <div className='relative z-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:place-items-center gap-10 p-10'>
                        <div className='text-white'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul></ul>
                        </div>

                        <div>
                            <ul>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Menu</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Features</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>News & Blogs</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Help & Supports</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li><a href="#" className='text-white hover:text-gray-400'>How we work</a></li>
                                <li><a href="#" className='text-white hover:text-gray-400'>Why choose us</a></li>
                                <li><a href="#" className='text-white hover:text-gray-400'>Pricing</a></li>
                                <li><a href="#" className='text-white hover:text-gray-400'>FAQ</a></li>

                            </ul>
                        </div>

                        <div>
                            <ul>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Terms & Conditions</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Privacy Policy</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>Contact Us</a></li>
                                <li className='mb-2'><a href="#" className='text-white hover:text-gray-400'>About Us</a></li>
                            </ul>
                        </div>

                    </div>
                    </div>
                  
                </div>
               
                
           
           
            </>
    );
}
export default FooterPage;