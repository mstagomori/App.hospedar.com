import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import HomeNavBar from '../Component/HomeNavBar'
import HomeCard from '../Component/HomeCard'

export default function Home () {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    
    return (
        <div className="main">
            <HomeNavBar/>
            <div className="filter-container">

            </div>

            <div className="offer-container">
                <div className="offer-description-container">
                    <h6>Aproveite</h6>
                    <h2>Rio de Janeiro, a cidade maravilhosa</h2>
                </div>
                
                
                <div className="carousel-container">
                    <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <HomeCard key={item}>{item}</HomeCard>
                    ))}
                    </Carousel>
                </div>
            </div>
            
        </div>
    )
}