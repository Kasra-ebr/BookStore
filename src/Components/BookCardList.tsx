import { useEffect, useState } from "react";
import { getBooks } from "../server/server";
import { IBook } from "../Type/type";
import "./../App.css";
import { GoHeartFill } from "react-icons/go";
import Button from "./UI/Button";
import { useBookContext } from "./Hooks/BookContextProvider";
import Favourites from "./Favourites";

function BookCardList() {
  const {setBookList, bookList, favourites, search, setSearch, searchHandler,  allBooks,} = useBookContext();

  useEffect(() => {
    getBooks().then((res) => {
      setBookList(res);
    });
    searchHandler();
  }, [search]);



  return (
    <div className="container">
      <div
        className={ favourites?.length > 0  ? "booklist_container" : "booklist_container-sec" } >
        {(search.length >= 2 ? allBooks : bookList)?.map((item) => (
          <Book item={item} key={item.id} />
        ))}
      </div>

      <div className={favourites?.length > 0 ? "favourites-container" : null}>
        <Favourites />
      </div>
    </div>
  );
}

export default BookCardList;

function Book({ item }: { item: IBook }) {
  const { handleAddFav, favourites } = useBookContext();

  const favBook = favourites?.find((fav) => fav.id === item.id);
  const isLiked = favBook;
  return (
    <div className="book_item">
      <img src={item.image} alt={item.title} />
      <div className="book_item-info">
        <span className="title">Title: {item.title}</span>
        <span>Author: {item?.subtitle}</span>
        <h1>
          <p>English</p> <p>{item?.price}</p>
        </h1>
      </div>

      <Button onClick={() => handleAddFav(item.id)} className="btn--primary">
        <GoHeartFill color={isLiked ? "red" : "gray"} size="41px" />
      </Button>
    </div>
  );
}
