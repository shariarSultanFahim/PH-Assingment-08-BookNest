import { useEffect, useState } from "react";
import ReadBooks from "./ReadBooks";
import { getStoredReadList, getStoredWishList } from "../Utility/localStorage";
import WishList from "./WishList";




const ListedBooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('Book.json')
        .then (res => res.json())
        .then (data => setBooks(data));
    },[]);

    const readBooks = [];
    const readList = getStoredReadList();
    for(const book of books){
        const bookId = book.bookId;
        if(readList.includes(bookId)){
            readBooks.push(book);
        }
    }
    const wishList = [];
    const wished = getStoredWishList();
    for(const book of books){
        const bookId = book.bookId;
        if(wished.includes(bookId)){
            wishList.push(book);
        }
    }

    
    const [sortKey, updateSortKey] = useState('');

    const setSortKey = (newValue) =>{
        updateSortKey(newValue);
    }


    const [showReadBooks, setShowReadBooks] = useState(true);
    const [showWishlistBooks, setShowWishlistBooks] = useState(false);

    const handleReadBooksClick = () => {
        setShowReadBooks(true);
        setShowWishlistBooks(false);
    };

    const handleWishlistBooksClick = () => {
        setShowReadBooks(false);
        setShowWishlistBooks(true);
    };


    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-4xl text-center my-10">Books</h1>
            <div>
                <div className="dropdown flex justify-center">
                    <div tabIndex={0} role="button" className="btn m-1 px-12 bg-green-500">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 items-center">
                        <li><button onClick={()=>setSortKey('rating')}>Rating</button></li>
                        <li><button onClick={()=>setSortKey('pages')}>Number of pages</button></li>
                        <li><button onClick={()=>setSortKey('year')}>Publishing year</button></li>
                    </ul>
                    </div>
            </div>
            <div>
                <div className="flex">
                     <button className={`toggle-button w-48 ${showReadBooks ? 'active p-4 border border-slate-500 border-b-white  ' : 'p-4 border border-white border-b-slate-500 '}`} onClick={handleReadBooksClick}>Read Books</button>
                    <button className={`toggle-button w-48 ${showWishlistBooks ? 'active p-4 border border-slate-500 border-b-white' : 'p-4 border border-white border-b-slate-500 '}`}
                    onClick={handleWishlistBooksClick}>Wishlist Books</button>
                    <button className="border border-white border-b-slate-500 w-full"></button>
                </div>
                <div>
                {showReadBooks && (
                <div className="read-books-content">
                    <ReadBooks sortKey={sortKey} books={readBooks}></ReadBooks>
                </div>
                )}
                {showWishlistBooks && (
                <div className="wishlist-books-content">
                    <WishList sortKey={sortKey} books={wishList}></WishList>
                </div>
                )}
                </div>
            </div>
            
            
            
        </div>
    );
};

export default ListedBooks;