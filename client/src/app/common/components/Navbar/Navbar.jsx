import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from "next/link";

const PAGES = [
    {
        url: '/home',
        title: 'Home'
    },
    {
        url: '/about',
        title: 'About'
    },
    // {
    //     url: '/contact',
    //     title: 'Contact Us'
    // }
]

const Navbar = ({ children }) => {
    return (
        <>
            <nav class="navbar py-4 fixed-top navbar-expand-lg navbar-light" style={ { backgroundColor: "#e3f2fd" } }>
                <div class="container-fluid">
                    <Link href="/home" >
                        <a class="navbar-brand" href="/home">Project X</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-tabs">
                            { PAGES.map((page, index) => {
                                return <li class="nav-item">
                                    <Link href={ `${page.url}` }>
                                        <a class="nav-link" aria-current="page" href={ `${page.url}` }>{ page.title }</a>
                                    </Link>
                                </li>;
                            }) }
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 align-items-center justify-content-center d-flex">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Sign-up</button>
                </div>
            </nav>
        </>
    )
};

export default Navbar;