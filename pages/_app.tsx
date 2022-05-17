import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useRef, useEffect, Children } from 'react'
import Carousel from '../components/Slider/Carousel'
import SliderContent from '../components/Slider/SliderContent'
import Layout from '../components/Layout'
import { prev, next } from '../styles/SliderContent.module.scss'
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
		
		<Layout>
			<Component {...pageProps} />
		{/* <PrevArrow /> */}
		<div className="buttons">
			<button className={prev} onClick={() => ref.current.prevSlide()}>prev</button>
			<button className={next} onClick={() => ref.current.nextSlide()}>next</button>
		</div>
		
		<Carousel ref={ref}>
			{/* To do*/}
				{/* pass bg prop, bg based on page index */}
				{/* current location boolean? */}
				<SliderContent
				 cityName="Tecta"
				 description="Stretching to the south of Caerras,
				  Tecta is the only civilized and advanced basecamp
					across the world. With buildings..."
					currentLocation=""
				/>
				<SliderContent
				 cityName="Ayena" 
				 description="Lorem ipsum, or lipsum as it is sometimes 
				 known, is dummy text used in laying out print, graphic 
				 or web designs... "
				 currentLocation=""
				/>
		</Carousel>
		
		</Layout>
		{/* <NextArrow /> */}
	</>
	)
}

export default MyApp
