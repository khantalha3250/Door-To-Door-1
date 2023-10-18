import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Service from "./Service";
import ContactForm from "./ContactForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExploreCard from "./ExploreCard";
import RoomShiftingForm from "./RoomShiftingForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Service />} />
          <Route
            path="/contact"
            element={
              <ContactForm
                formTitle="Get In Touch With Us"
                service="Door To Door service"
                buttonName="Submit"
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
                serviceLink="Vehicle-Shifting-in-Mumbai-.jpg"
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
                formTitle="DOOR TO DOOR"
                service="🏠Room Shifting - The Home Transmutation Wizards✨"
                buttonName="Submit"
              />
            }
          />
          <Route
            path="vehical-shifting-form"
            element={
              <RoomShiftingForm
                formTitle="DOOR TO DOOR"
                service="🚗Vehicle Shifting - The Auto Relocation Conjurers🌟"
                buttonName="Submit"
              />
            }
          />
          <Route
            path="package-shifting-form"
            element={
              <RoomShiftingForm
                formTitle="DOOR TO DOOR"
                service="📦Package Delivery - The Parcel Portation Enchanters🪄"
                buttonName="Submit"
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
