import React from 'react'
import { Link } from 'react-router-dom'
const ExploreCard = (props) => {
  return (
    <div class="card-service">

  <section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">

				<img src={props.serviceLink} alt="door-to-door"/>
			</div>
			
		</div>
	</div>
	<div class="product__info">
		<div class="title">
			<h1>{props.serviceHeading}</h1>
			
		</div>
        <div class="start">
            <p>Starting from</p>
        </div>
		<div class="price">
		₹ <span>{props.servicePrice}</span>
		</div>
		<div class="variant">
			<h3>{props.serviceDescription}</h3>
			
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>{props.benefit1}</li>
            <li>{props.benefit2}</li>
            <li>{props.benefit3}</li>
			</ul>
		</div>
		<Link to={props.formPath}><button class="buy--btn">BOOK NOW</button></Link>
	</div>
</section></div>

  )
}

export default ExploreCard