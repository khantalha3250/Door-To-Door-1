import React from 'react'

const Input = (props) => {
  return (
    <>
        <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                <p className="text-blk input-title">
                  {props.inputHeading}
                </p>
                <input className="input" id="ijowk" name={props.name} placeholder={props.placeholder} type={props.type} pattern={props.pattern} onChange={props.onChange}  />
              </div>
    </>
 )
}

export default Input