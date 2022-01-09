import React from 'react';
import Menu from "../components/Menu";
import {Container} from "@mui/material";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
           <Menu/>
            <Container style={{marginTop: 90}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;