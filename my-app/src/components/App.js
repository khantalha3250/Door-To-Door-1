import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Service from "./Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<div>
                            <Header />
                            <Main />
                            <Footer />
                        </div>}
                    />
                    <Route
                        path="/services"
                        element={<div>
                            <Header />
                            <Service/>
                            <Footer />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>

        </>
    )
}
export default App