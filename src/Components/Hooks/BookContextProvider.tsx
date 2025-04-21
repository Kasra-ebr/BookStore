import { createContext, useContext, useState } from "react";
import { IBook, IBookContext, IProvider } from "../../Type/type";


const BookContext = createContext<IBookContext>({
  like: false,
  setLike: () => {},
  favourites: null,
  setFavourites: () => {},
  selectedId: null,
  setSelectedId: () => {},
  handleAddFav: () => {},
  favBook: null,
  bookList: [],
  setBookList: () => {},
  search: "",
  setSearch: () => {},
  searchHandler:()=>{},
  allBooks: null, 
  setAllBooks: ()=> {},
});

export const useBookContext = () => {
  return useContext(BookContext);
};
export function BookContextProvider({ children }: IProvider) {
  const [bookList, setBookList] = useState<IBook[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [favourites, setFavourites] = useState<IBook[] | null>([]);
  const [selectedId, setSelectedId] = useState<string | null>("");
  const favBook = favourites?.find((fav) => fav.id === bookList.id);
  const [search, setSearch] = useState<string>("");
  const [allBooks, setAllBooks] = useState<IBook[]>([]); // ⬅ full list
  const handleAddFav = (id: string) => {
    setSelectedId(id);

    // Check if the book is already in favourites using `some()`
    const isAlreadyInFavourites = favourites?.some((fav) => fav.id === id);

    if (isAlreadyInFavourites) {
      // If the book is already in favourites, remove it
      setFavourites(favourites?.filter((fav) => fav.id !== id) || []);
    } else {
      // If the book is not in favourites, add it
      const bookToAdd = bookList?.find((book) => book.id === id);
      if (bookToAdd) {
        setFavourites((prevFavourites) => [
          ...(prevFavourites || []),
          bookToAdd,
        ]);
      }
    }

    // Toggle the like state for UI purposes
    setLike((prevLike) => !prevLike);
  };

  const searchHandler = () => {
    if (search.length <= 3) {
      setAllBooks([]); 
      return;
    }
    const searchItems = bookList.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setAllBooks(searchItems);
  };
  return (
    <BookContext.Provider
      value={{
        allBooks,
        like,
        favourites,
        selectedId,
        handleAddFav,
        setFavourites,
        favBook,
        setBookList,
        bookList,
        setSearch,
        search,
        searchHandler
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
