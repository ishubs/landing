import React from 'react';
import './Banner.css';
import BackgroundImage from '../assets/img/Banner.png';
const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="banner-text">
                <h1 className="banner-primary">
                    Introduce Your Product Quickly & Effectively
                </h1>
                <p className="banner-secondary">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className="banner-cta">
                    <button className="cta-button-banner">Purchase UI Kit</button>
                    <button href="#" className="learn-more-link">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
