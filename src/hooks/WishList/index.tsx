import { createContext, useContext, useState } from "react";
import { IMovieProps, IWishListContextData, iWishListProviderProps } from "./types";

const WishListContext = createContext({} as IWishListContextData);

export function WishListProvider(props: iWishListProviderProps): JSX.Element {
    const [wishList, setWishList] = useState<IMovieProps[]>(() => {
        return JSON.parse(localStorage.getItem('wishlist') || '[]');
    });

    function isMovieInWishList(movieId: number): boolean {
        const movieFound = wishList.find((wishListFilm) => wishListFilm.id === movieId);

        return !!movieFound;
    }

    function handleAddOrRemoveMovieOnWishList(movie: IMovieProps) {
        if (isMovieInWishList(movie.id)) {
            const filteredWishlist = wishList.filter((wishListFilm) => wishListFilm.id !== movie.id);
             
            setWishList(filteredWishlist);
             
            localStorage.setItem('wishList', JSON.stringify(filteredWishlist));

             return;
        }
        setWishList((prevState) => [...prevState, movie]);

        localStorage.setItem('wishlist', JSON.stringify ([...wishList, movie]))
    }

    return (
        <WishListContext.Provider value={{
            wishList, 
            setWishList,
            handleAddOrRemoveMovieOnWishList,
            isMovieInWishList
            }}>
            {props.children}
        </WishListContext.Provider>
    )
}

export function useWishList(): IWishListContextData {
    const context = useContext(WishListContext);

    if (!context) {
        throw new Error("useWishList must be used within a WishListProvider");
    }
    return context;
}
