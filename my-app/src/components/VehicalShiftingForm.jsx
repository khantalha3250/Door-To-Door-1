import React from "react";
import {room} from "../JSON/roomShifting";
import Input from "./Input";

const VehicalShiftingForm = (props) => {
  return (
    <>
      <div class="contact_us_2">
        <div class="responsive-container-block big-container">
        <p>Vehical Details:</p>
          <div class="blueBG"></div>
          <div class="responsive-container-block container">
            <form class="form-box">
              <div class="container-block form-wrapper">
                <p class="text-blk contactus-head">DOOR TO DOOR</p>
                <p class="text-blk contactus-subhead">
                  🚗Vehicle Shifting - The Auto Relocation Conjurers🌟
                </p>
                
                <div class="responsive-container-block">
                
                  <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                    <p class="text-blk input-title">Vehical Type</p>
                    <select class="input" id="ijowk" name="vehicalSize">
                      <option value="Motorcycle">Motorcycle</option>
                      <option value="Scooter">Scooter</option>
                      <option value="Electric-Scooter">Electric-Scooter</option>
                      <option value="Auto-Rickshaw">Auto-Rickshaw</option>
                      <option value="Bicycle">Bicycle</option>
                      <option value="Compactcar">Compact car</option>
                      <option value="Mini-van">Mini-van</option>
                    </select>
                  
                  </div>
                  <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p class="text-blk input-title">Transport Type</p>
                    <select class="input" id="ijowk" name="vehicalSize">
                      <option value="Carrier">Carrier (standard)</option>
                      <option value="EnclosedCarier">Enclosed carrier</option>
                      
                    </select>
                  </div>
                  <p>Picking address:</p>
            <div class="responsive-container-block">
              {room.map(detail=>(
                <Input
                  key={detail.id}
                  inputHeading={detail.inputHeading}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  type={detail.type}
                  pattern={detail.pattern}
                />
              ))}
              
            </div>
            <p>Drop address:</p>
            <div class="responsive-container-block">
            {room.map(detail=>(
                <Input
                  key={detail.id}
                  inputHeading={detail.inputHeading}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  type={detail.type}
                  pattern={detail.pattern}
                />
              ))}
              </div>
            
            <button class="submit-btn">
              {props.buttonName}
            </button>

          
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default VehicalShiftingForm;
