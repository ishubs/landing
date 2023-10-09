import React from 'react';
import './LandingPage.css'; // Import your CSS file for styling
import Banner from '../Sections/Banner';
import Navbar from '../Components/Navbar/navbar';
const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Banner />
        </>
    );
};

export default LandingPage;
