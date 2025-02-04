import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from './../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const OrderFood = () => {
    const categories =['salad', 'pizza','soup', 'dessert','drinks'];
    const {category} = useParams();
    const initialIndex= categories.indexOf(category) ;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
   
    const desserts= menu.filter(item=> item.category==='dessert');
    const soup= menu.filter(item=> item.category==='soup');
    const salad= menu.filter(item=> item.category==='salad');
    const pizza= menu.filter(item=> item.category==='pizza');
    const offered= menu.filter(item=> item.category==='offered');
    const drinks= menu.filter(item=> item.category==='drinks');
    console.log(category);

    return (
        <div>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Order Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Cover img={orderImg} title={"Order Food"} des="Would you like to try a dish?"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <div className='grid grid-cols-1 md::grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {salad.map(singleSalad=><FoodCard item={singleSalad}></FoodCard>)}
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md::grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {pizza.map(singleSalad=><FoodCard item={singleSalad}></FoodCard>)}
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md::grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {soup.map(singleSalad=><FoodCard item={singleSalad}></FoodCard>)}
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md::grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {desserts.map(singleSalad=><FoodCard item={singleSalad}></FoodCard>)}
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md::grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                   {drinks.map(singleSalad=><FoodCard item={singleSalad}></FoodCard>)}
                   </div>
                </TabPanel>
               
               
            </Tabs>
        </div>
    );
};

export default OrderFood;