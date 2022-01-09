import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import styles from '../styles/Menu.module.scss'

const Menu = () => {
    return (
        <React.Fragment>
            <AppBar position="fixed" className={styles.menu}>
                <Toolbar className={styles.logo}>myBLOG</Toolbar>
            </AppBar>

        </React.Fragment>
    );
};

export default Menu;
