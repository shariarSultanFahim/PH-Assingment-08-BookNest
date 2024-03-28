import {useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadList, getStoredWishList, removeWish, saveReadList, saveWishList } from "../Utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const {id}= useParams();
    const book = books.find((book) => book.bookId == id);
    const {bookName,author,image,rating,category,tags,review,totalPages,publisher,yearOfPublishing} = book;

    const notifyRead =()=>{
        const readList = getStoredReadList();
        const existRead = readList.find(bookId => bookId == id);
        if(existRead){
            toast.error('Already read', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            removeWish(id);
            saveReadList(id);
            
            toast.success('Added to read list', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        
    }
    const notifyWish =()=>{
        const wishList = getStoredWishList();
        const readList = getStoredReadList();
        const existRead = readList.find(bookId => bookId == id);
        const existWish = wishList.find(bookId => bookId == id);

        if(existRead){
            toast.error('Already read', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else if(existWish){
            toast.error('Already in Wish List', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            saveWishList(id);
            toast.success('Added to wish list', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
    }

    return (
        <div className="container mx-auto mt-10 p-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
                <img className="md:w-2/4" src={image} alt="Book image" />
            </div>
            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold font-play">{bookName}</h1>
                    <p className="font-bold opacity-70">By: {author}</p>
                </div>
                <p>{category}</p>
                <p><span className="font-bold">Review:</span> {review}</p>
                <div className="flex gap-2 items-center ">
                    <p className="font-bold text-black">Tag</p>
                    {
                        tags.map((tag,idx)=><p className="text-[#23BE0A]" key={idx}>#{tag}</p>)
                    }
                </div>
                <div className="flex gap-10">
                    <div>
                        <p className="NumberOfPages text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Number of Pages:</p>
                        <p className="NumberOfPages text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Publisher:</p>
                        <p className="NumberOfPages text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Year of Publishing:</p>
                        <p className="NumberOfPages text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">Rating:</p>
                    </div>
                    <div>
                        <p className=" text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed"> {totalPages} </p>
                        <p className=" text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed"> {publisher} </p>
                        <p className=" text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed"> {yearOfPublishing} </p>
                        <p className=" text-neutral-900 text-base font-semibold font-['Work Sans'] leading-relaxed"> {rating} </p>
                    </div>
                </div>
                <div className="space-x-2">
                    <button onClick={notifyRead} className="bg-white border border-black py-2 px-6 rounded-lg font-bold">Read</button>
                    <button onClick={notifyWish} className="bg-teal-400 text-white border border-teal-400 py-2 px-4 rounded-lg font-bold">Wishlist</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;