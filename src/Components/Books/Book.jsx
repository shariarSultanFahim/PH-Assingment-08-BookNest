import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({book}) => {
    const {bookId,bookName,author,image,rating,category,tags} = book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="p-4 space-y-4 rounded-xl shadow-2xl">
            <div>   
                <img className="h-72 mx-auto" src={image} alt="Book Image" />
            </div>

            <div className="flex items-center justify-between text-[#23BE0A] font-play">
                
                {
                    tags.map((tag,idx)=><p key={idx}>{tag}</p>)
                }
            </div>

            <h1 className="text-2xl font-play">{bookName}</h1>
            <p className="text-neutral-900 text-opacity-80 text-base font-medium">By: {author}</p>
            <div className="flex items-center justify-between">
                <p className="font-play">{category}</p>
                <p className="inline-flex items-center gap-1">{rating} <AiOutlineStar /></p>
            </div>
        </div></Link>
    );
};
Book.propTypes = {
    book: PropTypes.object,
}
export default Book;
