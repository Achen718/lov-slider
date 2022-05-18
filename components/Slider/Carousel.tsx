import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useSprings, animated, config, easings } from '@react-spring/web'
import sliderStyles from '../../styles/Slider.module.scss'

interface Props {
	children?: React.ReactNode[];
}

// background images
const bgImages = [
	'/bg1.png',
	'/bg2.jpg'
]

// eslint-disable-next-line react/display-name
const Carousel: NextPage<Props> = React.forwardRef(({ children = [] }, ref) => {
	const [ activeIndex, setActiveSlide ] = useState(0);

	const springs = useSprings(
		children.length,
		children.map(() => ({
			styles: activeIndex,
			config: {
				duration: 1400,
				easing: easings.easeInOutQuart,
			},
		}))
	)

	const childSlides = children.map((child, index) => (
		<div className={sliderStyles.carouselItem} key={index}>
			{child}
		</div>))

	const updateSlide = (slideIndex: number) => {
		if(slideIndex < 0) {
			slideIndex = 0;
		} else if (slideIndex >= React.Children.count(children)) {
			slideIndex = React.Children.count(children) - 1;
		}

		setActiveSlide(slideIndex);
	}

	useImperativeHandle(ref, () => ({
		prevSlide,
		nextSlide,
	}))

	const prevSlide = () => updateSlide(activeIndex - 1)
	const nextSlide = () => updateSlide(activeIndex + 1)

	// Todo
	// add useeffect
	// Add currentLocation logic

  return (
		<>

    <div className={sliderStyles.carousel}>
			{springs.map(({ styles } , i: number) => (
				<animated.div key={i} className={sliderStyles.inner} style={{
					transform: styles
					.to(
						// scrolls -100% to next slide, can use window width
						(active) => `translate3d(${(active - i) * -100}%, 0, 0)`
					),
					opacity: styles
					.to(
						[0.1, 0.3, 0.5, 0.7, 0.8], [0.7, 0.1, 0.3, 0.4, 0.7]
						),
					backgroundImage: `url(${bgImages[i]})`,
				}}>
					{childSlides[i]}
				</animated.div>
        )
      )}
    </div>
		</>
  )
})

export default Carousel
