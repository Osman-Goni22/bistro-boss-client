import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {
    // const [menu, setMenu]= useState([]);
    // useEffect(()=>{
    //     fetch('Menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{

    //         const popularItems = data.filter(item=>item.category==='popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    const [menu] =useMenu();
    const popularItems = menu.filter(item=>item.category==='popular')
    return (
        <section>
            <SectionTitle  heading={"FROM OUR MENU"}  subHeading={"---Check it out---"}>

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
                {
                    popularItems.map(item=><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>

            <button className="btn btn-active">View Full  Menu</button>
        </section>
    );
};

export default PopularMenu;