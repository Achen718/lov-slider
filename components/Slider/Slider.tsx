/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle } from 'react'
import type { NextPage } from 'next'
import { useSprings, animated } from '@react-spring/web'
import Link from "next/link";
import Router from "next/router";
import Arrows from './Arrows/PrevArrow'
import SliderContent from './SliderContent';

const Slider: NextPage = forwardRef((props:any, ref) => {
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => ({
		increment,
	}))
	const increment = () => setCount(count + 1);
	
  return (
		// content inside slider
		
		<div>
			<Arrows/>
				<p>Slide Number: {count}</p>
				<SliderContent cityName="Ayena" 
					currentLocation="current location (Ayena)" 
					description="Lorem ipsum dolor sit amet, consectetur 
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
		</div>


  )
})

export default Slider
