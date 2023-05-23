import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './FeaturedItem.css'

const FeaturedItem = () => {
    return (
        <div  className="mt-20 featured-item bg-fixed  py-24 px-10 text-white ">
            <SectionTitle  subHeading={'---Check it out---'} heading={'Featured Item'}> </SectionTitle>
            <div className="lg:flex space-y-4 justify-center items-center  gap-8 lg:px-20">
                <div>
                    <img className="w-[648px]" src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p>March 20, 2023</p>
                    <h5 className="uppercase font-semibold">WHERE CAN I GET SOME?</h5>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, <br /> atque quam! Temporibus repudiandae commodi corporis earum voluptates, et cum hic.</p>
                    <button className="uppercase py-2" style={{borderBottom:'3px solid #ffffff', borderRadius:'8px' }}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;