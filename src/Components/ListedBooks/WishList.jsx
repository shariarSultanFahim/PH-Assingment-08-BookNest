import Wish from "./Wish";

const WishList = ({books,sortKey}) => {
    const sortData = (sortKey) =>{
        if(sortKey == 'rating'){
            books.sort((bookA, bookB) => {
                const ratingA = bookA.rating;
                const ratingB = bookB.rating;
            
                if (ratingA < ratingB) return 1;
                if (ratingA > ratingB) return -1;
                return 0; 
              });
        }
        else if(sortKey == 'pages'){
            books.sort((bookA, bookB) => {
                const ratingA = bookA.totalPages;
                const ratingB = bookB.totalPages;
            
                if (ratingA < ratingB) return 1;
                if (ratingA > ratingB) return -1;
                return 0; 
              });
        }
        else if(sortKey == 'year'){
            books.sort((bookA, bookB) => {
                const ratingA = bookA.yearOfPublishing;
                const ratingB = bookB.yearOfPublishing;
            
                if (ratingA < ratingB) return 1;
                if (ratingA > ratingB) return -1;
                return 0; 
              });
        }
    }
    sortData(sortKey);
    return (
        <div>
            {
                books.map(book=>
                    <Wish key={book.bookId} book ={book}></Wish>)
            }
        </div>
    );
};

export default WishList;