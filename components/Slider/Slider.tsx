import { useRef } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import sliderStyles from '../../styles/Slider.module.scss'
import { useSprings, animated } from '@react-spring/web'

interface Props {
  cityName: string;
	currentCity: string;
	description: string;
	creatures?: HTMLImageElement;
}

const Slider: NextPage<Props> = ({ cityName, currentCity, description, creatures }) => {
  return (
    <div className={sliderStyles.container}>
      {/* header title / current locatio<div className="desc-section">*/}
			<div className={`${sliderStyles.row} ${sliderStyles.header}`}>
				<div className={sliderStyles.col}>
					<p className={sliderStyles.cityName}>{cityName}</p>
				</div>
				<div className={sliderStyles.col}>
					<button className={sliderStyles.currentCity}>{currentCity}</button>
				</div>
			</div>

			{/* desc / level / creatures, Add HR or border bottom to separate rows*/}
			<div className={sliderStyles.row}>
				{/* About */}
				<div className={sliderStyles.col}>
					<p className="description-title">About</p>
					<p className="description">{description}</p>
				</div>
				{/* Unlock level */}
				<div className={sliderStyles.col}>
					<p className="level">To Unlock</p>
					<p>Level X reach level 9 to unlock</p>
				</div>
				{/* creatures */}
				<div className={sliderStyles.col}>
					<p className="creatures">Creatures</p>
					<div>creature icons here</div>
				</div>
			</div>

			{/* see more btn */}
			<div className={sliderStyles.row}>
				<p>see more btn</p>
			</div>
			{/* home btn */}
			<div className={sliderStyles.row}>
				<button>home btn</button>
			</div>
    </div>
  )
}

export default Slider
