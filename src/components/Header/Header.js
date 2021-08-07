import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import categories from "../../data/category";
import "./Header.css";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      type: lightMode ? "light" : "dark",
      primary: { main: lightMode ? "#000" : "#fff" },
    },
  });

  const handelChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            label="Search a Word"
            className="search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => handelChange(e.target.value)}
            className="select"
          >
            {categories.map((category) => (
              <MenuItem key={category.label} value={category.label}>
                {category.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
