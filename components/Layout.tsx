import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import layoutStyles from '../styles/Layout.module.scss'
// import Background from '../public/test.png'

interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const Layout: NextPage<Props> = ({children}) => {
	return (
		<div className={layoutStyles.overlay}>
			<div className={layoutStyles.bgWrap}>
				<Image
					alt="Mountains"
					src="/test.png"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
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