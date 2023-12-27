'use client';

import { styled } from "@mui/system";
import { Box, Button, Container, Typography } from "@mui/material";

export const NavbarWrapper = styled(Box)({
    height: '100px',
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.80)',
})

export const Navbar = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
})

export const BlogHeading = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'gray',
    paddingLeft: '60px',
})

export const ThemeSwitcher = styled(Button)({
    backgroundColor: 'transparent',
    height: 'fit-content',
    width: 'fit-content',
    color: 'black',
    paddingRight: '60px',
    '&:hover': {
        backgroundColor: 'transparent',
    },
})