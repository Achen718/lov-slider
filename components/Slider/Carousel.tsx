import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useSprings, animated, config, easings } from '@react-spring/web'
import sliderStyles from '../../styles/Slider.module.scss'
import profilePic from '../../public/vercel.svg'

interface Props {
	children: JSX.Element[];
}

interface IProps {
	children: JSX.Element;
	width: string;
}

export const CarouselItem: NextPage<IProps> = ({ children, width }) => {
	return (
		<div className={sliderStyles.carouselItem} style={{width: width}}>
			{children}
		</div>
	)
}

const Carousel: NextPage<Props> = ({ children }, ref) => {
	const [ index, setActiveSlide ] = useState<number>(0);

	const springs = useSprings(
		React.Children.count(children),
		children.map(child => ({ 
			from: {
				transform: 'translateX(0)',
			},
			to: {
				transform: `translateX(-${index * 100}%)`
			},
			config: {
				duration: 1000,
				easing: easings.easeInOutQuart,
			}
		}))
	)

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

	const prevSlide = () => updateSlide(index - 1)
	const nextSlide = () => updateSlide(index + 1)

	// const [props, set] = useSprings(pages.length)

  return (
		// Add routes/pages to Slider
	// 	<animated.div
	// 	style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ }}
	// />

    <div className={sliderStyles.carousel}>
			{springs.map((styles, i) => (
				<animated.div className={sliderStyles.inner} style={styles} key={i}>
					
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, {width: '100%'})
					})}
					
				</animated.div>
        )
      )}
    </div>
  )
}

export default React.forwardRef(Carousel)
