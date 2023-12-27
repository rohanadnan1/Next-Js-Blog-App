'use client'

import { styled } from "@mui/system";
import { Box, Container } from "@mui/material";

export const HeroWrapper = styled(Box)({
    height: '100vh',
    width: '100%',
    marginTop: '30px',
    marginBottom: '30px',
})

export const HeroSection = styled(Container)({
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '0px 60px',
    width: '60%',
    marginBottom: '30px',
})