import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Container,
  Typography,
} from "@material-ui/core";
import {
  Build,
  ExpandMore,
  Favorite,
  Loyalty,
  Search,
} from "@material-ui/icons";
import React, { useState } from "react";
import DetailPopup from "./components/DetailPopup";

const DocumentPage = () => {
  const [state, setState] = useState({
    showtool: false,
    showtool2: false,
    showDetailPopup: false
  });
  const onShowtool = () => {
    setState({
      ...state,
      showtool: !state.showtool,
    });
  };
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handlePopup = (option) => {
    setState({...state, showDetailPopup: option})
  }
  return (
    <Container>
      <DetailPopup open={state.showDetailPopup} handlePopup={handlePopup} />
      <div className="cs-doc-bassic-info">
        <Card
          className="cs-doc-img"
          onMouseEnter={() => setState({ ...state, showtool2: true })}
          onMouseLeave={() => setState({ ...state, showtool2: false })}
        >
          <img
            src="https://github.com/phamquyetthang/quoc-am-client/blob/sprint1/create-structure/src/asset/test_mocban.png?raw=true"
            alt="tai lieu"
          />
          <div className="cs-doc-tools">
            <Accordion expanded={state.showtool} onChange={onShowtool}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onMouseLeave={() => setState({ ...state, showtool: false })}
              >
                <Build color="primary" />
                <Typography color="primary">Công cụ</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<Search color="info" />}
                  onClick={()=>handlePopup(true)}
                >
                  Tra cứu
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<Favorite color="secondary" />}
                >
                  Yêu thích
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<Loyalty color="primary" />}
                >
                  Save
                </Button>
              </AccordionDetails>
            </Accordion>
          </div>

          {state.showtool2 && (
            <div className="cs-doc-hover-tool">
              <Button
                color="inherit"
                size="small"
                startIcon={<Search color="info" />}
                onClick={()=>handlePopup(true)}
              >
                Tra cứu
              </Button>
              <Button
                variant="contained"
                size="small"
              >
                Xem toàn bộ
              </Button>
            </div>
          )}
        </Card>

        <div className="cs-doc-info">
          <div>
            <span className="cs-doc-title">Tiêu đề: Lorem ipsum dolor</span>
          </div>
          <div>
            <span>Tác giả: Lorem</span>
          </div>
          <div>
            <span>Tóm tắt:</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
              nihil aspernatur eius necessitatibus quas totam consectetur
              laborum delectus placeat quae in nam temporibus eveniet quis
              numquam cupiditate pariatur maiores dignissimos.
            </p>
          </div>
        </div>
      </div>

      <Card>
        <h3 style={{ marginTop: "1em" }}>Nội dung</h3>
        <div className="cs-doc-content">
          <Accordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Trang 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Totam, sequi repudiandae obcaecati, a accusantium ratione
                voluptatibus beatae tempora facere molestiae doloribus
                reprehenderit, praesentium illo recusandae quae repellendus
                commodi optio. Molestias. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore pariatur quo eum
                tempora eius at! Voluptatibus libero laborum inventore
                distinctio provident impedit exercitationem debitis sunt
                sapiente voluptatem facilis, beatae est.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Trang 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Trang 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography>Trang 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography>Trang 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            square
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography>Trang 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Card>
    </Container>
  );
};

export default DocumentPage;
