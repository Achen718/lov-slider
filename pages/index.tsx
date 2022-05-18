import { useRef } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/Slider/Carousel'
import SliderContent from '../components/Slider/SliderContent'

interface RefObject {
	increment: () => void
}

const Home: NextPage = () => {
  return (
    <div>
			Home
    </div>
  )
}

export default Home
