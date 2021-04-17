import { FormControl, InputBase, makeStyles, Select } from "@material-ui/core";
import React, { useState } from "react";
import translateIcon from "../Welcome/language.svg";
const useStyles = makeStyles((theme) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const DictionaryScreen = () => {
  const [typeSearch, setTypeSearch] = useState(1);
  const handleChange = (event) => {
    setTypeSearch(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className="cs-dictionary">
      <h2>Từ điển Hán - Nôm</h2>
      <FormControl variant="outlined" className="cs-dic-choose-type">
        <Select
          native
          value={typeSearch}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={1}>Tra từ điển</option>
          <option value={2}>Tìm chữ Hán - Nôm</option>
        </Select>
      </FormControl>
      <div className="cs-dic-search-word">
        <div className={classes.searchIcon}>
          <img src={translateIcon} alt="anh" />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon} style={{ right: 0, top: 0 }}>
          <i class="fi-rr-search"></i>
        </div>
      </div>
    </div>
  );
};

export default DictionaryScreen;