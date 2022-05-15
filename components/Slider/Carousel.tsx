import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useSprings, animated, config, easings } from '@react-spring/web'
import sliderStyles from '../../styles/Slider.module.scss'

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const Carousel: NextPage<Props> = ({ children = [] }, ref) => {
	const [ activeIndex, setActiveSlide ] = useState(0);

	const springs = useSprings(
		children.length,
		children.map((activeIndex) => ({
			styles: activeIndex,
			// add easings config(ease in out)
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
		nextSlide
	}))

	const prevSlide = () => updateSlide(activeIndex - 1)
	const nextSlide = () => updateSlide(activeIndex + 1)

	// Todo
	// add useeffect
	// Add currentLocation logic

  return (
    <div className={sliderStyles.carousel}>
			{springs.map(({ styles } , i: number) => (
				<animated.div key={i} className={sliderStyles.inner} style={{
					transform: styles.to(
						() => `translate3d(${(activeIndex - i) * -100}%, 0, 0)`
					),
					position: "absolute",
					width: "100%",
				}}>
					{childSlides[i]}
				</animated.div>
        )
      )}
    </div>
  )
}

export default React.forwardRef(Carousel)
