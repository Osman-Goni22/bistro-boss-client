import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Reviews from './Review/Reviews';
import BistroBoss from './Biatro/BistroBoss';
import Cover from '../Shared/Cover/Cover';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <BistroBoss></BistroBoss>
           <Featured></Featured>
           <Reviews></Reviews>
           
        </div>
    );
};

export default Home;