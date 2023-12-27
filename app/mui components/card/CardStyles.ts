'use client'

import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const BlogCard = styled(Box)({
    height: '400px',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    border: '1px solid gray',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    marginBottom: '30px',
})