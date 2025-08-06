
import Image from "next/image"
import Data from "../data/page"
import React from "react";


const MenuPage = async () => {

    interface Coffee {
        id: number;
        title: string;
        image: string;
        ingredients: string[];
    }

 
 const data = await fetch('https://api.sampleapis.com/coffee/hot')
  const coffees = await data.json()
  const myCoffees = coffees.slice(0, 4) // Limit to 8 items for display


const prices = [{id:1, price:'2$'}, {id:2, price:'3$'}, {id:3, price:'4$'}, {id:4, price:'5$'}, {id:5, price:'6$'}, {id:6, price:'3.50$'}, {id:7, price:'4$'}, {id:8, price:'2.50$'}]

  

    return (
<>
        <div className="flex flex-col items-center justify-center pt-4" style={{ fontFamily: 'Geist_Mono' }} id='menu'>

            <div className="text-center">
            <h1 className="text-5xl font-bold text-amber-900" style={{ fontFamily: 'Combo' }}>Enjoy a new blend of coffee style</h1>
            <p className="text-gray-400 mt-4 text-lg">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 mb-20 p-5">
                {myCoffees.map((coffee: Coffee) => (
                    
                    <div key={coffee.id} className="flex flex-col items-center justify-center rounded-lg w-max m-auto bg-orange-50 border-2 border-orange-100">
                        
                        <Image src={coffee.image} alt="" width={200} height={200} className="w-60 h-60 object-center"/>
                        <h2 className="text-xl font-bold text-amber-900 mb-2">{coffee.title}</h2>
                        <div className="flex flex-wrap justify-center items-center gap-1">
                         {coffee.ingredients.map((ingredient: string, index: number) => (
                            < React.Fragment key={index}> <h2 className="text-gray-500 text-sm">{ingredient}</h2>
                            {index !== coffee.ingredients.length - 1 && <span className="text-gray-500">|</span>}
                            </ React.Fragment>
                            
                           
                        ))}

                        </div>
                     
                           <span className="text-amber-900 font-bold text-lg mt-1">{prices[coffee.id]?.price}</span>

                            <button className="bg-[#F9C06A] text-black px-4 py-2 w-max rounded-full cursor-pointer relative top-6">Order Now</button>

                    </div>
                ))}

            </div>

            </div>
    
        </div>
    {/* <div  className="absolute right-0 hidden lg:block"> <Image src="/img/coffee_blast2.png" alt="About Coffee" width={300} height={300}  /> </div> */}

                        <div className="flex flex-col items-center justify-center text-center ">
                            <h1 className="text-5xl font-bold text-amber-900 mb-1" style={{ fontFamily: 'Combo' }}>
                                Why are we different?
                            </h1>
                            <p className="text-gray-400 mt-4 px-2 text-lg">We don’t just make your coffee, we make your day!</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 p-10">

{Data.map((item: any) => (
                                <div key={item.id} className="flex flex-col items-center justify-center rounded-lg p-8 mt-2 w-max m-auto bg-orange-50 border-2 border-orange-100" style={{ fontFamily: 'Geist_Mono' }}>
                                    <Image src={item.image} alt={item.title} width={50} height={50} className="w-16 h-16 object-center mb-4" />
                                    <h2 className="text-xl font-bold text-amber-900 mb-2">{item.title}</h2>
                                    <p className="text-gray-500 text-sm">{item.text}</p>
                                </div>
))}

                            </div>
                           
                        </div>

</>
    )
}

export default MenuPage;