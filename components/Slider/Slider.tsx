import sliderStyles from '../styles/Slider.module.css'

const Slider = () => {
  return (
    <div  className={sliderStyles.slider}>
      {/* header title / current location */}
			<div>Icon/ Title /Loc btn</div>
			{/* desc / level / creatures*/}
			<div>desc section</div>
			{/* see more btn */}
			<div>see more btn</div>
			{/* home btn */}
			<div>home btn</div>
    </div>
  )
}

export default Slider
