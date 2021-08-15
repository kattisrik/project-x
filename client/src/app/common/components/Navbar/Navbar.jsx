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
    {
        url: '/contact',
        title: 'Contact Us'
    }
]

const Navbar = ({ children }) => {
    return (
        <div>
            <AppBar position='static'>
                <Tabs>
                    { PAGES.map((page, index) => {
                        return <Tab label={ page.title } href={ page.url } key={ index } />
                    }) }
                </Tabs>
            </AppBar>
        </div>
    )
};

export default Navbar;