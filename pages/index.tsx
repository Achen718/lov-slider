import { useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Slider from '../components/Slider/Slider'

interface RefObject {
	increment: () => void
}

const Home: NextPage = () => {
	const ref = useRef<RefObject>(null);

  return (
		// Add routes/pages to Slider
    <div>
			{/* pass page title into cityname */}
			<button className="right" onClick={() => ref.current.increment()}>Left Arrow</button>
			<Slider ref={ref}/>
			<button className="right" onClick={() => ref.current.increment()}>Right Arrow</button>
    </div>
  )
}

export default Home
