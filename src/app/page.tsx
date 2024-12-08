import Image from "next/image";
import Hero from "../../public/Rectangle 2 (1).png"
import Venter from "../../public/Vector.png"
import Asd from "../../public/Frame 60.png"

// compoments
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/TopSelling"
import Review from "@/components/Reviw"



export default function Home() {
  return ( 
<div>
  {/* // start  hero section */}
  <div>
    <div className="relative">
<div className="w-[100%] h-full overflow-x-hidden">
  <Image 
    src={Hero} 
    alt="hero" 
    className="object-cover w-screen  h-5/6"
    
 
  />
  <div className=" absolute top-14 right-[10%]">
    <Image src={Venter} alt="Vender" className="" />  
  </div>
  <div className=" absolute xl:top-80 lg:top-40 flex justify-center xl:ml-[700px] lg:ml-[400px]  ">
    <Image src={Venter} alt="Vender" className=" w-2/3 " />  

  </div>
  <div className=" absolute top-[4%] ml-10">
    <span className=" xl:text-6xl font-black lg:text-4xl ">FIND CLOTHES</span><br></br>
    <span className=" xl:text-6xl font-black lg:text-4xl">THAT MATCHES</span><br></br>
    <span className=" xl:text-6xl font-black lg:text-4xl">YOUR STYLE</span>
    <p className=" xl:mt-10 lg:mt-5">Browse through our diverse range of meticulously crafted garments, designed <br></br> to bring out your individuality and cater to your sense of style.</p>
    <button className=" mt-10 bg-black rounded-full text-white  w-60 h-12">
      SHOP NOW
    </button>
  </div>

  </div>
  {/* End hero section */}
  
{/* second  navbar start */}
<div className="bg-black xl:p-6 lg:p-4 text-white  ">
  <ul className="flex justify-between px-6 ">
    <li className="xl:text-2xl lg:text-xl ">VERSACE</li>
    <li className =" xl:text-2xl lg:text-xl">ZARA</li>
    <li className =" xl:text-2xl lg:text-xl">GUCCI</li>
    <li className ="xl:text-2xl lg:text-xl">PARADA</li>
    <li className ="xl:text-2xl lg:text-xl">Calvinklein</li>
  </ul>

</div>


{/* NEW ARRIVAL */}
<div id="new-arrival">
<NewArrival/>
</div>


 {/* top selling start */}


 <div id="sale">
  <TopSelling/>
 </div>


 {/* img secton  start*/}
 <div id="Brand">
 <div className="flex justify-center mt-16 ">
 <Image src={Asd} alt="Ashirt" className="rounded xl:w-[1400px] lg:w-[900px]"  /> 
 </div>
 </div>
 {/* image section end */}

 {/* reweiew section */}
<Review/>
 {/* rewiwew end */}



</div >
  </div>


  </div>
  );
}
