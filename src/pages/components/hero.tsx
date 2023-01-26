import Image from 'next/image'
export default function Hero() {
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row space-x-8">
          <Image src="/profile.jpeg" className="max-w-sm rounded-full shadow-2xl" alt = "profile image" width={300} height = {300}/>
          <div>
            <h1 className="text-5xl font-bold gr max-w-md:">Hi There! 👋</h1>
            <p className="py-6 font-normal  text-lg whitespace-normal "><strong>My name is Shourya Ghosh </strong>
            and I am an undergraduate studying in the University of Illinois at Urbana Champaign majoring 
            in Physics.I am actively involved in the FOSS (Free and Open source) community ,being an active contributor to the <a className='link link-hover' href='https://github.com/rust-lang/rust'>Rust programming language</a>.My other interests involve reading sci-fi books,physics and origami</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
)
}