import React from 'react'
import ServiceCard from './ServiceCard'
import content from '../serviceContent'


function card(cardItem) {
  return (<div className="col-md-4 col-sm-6">
  <div className="card">
    <div className="card-body">
      <ServiceCard
        srcLink={cardItem.srcLink}
        title={cardItem.title}
        content={cardItem.subpara}
      />
    </div>
  </div>
  </div>)
}
const Service = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            {content.map(card)}
        </div>
      </div>
    </div>
  )
}

export default Service