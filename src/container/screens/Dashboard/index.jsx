import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactJoyride from "react-joyride";
import { CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const DashboardPage = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    steps: [
      {
        content: <h2>Let's begin our journey!</h2>,
        locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
        placement: "center",
        target: "body",
      },
      {
        target: ".my-first-step",
        content: "This is my awesome feature!",
      },
      {
        target: ".my-other-step",
        content: "This another awesome feature!",
      },
    ],
    runJoyride: false,
  });
  const startIntro = () => {
    setState({
      ...state,
      runJoyride: true,
    });
  };
  const history = useHistory();
  const gotoDocumentPage = (id) => {
    history.push(`/document/${id}`)
  }
  return (
    <>
      <ReactJoyride
        steps={state.steps}
        continuous={true}
        run={state.runJoyride}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
      />
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className=".star-burst"
            >
              Thư viện Hán - Nôm
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Chữ Nôm (𡨸喃), còn gọi là Quốc âm (國音) là hệ thống văn tự ngữ
              tố dùng để viết tiếng Việt (khác với chữ Quốc Ngữ tức chữ Latinh
              tiếng Việt là bộ chữ tượng thanh)
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={startIntro}
                  >
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="my-first-step"
                  >
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4} className="my-other-step">
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardActionArea onClick={() => gotoDocumentPage(card)}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Chi tiết
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;
