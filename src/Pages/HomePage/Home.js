import React from 'react';
import AdvertisedItems from './ComponentsOfHomePage/AdvertisedItems';
import Categories from './ComponentsOfHomePage/Categories';
import Slider from './ComponentsOfHomePage/Slider';
import SoldItems from './ComponentsOfHomePage/SoldItems';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <SoldItems></SoldItems>
        </div>
    );
};

export default Home;