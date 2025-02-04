import React from 'react';

import { Helmet } from "react-helmet";
import image1 from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import drinksImg from '../../assets/menu/banner3.jpg'

import Cover from '../Shared/Cover/Cover';
import PopularMenu from '../Home/PopularMenu/PopularMenu';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Menu = () => {

  const [menu] = useMenu();
  const desserts= menu.filter(item=> item.category==='dessert');
  const soup= menu.filter(item=> item.category==='soup');
  const salad= menu.filter(item=> item.category==='salad');
  const pizza= menu.filter(item=> item.category==='pizza');
  const offered= menu.filter(item=> item.category==='offered');
  const drinks= menu.filter(item=> item.category==='drinks');

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Cover img={image1} title={"DESSERTS"} des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>

      <SectionTitle heading={'Don\'t Miss'} subHeading={'Today\'s Offer'}></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>

      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      <MenuCategory items={drinks} title={"drinks"} img={drinksImg}></MenuCategory>

    </div>

  );
};

export default Menu;