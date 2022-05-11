/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle } from 'react'
import type { NextPage } from 'next'
import { useSprings, animated } from '@react-spring/web'
import Link from "next/link";
import Router from "next/router";

const Slider: NextPage = forwardRef((props, ref) => {
	const [count, setCount] = useState(0);
	useImperativeHandle(ref, () => ({
		increment,
	}))
	const increment = () => setCount(count + 1);
	
  return (
		// content inside slider
		<div>
			<p>Slide Number: {count}</p>
		</div>


  )
})

export default Slider
