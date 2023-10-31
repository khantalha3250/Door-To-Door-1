import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreCard from "./components/ExploreCard";
import RoomShiftingForm from "./components/RoomShiftingForm";
import VehicalShiftingForm from "./components/VehicalShiftingForm";
import Authentication from "./components/Authentication";
import Register from "./components/Register";
import Summary from "./components/Summary";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Service user={user} />} />
          <Route path="/login" element={<Authentication setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/contact"
            element={
              <ContactForm
                formTitle="Get In Touch With Us"
                service="Door To Door service"
                buttonName="Proceed"
              />
            }
          />
          <Route
            path="room-shifting"
            element={
              <ExploreCard
                
                serviceLink="house_del.jpg"
                serviceHeading="Home Transmutation Wizards"
                serviceDescription="Shift your room to a magical realm with our wizardry!"
                servicePrice="100"
                benefit1="Safe and reliable"
                benefit2="Customizable room transformations"
                benefit3="Experienced wizards at your service"
                formPath="/room-shifting-form"
              />
            }
          />
          <Route
            path="vehical-shifting"
            element={
              <ExploreCard
              
                serviceLink="Vehicle-Shifting-in-Mumbai-.jpg"
                serviceHeading=" The Auto Relocation Conjurers"
                serviceDescription="Entrust your sleeping chariots to our mystical hands"
                servicePrice="500"
                benefit1="Convenient vehicle transport."
                benefit2="Enhanced vehicle security."
                benefit3="Guaranteed privacy protection."
                formPath="/vehical-shifting-form"
              />
            }
          />
          <Route
            path="package-shifting"
            element={
              <ExploreCard
                
                serviceLink="APS_28.jpg"
                serviceHeading="The Parcel Portation Enchanters"
                serviceDescription="Watch as we wield the power of swift delivery"
                servicePrice="100"
                benefit1="Timely, reliable delivery service."
                benefit2="Professional handling and care."
                benefit3="Customized delivery options."
                formPath="/package-shifting-form"
              />
            }
          />
          <Route
            path="room-shifting-form"
            element={
              <RoomShiftingForm
              user={user}
                formTitle="DOOR TO DOOR"
                service="🏠Room Shifting - The Home Transmutation Wizards✨"
                buttonName="Proceed"
              />
            }
          />
          <Route
            path="vehical-shifting-form"
            element={
              <VehicalShiftingForm
                formTitle="DOOR TO DOOR"
                service="🚗Vehicle Shifting - The Auto Relocation Conjurers🌟"
                buttonName="Proceed"
              />
            }
          />
          <Route
            path="package-shifting-form"
            element={
              <RoomShiftingForm
                formTitle="DOOR TO DOOR"
                service="📦Package Delivery - The Parcel Portation Enchanters🪄"
                buttonName="Proceed"
              />
            }
          />
          <Route
            path="summary"
            element={
              <Summary/>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
