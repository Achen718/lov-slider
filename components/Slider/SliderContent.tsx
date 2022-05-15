import type { NextPage } from 'next'
import Image from 'next/image'
import contentStyles from '../../styles/SliderContent.module.scss'

interface Props {
  cityName?: string;
	currentLocation?: string;
	description?: string;
	creatures?: HTMLImageElement;
}

const SliderContent: NextPage<Props> = ({ cityName, currentLocation, description, creatures }) => {
  return (
		// content inside slider
    <div className={contentStyles.container}>
      {/* header title / current locatio<div className="desc-section">*/}
			<div className={`${contentStyles.row} ${contentStyles.header}`}>
				<div className={contentStyles.col}>
					<p className={contentStyles.cityName}>{cityName}</p>
				</div>
				<div className={contentStyles.col}>
					<button className={contentStyles.currentLocation}>{currentLocation}Current loc</button>
				</div>
			</div>

			{/* desc / level / creatures, Add HR or border bottom to separate rows*/}
			<div className={contentStyles.row}>
				{/* About */}
				<div className={contentStyles.col}>
					<p className="description-title">About</p>
					<p className="description">{description}</p>
				</div>
				{/* Unlock level */}
				<div className={contentStyles.col}>
					<p className="level">To Unlock</p>
					<p>Level X reach level 9 to unlock</p>
				</div>
				{/* creatures */}
				<div className={contentStyles.col}>
					<p className="creatures">Creatures</p>
					<div>creature icons here</div>
				</div>
			</div>

			{/* see more btn */}
			<div className={contentStyles.row}>
				<p>see more btn</p>
			</div>
			{/* home btn */}
			<div className={contentStyles.row}>
				<button>home btn</button>
			</div>
    </div>
  )
}

export default SliderContent
