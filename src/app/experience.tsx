import Head from "next/head";
import { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";


const jobs = [
  {
      title: "Undergraduate Researcher",
      company: "University of Illinois at Urbana Champaign",
      start: "May 2021",
      end: "August 2021",
      description: [
          "Constructed mathematical models of the behavior of superconducting nanowires using the Mathematica programming language, demonstrating the conductivity of the nanowires at different conditions",
          "Presented findings to research group members in a graphical format using Mathematica plotting packages to draw graphs illustrating the behavior of the nanowires in different conditions",
          "Learned about cutting-edge experimental techniques in the field of condensed matter by collaborating with group members",
      ]
  },
  
  
]

const OSS  = [
  {
    Name: "Rust",
    Link: "https://github.com/rust-lang/rust",
    Description: ["Fixed an issue in the Rust language repository on GitHub wherein the Rust compiler panics when running a certain command"
         ],},
  {
    Name: "Pandas",
    Link: "https://github.com/pandas-dev/pandas",
    Description: [ "Extended the functionality of the Pandas warnings library to catch multiple warnings,and added tests to verify whether the warnings library catches multiple warnings"]
  }
]
 type IdProps = {
   id: string
 }
export default function Experience ({id}: IdProps) {
  return (
    <>
    <div className="p-4  min-h-screen bg-base-200" >
      <h1 className="text-3xl text-center font-extrabold" id = {id}>Experience</h1>
      <div className="divider divider-primary"></div>
      {jobs.map((job) => (
        <div key={job.title} className="p-4">
          <h2 className="text-xl font-bold">{job.title} at {job.company}</h2>
          <p className="text-sm font-semibold p-1">{job.start} - {job.end}</p>
          <ul className="list-disc pl-4">
            {job.description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <h1 className="text-3xl text-center font-extrabold m-6" >Open Source Contributuions</h1>
      <div className="divider "></div>
      {OSS.map((repo) => (
        <div key = {repo.Name} className = 'p-4'>
          <h2 className="text-xl font-bold"><a href= {repo.Link}>{repo.Name}</a></h2>
          <h3 className="text-lg font-semibold"><a className="link link-hover" href= {repo.Link}>{repo.Link}</a></h3>
          <ul className="list-none pl-2">
            {repo.Description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
          </div>
      ))}
    </div>
    
   
    </>
  );
};


