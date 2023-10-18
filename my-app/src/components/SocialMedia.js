import React from 'react'
import {Link} from "react-router-dom"

const SocialMedia = (props) => {
  return (
    <div>
        <Link to={props.link}>
              <img class="link-img" src={props.icon}/>
            </Link>
    </div>
  )
}

export default SocialMedia