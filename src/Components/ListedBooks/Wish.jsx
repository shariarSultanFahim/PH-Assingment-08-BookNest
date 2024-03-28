import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { BsBook } from "react-icons/bs";



const Wish = ({book}) => {
    const {bookId,bookName,author,image,rating,category,tags,review,totalPages,publisher,yearOfPublishing} = book;
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center p-4 my-6 border border-slate-500 rounded-xl shadow-xl w-[95%] mx-auto md:w-full">
                    
                    <div><img src={image} className="h-60 m-12 rounded-lg shadow-2xl" />
                    </div>  

                    <div className="flex flex-col gap-6">
                        <h1 className="font-play text-3xl md:text-5xl font-bold font-play">{bookName}</h1>
                        <p className="font-bold opacity-70">By: {author}</p>
                        <div className="flex flex-wrap gap-2 items-center ">
                            <p className="font-bold text-black">Tag</p>
                                {
                                    tags.map((tag,idx)=><p className="text-[#23BE0A]" key={idx}>#{tag}</p>)
                                }
                            <CiLocationOn/><p className="text-neutral-900 text-opacity-60 text-base font-normal">Year of Publishing: {yearOfPublishing}</p>

                        </div>
                        <div className="flex gap-4 items-center">
                            <FaUserFriends/><p className="text-neutral-900 text-opacity-60 text-base font-normal">Publisher: {publisher}</p>
                            <BsBook/><p className="text-neutral-900 text-opacity-60 text-base font-normal">Page: {totalPages}</p>
                        </div>  
                        <div className="flex flex-wrap gap-2">
                            <button className="text-[#328EFF] bg-[#328EFF] bg-opacity-30 p-4 rounded-3xl">Catagoty: {category}</button>
                            <button className="text-[#FFAC33] bg-[#FFAC33] bg-opacity-30 p-4 rounded-3xl">Rating: {rating}</button>
                            <Link to={`/book/${bookId}`}>
                            <button className="text-white bg-[#23BE0A] p-4 rounded-3xl">View Details</button>
                            </Link>
                        </div>           
                    </div>
            </div>
        </div>
    );
};

export default Wish;