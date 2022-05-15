import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useRef, useEffect, Children } from 'react'
import Carousel from '../components/Slider/Carousel'
import SliderContent from '../components/Slider/SliderContent'
import PrevArrow from '../components/Slider/Arrows/PrevArrow'
import NextArrow from '../components/Slider/Arrows/NextArrow'
import { useSprings, animated } from '@react-spring/web'

interface RefObject {
	prevSlide: () => void;
	nextSlide: () => void;
}

function MyApp({ Component, pageProps }: AppProps) {
	const ref = useRef<RefObject>(null);

  return (
	<>
	{/* add layout */}
		<Component {...pageProps} />

		{/* <PrevArrow /> */}
		<button className="prev" onClick={() => ref.current.prevSlide()}>prev</button>
		<Carousel ref={ref}>
			{/* add dynamic props */}
				<SliderContent
				 cityName="Tecta"
				 description="Stretching to the south of Caerras,
				  Tecta is the only civilized and advanced basecamp
					across the world. With buildings"
					currentLocation=""
				/>
				<SliderContent
				 cityName="Ayena" 
				 currentLocation=""
				/>
		</Carousel>
		<button className="prev" onClick={() => ref.current.nextSlide()}>ncxt</button>
		{/* <NextArrow /> */}
	</>
	)
}

export default MyApp
