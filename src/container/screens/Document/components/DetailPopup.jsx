import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import data from "../../../../asset/sampleData2.json";
const DetailPopup = ({ open, handlePopup }) => {
  const [wordSearch, setWordSearch] = useState({
    _id: 0,
    type: true,
    text: "庵",
    transliteration: "Am",
    translation: "aaa",
    sound: "",
    to_dictionary: "https://hvdic.thivien.net/wnom/%E5%BA%B5",
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
      <DialogTitle id="responsive-dialog-title">
        {" "}
        國音詩集 : Quốc Âm Thi Tập
      </DialogTitle>
      <DialogContent dividers={false}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Box>
              {data.map((i) => (
                <>
                  {i.position[1] === 0 && <br />}
                  <Button
                    key={i.word._id}
                    onClick={() => setWordSearch(i.word)}
                  >
                    {/* {JSON.stringify(i.position)} */}
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
              <p>
                Nghe:
              </p>
              <a href={wordSearch.to_dictionary}>xem trong từ điển</a>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetailPopup;
