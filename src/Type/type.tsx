export interface IBook {
    id: string;
    title: string;
    author: string;
    summary: string;
    image: string;
    price: {
      currency: string;
      value: number;
      displayValue: string;
    };
  }

  export interface IProvider {
    childern: React.ReactNode;
  }
  export interface IBookContext {
    like: boolean;
    setLike: React.Dispatch<React.SetStateAction<boolean>>;
    favourites: IBook[] | null;
    setFavourites: React.Dispatch<React.SetStateAction<IBook[] | null>>;
    selectedId: string | null;
    setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
    handleAddFav: (id: string) => void;
    favBook: IBook | null;
    bookList: IBook[] | null;
    setBookList: React.Dispatch<React.SetStateAction<IBook[]>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchHandler: () => void,
    allBooks:IBook[]|null,
    setAllBooks:React.Dispatch<React.SetStateAction<IBook[]>>
  }