import Navbar from "./components/navbar"
import Image from "next/image"
import Footer from "./components/footer"
import { useEffect } from "react";
import Head from "next/head";
// eslint-disable-next-line import/no-anonymous-default-export
export default function About() {
   
    return(
        <>
        <div>
      <Head>
        <title>About Me | Shourya Ghosh</title>
      </Head>
     
    </div>
        <Navbar></Navbar>
        
         <div className="hero min-h-screen bg-base-200">
            
            <div className="hero-content text-start flex-col">
            <div className="avatar py-3">
  <div className="w-64 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2 z-0 ">
    <Image priority src="/about.jpeg" height={500} width={500} alt = "profile image" />
  </div>
</div>
                <div className="max-w-md text-center">
                    <h1 className="text-5xl font-bold">About Me</h1>
                    <div className="divider"></div>
                    <p className="py-0 leading-loose font-normal text-lg ">I am an undergraduate student currently in his junior year majoring in physics with a concetration in computational physics.
                    I have conducted research in condensed matter physics using the mathematica programming language.I am also an active contributor to FOSS projects like the
                    Rust programming language,pandas(the python data science library) and the LLVM project.
                    I am also currently seeking internships in software engineering and data science roles and will be also seeking new grad roles before I graduate.
                    Feel free to contact me for any opportunities,and do check out my personal coding projects.   
                    <br></br>
                    <br></br>
                    <a className = 'link link-hover'href="/Shourya_resume.pdf">Click here to download my resume</a>
                    <br></br>
                    </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}