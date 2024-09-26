import Link from "next/link"
// import blinkie from '../public/blinkie.gif'
// import Image from 'next/image'
const Getstarted = ()=>{
    return (
        <main id='get-started'>
            {/* <Image src={blinkie} alt="image of blinkie"  className='blinkie'/>
            <Image src={blinkie} alt="image of blinkie"  className='blinkie'/> */}
            <h2>distributing your crypto with one easy blink</h2>
            <p>probably a smart way to give back to your community</p>
            <Link href={'/create'}><button>Get Started</button></Link>
        </main>
    )
  }
  
  export default Getstarted