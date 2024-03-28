const getStoredWishList = ()=>{
    const storedWishList = localStorage.getItem('wish-list');
    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    return [];
}
const removeWish = id =>{
    id = parseInt(id);
    const storedWishList = getStoredWishList();
    const updatedWishList = storedWishList.filter(bookId => bookId !== id);
    localStorage.setItem('wish-list',JSON.stringify(updatedWishList));
}
const saveWishList = id =>{
    id = parseInt(id);
    const storedWishList = getStoredWishList();
    const exist = storedWishList.find(bookId => bookId === id);
    if(!exist){
        storedWishList.push(id);
        localStorage.setItem('wish-list',JSON.stringify(storedWishList));
    }
}
const getStoredReadList = () =>{
    const storedReadList = localStorage.getItem('read-books');
    if(storedReadList){
        return JSON.parse(storedReadList);
    }
    return [];
}
const saveReadList = id =>{
    id = parseInt(id);
    const storedReadList = getStoredReadList();
    const exist = storedReadList.find(bookId => bookId === id);
    if(!exist){
        storedReadList.push(id);
        localStorage.setItem('read-books',JSON.stringify(storedReadList));
    }
}

export {saveReadList,getStoredReadList,saveWishList,getStoredWishList,removeWish}