import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Link from "next/link";
const useStyles = makeStyles((theme) => ({

}));
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
        <div>
            {/* <AppBar position='static'>
                <Tabs>
                    { PAGES.map((page, index) => {
                        return <Tab label={ page.title } href={ page.url } key={ index } />
                    }) }
                </Tabs>
            </AppBar> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home">Project X</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            { PAGES.map((page, index) => {
                                return <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href={ `${page.url}` }>{ page.title }</a>
                                </li>;
                            }) }
                        </ul>
                        {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;