/* eslint-disable react/display-name */
import { useState, forwardRef, useImperativeHandle } from 'react'
import type { NextPage } from 'next'
import Link from "next/link";
import {useRouter} from "next/router";


const Arrows: NextPage = () => {
  return (
		// content inside slider
		<div>
			<Link href="/cities/tecta">
				<a>Prev</a>
			</Link>
		</div>
  )
}

export default Arrows
