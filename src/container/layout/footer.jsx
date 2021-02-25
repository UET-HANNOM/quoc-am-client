import Typography from "@material-ui/core/Typography";
import React from "react";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a href="https://github.com/phamquyetthang">
        Cs Tech
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const FooterLayout = () => {
  return (
    <footer>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
};

export default FooterLayout;
