import React from 'react'
import type { NextPage } from 'next'
import layoutStyles from '../styles/Layout.module.scss'

interface Props {
	children?: React.ReactNode | React.ReactNode[];
}

const Layout: NextPage<Props> = ({children}) => {
	return (
		<div className={layoutStyles.container}>
			<main className={layoutStyles.main}>
				{children}
			</main>
		</div>
	)
}

export default Layout