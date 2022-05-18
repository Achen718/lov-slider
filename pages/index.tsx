import React, { useRef, useEffect } from 'react'
import type { NextPage } from 'next'
import Carousel from '../components/Slider/Carousel'
import SliderContent from '../components/Slider/SliderContent'
import Layout from '../components/Layout'
import buttonStyles from '../styles/SliderContent.module.scss'

const Home: NextPage = () => {
	const ref = useRef<any>(null);

  return (
	<>
	{/* add layout */}
		<Layout>
		{/* componentize*/}
		<div className="buttons">
			<a className={buttonStyles.prev} onClick={() => ref.current.prevSlide()}>
				<i></i>
			</a>
			<a className={buttonStyles.next} onClick={() => ref.current.nextSlide()}>
				<i></i>
			</a>
		</div>
		
		<Carousel ref={ref}>
			{/* To do*/}
				{/* pass bg prop, bg based on page index */}
				<SliderContent
				 cityName="Tecta"
				 description="Stretching to the south of Caerras,
				  Tecta is the only civilized and advanced basecamp
					across the world. With buildings..."
				/>
				<SliderContent
				 cityName="Ayena" 
				 description="Lorem ipsum, or lipsum as it is sometimes 
				 known, is dummy text used in laying out print, graphic 
				 or web designs... "
				/>
		</Carousel>
		
		</Layout>
	</>
	)
}

export default Home
