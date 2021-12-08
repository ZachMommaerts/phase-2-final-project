import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <h1>Watch Stuff</h1>
            <SearchBar />
        </>
    )
}

export default Header;