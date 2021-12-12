import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavBar = styled.div`
    display: flex;
`;

function Header({ search, setSearch }) {
    return (
        <NavBar>
            <h1>Watch Stuff</h1>
            <Link to='/watchlist'>Watch List</Link>
            <SearchBar search={search} setSearch={setSearch} />
        </NavBar>
    )
}

export default Header;