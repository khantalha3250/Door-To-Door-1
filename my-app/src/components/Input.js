import React from 'react'

const Input = (props) => {
  return (
    <>
        <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                <p class="text-blk input-title">
                  {props.inputHeading}
                </p>
                <input class="input" id="ijowk" name={props.name} placeholder={props.placeholder} type={props.type} pattern={props.pattern} required/>
              </div>
    </>
 )
}

export default Input