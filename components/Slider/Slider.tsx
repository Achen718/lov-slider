
import { useSprings, animated } from '@react-spring/web'
import type { NextPage } from 'next'
import sliderStyles from '../../styles/Slider.module.scss'

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
			<div className={sliderStyles.row}>
				<div className={sliderStyles.col}>
					{cityName}
				</div>
				<div className={sliderStyles.col}>
					{currentCity}
				</div>
			</div>

			{/* desc / level / creatures*/}
			<div className={sliderStyles.row}>
				{/* About */}
				<div className={sliderStyles.col}>
					<p className="title">About</p>
					<p>{description}</p>
				</div>
				{/* Unlock level */}
				<div className={sliderStyles.col}>
					<p className="title">To Unlock</p>
					<p>Level 'X' reach level 9 to unlock</p>
				</div>
				{/* creatures */}
				<div className={sliderStyles.col}>
					<p className="title">Creatures</p>
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
