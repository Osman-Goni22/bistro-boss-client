
import React from 'react';
import MenuItem from './../../Home/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({items, title, img}) => {
   console.log(items);
    return (
        <div>
            <div>
                {title && <Cover img={img} title={title} des={"lorem5"}></Cover>}
            </div>
             <div className="grid md:grid-cols-2 gap-5 mb-5">
                {
                    items.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>

            <Link className='btn btn-primary' to={`/order/${title}`}>Order Now</Link>
        </div>
    );
};

export default MenuCategory;