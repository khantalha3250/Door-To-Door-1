import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = (props) => {
    return (
        <>
            <img src={props.srcLink} alt="Home Icon" className="service-card-image" />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.content}<Link to={props.service}>Explore →</Link></p>
        </>
    )
} 

export default ServiceCard