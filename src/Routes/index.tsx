import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Search } from '../pages/Search';
import { Movie } from "../pages/Movie";
import { WishList } from "../pages/WishList";

export function AppRoutes() {
    return (
        <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/wishlist" element={<WishList />} />
        </Routes>
        </BrowserRouter>
    );
}