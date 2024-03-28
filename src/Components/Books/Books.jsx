import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('Book.json')
        .then (res => res.json())
        .then (data => setBooks(data));
    },[]);
    return (
        <div className="container mx-auto">
            <h1 className="mt-10 font-play text-4xl text-center">Books</h1>

            <div className="my-10 grid md:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;