import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";




const light1 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=Calendar_bot"
const dark1 = "https://github-readme-stats.vercel.app/api/pin/?username=laaouatni&repo=gcode.js&theme=dark"
const light2 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=FireStorm"
const light3 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=shouryaghosh.com"

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
 
    return (
      <><Navbar></Navbar>
      <div className="p-4  min-h-screen bg-base-200">
        <h1 className="text-3xl text-center font-extrabold pb-10 pt-4">Portfolio</h1>
        <div className="grid md:grid-flow-col  md:auto-cols-max gap-8 md:mx-10 mx-20 ">
        <a href="https://github.com/shourya5/Calendar_bot"><figure className='invert-0 '><img className = 'invert-0'src={light1} alt='git1' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
        <a href = 'https://github.com/shourya5/FireStorm'><figure className='invert-0'><img className = 'invert-0'src={light2} alt='git2' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
        <a href = 'https://github.com/shourya5/shouryaghosh.com'><figure className='invert-0'><img className = 'invert-0'src={light3} alt='git2' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
  
      </div>
      </div>
      <Footer></Footer>
      </>
    )
  }