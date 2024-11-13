import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

import HeroImg from '../assets/hero.png';
export default function Hero() {
    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col  h-full'><h1 className= 'text-white text-6xl font-hero-font'>Hi,<br/> Im Musthafa
            <p className='text-2xl'>I'm a Full-stack developer</p>
            </h1>
            <div className="flex py-10">

                <a href='#'className="pr-5 hover:text-white"><AiOutlineTwitter size={40}/></a>
                <a href="#"className="pr-5 hover:text-white">  <AiOutlineFacebook size={40}/></a>
                <a href="#" className="hover:text-white"> <AiOutlineLinkedin size={40}/></a>         
                                          
            </div>
            </div>
            <img className='md:w-1/3 h-full' src={HeroImg}></img>
        </section>
    )
}