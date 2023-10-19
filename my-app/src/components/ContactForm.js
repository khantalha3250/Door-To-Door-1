import React from 'react'
import Input from './Input'
import SocialMedia from './SocialMedia'
import smDetails from './socialMediaContact'
import TextArea from './TextArea'
import contact from '../JSON/contact'

const ContactForm = (props) => {
  return (
    <>
         <div class="contact_us_2">
    <div class="responsive-container-block big-container">
      <div class="blueBG">
      </div>
      <div class="responsive-container-block container">
        <form class="form-box">
          <div class="container-block form-wrapper">
            <p class="text-blk contactus-head">
              {props.formTitle}
            </p>
            <p class="text-blk contactus-subhead">
              {props.service}
            </p>
            <div class="responsive-container-block">
              {contact.map(detail=>(
                <Input
                  key={detail.id}
                  inputHeading={detail.inputHeading}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  type={detail.type}
                  pattern={detail.pattern}
                />
              ))}
              <TextArea / >
            </div>
            <button class="submit-btn">
              {props.buttonName}
            </button>
          </div>
          <div class="social-media-links">
          {smDetails.map(detail => (
                  <SocialMedia
                    key={detail.id}
                    link={detail.link}
                    icon={detail.icon}
                  />
                ))}
           
          </div>
        </form>
      </div>
    </div>
  </div>
   
    </>
  )
}

export default ContactForm