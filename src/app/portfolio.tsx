import Head from "next/head";
import Footer from "./components/footer";
import Navbar from "./components/navbar";




const light1 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=Calendar_bot"
const dark1 = "https://github-readme-stats.vercel.app/api/pin/?username=laaouatni&repo=gcode.js&theme=dark"
const light2 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=FireStorm"
const light3 = "https://github-readme-stats.vercel.app/api/pin/?username=shourya5&repo=shouryaghosh.com"

export default function Portfolio() {
 
 
    return (
      
      <>
      <div>
      <Head>
        <title>Portfolio | Shourya Ghosh</title>
      </Head>
     
    </div>
     
      <div className="p-4  min-h-screen bg-base-200" id="port">
        <h1 className="text-3xl text-center font-extrabold pb-10 pt-4">Portfolio</h1>
        <div className="container mx:auto">
        <div className="grid grid-cols-1 grid-flow-row center md:grid-cols-2 lg:grid-cols-3 gap-6 content-center px-3">
        
        <a href="https://github.com/shourya5/Calendar_bot"><figure className=''><img className = 'invert-0 px-'src={light1} alt='git1' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
        <a href = 'https://github.com/shourya5/FireStorm'><figure className=''><img className = 'invert-0'src={light2} alt='git2' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
        <a href = 'https://github.com/shourya5/shouryaghosh.com'><figure className=''><img className = 'invert-0 'src={light3} alt='git2' width={400 * 1.12} height = {120 * 1.12}/></figure></a>
        </div>
        
      </div>
      </div>
      
      </>
    )
  }