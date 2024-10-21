import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import BrowserLaptops from '../../components/BrowserLaptops/BrowserLaptops';
import LaptopDisplay from '../../components/LaptopDisplay/LaptopDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import FeaturedLaptopsCarousel from '../../components/FeaturedLaptopsCarousel/FeaturedLaptopsCarousel'; // Import your carousel
import PromotionalBanner from '../../components/PromotionalBanner/PromotionalBanner'; // Import your promotional banner

function Home() {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <PromotionalBanner /> {/* Add the Promotional Banner here */}
            <BrowserLaptops category={category} setCategory={setCategory} />
            <LaptopDisplay category={category} />
            <FeaturedLaptopsCarousel />
            <AppDownload />
        </div>
    );
}

export default Home;
