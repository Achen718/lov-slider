import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import contentStyles from '../../styles/SliderContent.module.scss'

interface Props {
  cityName?: string;
	currentLocationName?: string;
	currentLocation?: boolean;
	description?: string;
	creatures?: HTMLImageElement;
}

const SliderContent: NextPage<Props> = ({ cityName, currentLocationName, currentLocation, description, creatures }) => {
	
  return (
		// content inside slider
    <div className={contentStyles.container}>
      {/* header title / current locatio<div className="desc-section">*/}
			<div className={`${contentStyles.row} ${contentStyles.cityRow}`}>
				<div className={`${contentStyles.col} ${contentStyles.cityHeading}`}>
					<span className={contentStyles.cityIcon}>icon</span>
					<span className={contentStyles.city}>{cityName}</span>
				</div>
				<div className={`${contentStyles.col} ${contentStyles.currentLocation}`}>
					{/* pass prop */}
					<a className={contentStyles.moveTo}>{currentLocation ? "You are here (icon)" : "Move to Location"}</a>
				</div>
			</div>

			<hr/>
			{/* Info section*/}
			<div className={`${contentStyles.row} ${contentStyles.descRow}`}>
				<div className={contentStyles.col}>
					<p className={contentStyles.title}>About</p>
					<p>{description}</p>
				</div>
				{/* level */}
				<div className={contentStyles.col}>
					<p className={contentStyles.title}>To Unlock</p>
					{/* Req. level/Current level */}
					<span className={contentStyles.wrapper}>
						<span className={contentStyles.levelIcon}>9</span>
					</span>
					<p className={contentStyles.level}>Reach level 9 to unlock</p>
				</div>
				<div className={contentStyles.col}>
					<p className={contentStyles.title}>Creatures</p>
					<div className={contentStyles.creatures}>
						{/* thumbnails -- todo: map/clone icons for less redundancy */}
						<span className={contentStyles.icons}></span>
						<span className={contentStyles.icons}></span>
						<span className={contentStyles.icons}></span>
						{/* show more -- {#} of creatures by location */}
						<span className={contentStyles.icons}>+6</span>
					</div>
				</div>
			</div>

			<hr/>
			{/* componentize */}
			<div className={contentStyles.buttonRow}>
				{/* add show more content function */}
				<button className={contentStyles.seeMore}>See More</button>
			</div>
			{/* home btn */}
			<div className={contentStyles.buttonRow}>
				<Link href="/">
						<a className={contentStyles.homeBtn}>Back to Home (icon)</a>
				</Link>
			</div>
    </div>
  )
}

export default SliderContent
