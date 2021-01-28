import { Card, Container } from "@material-ui/core";
import React from "react";

const DocumentPage = () => {
  return (
    <Container>
      <div className="cs-doc-bassic-info">
        <Card className="cs-doc-img">
          <img
            src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/56907659_393365341245567_78934828816269312_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=fJFWJKzy8-oAX_rlzTs&_nc_ht=scontent.fhan3-1.fna&oh=135a96a9e25de2c01381ae4fc3233d8f&oe=60390387"
            alt=""
          />
        </Card>
        <div className="cs-doc-info">
          
        </div>
      </div>
    </Container>
  );
};

export default DocumentPage;
