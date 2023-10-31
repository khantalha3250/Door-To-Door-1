import React from 'react'
import ServiceCard from './ServiceCard'
import content from '../JSON/serviceContent'


function card(cardItem) {
  return (<div className="col-md-4 col-sm-6">
  <div className="card">
    <div className="card-body">
      <ServiceCard
        srcLink={cardItem.srcLink}
        title={cardItem.title}
        content={cardItem.subpara}
        service={cardItem.service}
        user={cardItem.user}
      />
    </div>
  </div>
  </div>)
}
const Service = ({user}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
        {content.map((cardItem) => card({ ...cardItem, user }))}
        </div>
      </div>
    </div>
  )
}

export default Service