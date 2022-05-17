import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import layoutStyles from '../styles/Layout.module.scss'
// import Background from '../public/test.png'

interface Props {
	children?: React.ReactNode | React.ReactNode[];
	i: number;
}

const bg = [
	'/test.png',
	'/123.jpg'
]

const Layout: NextPage<Props> = ({children, i}) => {
	console.log(i)
	return (
		<div className={layoutStyles.overlay}>
			<div className={layoutStyles.bgWrap}>
		
			</div>
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>
					{children}
				</main>
			</div>
		</div>
	)
}

export default Layout