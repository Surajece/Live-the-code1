import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
    <nav>
        <h1>Surakshit Meddocs</h1>
        <main>
            <Link to={"/home"}>Home</Link>
            <Link to={"/description"}>Description</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/hm"}>Health & Support</Link>
            <Link to={"/about"}>About us</Link>
        </main>
    </nav>
    )
}

export default Header;