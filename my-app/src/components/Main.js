import React from "react";
import { Link } from "react-router-dom";

function Main(){
    return   (
    <section className="content">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>Welcome to DOOR TO DOOR</h1>
                <p>
                    DOOR TO DOOR is your gateway to efficient and dependable transportation services. Our platform offers a seamless experience for sending and receiving shipments, whether it's packages, documents, or cargo.
                </p>
                <Link to="/services" className="btn btn-primary"><i className="fas fa-rocket"></i> Explore Services</Link>
            </div>
            <div className="col-md-6">
                
                <img src="APS_28.jpg" alt="Transportation" className="img-fluid"/>
            </div>
        </div>
    </div>
</section>)
}
export default Main