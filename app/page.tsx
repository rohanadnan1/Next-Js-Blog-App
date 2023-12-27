'use client'

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import React from "react"
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export default function Home() {

  const themeMode = useSelector((state: any) => state.theme);

  const theme = createTheme({
    palette: {
      mode: themeMode ? "dark" : "light",
    },
  });

  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Hero />
        </ThemeProvider>
      </>
  )
}
