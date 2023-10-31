import React, { useState } from "react";
import { room, newroom } from "../JSON/roomShifting";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RoomShiftingForm = (props) => {
  const [formDetails, setFormDetails] = useState({
    street:null,
    city: null,
    state: null,
    pincode: null,
    newstreet:null,
    newcity: null,
    newstate: null,
    newpincode: null,
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const {name,value} = event.target
    setFormDetails(prevValue=>{
      return{
      ...formDetails,
      [name]: value,}
    }); 
  };
  const handleform = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        username: props.user.username,
        city: formDetails.city,
        state: formDetails.state,
        pincode: formDetails.pincode,
        newcity: formDetails.newcity,
        newstate: formDetails.newstate,
        newpincode: formDetails.newpincode,
      };

      // Make an HTTP POST request to your server
      const response = await axios.post(
        "http://localhost:3001/roomForm",
        formData
      );

      if (response.status === 200) {
        console.log(props.user)
        navigate("/summary");
      }
    } catch (error) {
      // Handle registration error here
      console.error("An error occured please try again!", error);
    }
  };
  return (
    <>
      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG"></div>
          <div className="responsive-container-block container">
            <form className="form-box" action='/roomForm' method="post">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">{props.formTitle}</p>
                <p className="text-blk contactus-subhead">{props.service}</p>
                <p>Current room address:</p>
                <div className="responsive-container-block">
                  {room.map((detail) => (
                    <Input
                      key={detail.id}
                      inputHeading={detail.inputHeading}
                      placeholder={detail.placeholder}
                      name={detail.name}
                      type={detail.type}
                      pattern={detail.pattern}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>
                <p>New room address:</p>
                <div className="responsive-container-block">
                  {newroom.map((detail) => (
                    <Input
                      key={detail.id}
                      inputHeading={detail.inputHeading}
                      placeholder={detail.placeholder}
                      name={detail.name}
                      type={detail.type}
                      pattern={detail.pattern}
                      onChange={handleChange}
                      required
                    />
                  ))}
                </div>

                <button className="submit-btn" onClick={handleform}>
                  {props.buttonName}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomShiftingForm;
