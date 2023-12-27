"use client";

import {
  NavbarWrapper,
  Navbar as Nav,
  BlogHeading,
  ThemeSwitcher,
} from "../mui components/navbar/NavbarStyles";
import { WbSunny, DarkMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);

  const toggleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <NavbarWrapper sx={{
      boxShadow: theme ? "0px 0px 10px rgba(250, 250, 250, 0.8)" : "0px 0px 10px 0px rgba(0,0,0,0.75)"
    }}>
      <Nav>
        <BlogHeading variant="h2">
          Get
          <span style={theme ? { color: "white" } : { color: "black" }}>
            Blogs
          </span>
        </BlogHeading>
        <ThemeSwitcher disableRipple onClick={toggleTheme}>
          {theme ? <WbSunny sx={{color: 'white'}}/> : <DarkMode />}
        </ThemeSwitcher>
      </Nav>
    </NavbarWrapper>
  );
};

export default Navbar;
