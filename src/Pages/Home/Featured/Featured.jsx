import featuredImg from '../../../assets/./home/featured.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './FeaturedItem.css'

const Featured = () => {
    return (
        <div className='featuredItem text-white bg-fixed '>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---check-it-out---"}>

            </SectionTitle>
            <div className='flex justify-center items-center gap-10 py-12 pb-20 px-36 bg-slate-500 opacity-60'>
            <div>
                <img src={featuredImg} alt="" />
            </div>

            <div>
                 <p className='text-left'>20 June, 2023</p>
                 <h2 className='uppercase text-left'>Where can I get some?</h2>
                 <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit magni omnis asperiores ab labore error mollitia excepturi vitae! Blanditiis harum obcaecati placeat necessitatibus nostrum? Illum optio culpa recusandae in iste ullam debitis voluptates, corrupti maxime? Animi voluptatibus debitis quo deserunt reprehenderit dolore eum ullam cumque, aspernatur commodi id illo recusandae?</p>
                 <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;