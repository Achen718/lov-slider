import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Slider from '../components/Slider/Slider'

const Home: NextPage = () => {
  return (
		// Add routes/pages to Slider
    <div>
			{/* pass page title into cityname */}
			<Slider cityName="tecta" 
			 currentLocation="current location" 
			 description="Lorem ipsum dolor sit amet, consectetur 
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </div>
  )
}

export default Home
