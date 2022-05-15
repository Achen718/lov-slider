import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useSprings, animated, config, easings } from '@react-spring/web'
import sliderStyles from '../../styles/Slider.module.scss'
import profilePic from '../../public/vercel.svg'

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

const Carousel: NextPage<Props> = ({ children = [] }, ref) => {
	const [ activeIndex, setActiveSlide ] = useState(0);

	const springs = useSprings(
		children.length,
		children.map((index) => ({
			styles: index,
		}))
	)

	const childSlides = children.map((child, index) => (
		<div className={sliderStyles.carouselItem} key={index}>
			{child}
		</div>))

	useImperativeHandle(ref, () => ({
		prevSlide,
		nextSlide
	}))
	
	const updateSlide = (newSlide: number) => {
		if(newSlide < 0) {
			newSlide = 0;
		} else if (newSlide >= React.Children.count(children)) {
			newSlide = React.Children.count(children) - 1;
		}

		setActiveSlide(newSlide);
	}
	
	// add useeffect
	const prevSlide = () => updateSlide(activeIndex - 1)
	const nextSlide = () => updateSlide(activeIndex + 1)
	
  return (

    <div className={sliderStyles.carousel}>
			{springs.map(({ styles } , i: number) => (
				<animated.div key={i} className={sliderStyles.inner} style={{
					transform: styles.to(
						() => `translate3d(${i * 100}%, 0, 0)`
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
