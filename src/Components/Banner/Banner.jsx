import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container mx-auto px-20 flex flex-col-reverse md:flex-row items-center">
            <div className="space-y-6">
                <h1 className="text-neutral-900 text-6xl font-bold font-play">Books to freshen up your bookshelf</h1>
                <button className="bg-[#23BE0A] p-4 rounded-lg text-white font-bold font-['Work Sans']"><Link to='/listedbooks'>View The List</Link></button>
            </div>
            <div className="">
                <img className="" src="https://template65093.motopreview.com/mt-demo/65000/65093/mt-content/uploads/2017/11/mt-1189-single-book-img2_2.png"/>
            </div>
        </div>
    );
};

export default Banner;