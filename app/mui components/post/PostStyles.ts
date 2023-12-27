'use client'

import { styled } from "@mui/system"
import { Container } from "@mui/material"

export const PostWrapper = styled(Container)({
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '0px 60px',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '30px',
    fontSize: '1.2rem',
})