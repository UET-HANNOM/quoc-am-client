import {
  AppBar,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import data from "../../../../asset/sampleData2.json";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DetailPopup = ({ open, handlePopup }) => {
  const classes = useStyles();
  const [wordSearch, setWordSearch] = useState({
    "_id": 0,
    "type": true,
    "text": "庵",
    "transliteration": "Am",
    "translation": "aaa",
    "sound": "",
    "to_dictionary": "https://hvdic.thivien.net/wnom/%E5%BA%B5"
  });
  return (
    <Dialog
      // fullScreen
      maxWidth="lg"
      fullWidth
      open={open}
      onClose={() => handlePopup(false)}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      // TransitionComponent={Transition}
    >
      {/* <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => handlePopup(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sound
          </Typography>
          <Button autoFocus color="inherit" onClick={() => handlePopup(false)}>
            save
          </Button>
        </Toolbar>
      </AppBar> */}
      <DialogTitle id="responsive-dialog-title"> 國音詩集 : Quốc Âm Thi Tập</DialogTitle>
      <DialogContent dividers={false}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box>
            {data.map((i) => (
              <>
                {i.position[1] === 0 && <br />}
                <Button
                  key={i.word._id}
                  style={{}}
                  onClick={() => setWordSearch(i.word)}
                >
                  {JSON.stringify(i.position)}
                  {i.word.text}
                </Button>
              </>
            ))}
          </Box>
          
        </Grid>
        <Grid item xs={4}>
          <Box p={2}>
            <p>Từ nôm: {wordSearch.text}</p>
            <p>Phiên âm : {wordSearch.transliteration}</p>
            <p>Dịch nghĩa: {wordSearch.translation}</p>
            <p>Nghe: <VolumeUpIcon/></p>
            <a href={wordSearch.to_dictionary} >xem trong từ điển</a>
          </Box>
        </Grid>
      </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetailPopup;
