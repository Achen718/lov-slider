import type { NextPage } from 'next'
import Link from 'next/link'
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
					{/* add icon */}
					<span>icon</span>
					<p className={contentStyles.cityTitle}>{cityName}</p>
				</div>
				<div className={`${contentStyles.col} ${contentStyles.currentLocation}`}>
					<button className={contentStyles.currentLocation}>{currentLocation ? "You are here" : "Go to "}</button>
				</div>
			</div>
			{/* hr */}
			<hr/>
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
					{/* pass player current level */}
					<p>Reach level 9 to unlock</p>
				</div>
				{/* creatures */}
				<div className={contentStyles.col}>
					<p className="title">Creatures</p>
					<div className={contentStyles.creatures}>
						{/* Creatue thumbnails */}
						<span className={contentStyles.icons}></span>
						<span className={contentStyles.icons}></span>
						<span className={contentStyles.icons}></span>
						{/* show more -- # of creatures by location */}
						<span className={contentStyles.icons}>+6</span>
					</div>
				</div>
			</div>
			{/* hr */}
			<hr/>
			{/* see more btn */}
			<div className={contentStyles.row}>
				<button className={contentStyles.seeMore}>See More</button>
			</div>
			{/* home btn */}
			<div className={contentStyles.row}>
				<Link href="/">
					<button>Back to Home (icon)</button>
				</Link>
			</div>
    </div>
  )
}

export default SliderContent
