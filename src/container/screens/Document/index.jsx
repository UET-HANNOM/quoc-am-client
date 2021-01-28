import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Container,
  Typography,
} from "@material-ui/core";
import { Build, ExpandMore, Favorite, Loyalty, Save, Search } from "@material-ui/icons";
import React from "react";

const DocumentPage = () => {
  return (
    <Container>
      <div className="cs-doc-bassic-info">
        <Card className="cs-doc-img">
          <img
            src=""
            alt=""
          />
          <div className="cs-doc-tools">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Build color="primary" />
                <Typography color="primary">Công cụ</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<Search color="info"/>}
                  >
                    Tra cứu
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<Favorite color="secondary"/>}
                  >
                    Yêu thích
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  startIcon={<Loyalty color="primary"/>}
                >
                  Save
                </Button>
              </AccordionDetails>
            </Accordion>
          </div>
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
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            dicta quaerat, hic neque dolor doloremque veniam, illum quo vero
            officia, tempore sed eveniet doloribus? Quis adipisci rerum
            consectetur facere temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A culpa ratione natus officiis beatae
            temporibus dolore sequi quo nihil eligendi at, odio quisquam, quod
            repellendus omnis dolores sint rerum vero! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Iure officia earum a repellat
            sequi similique recusandae sed reiciendis, at corrupti quidem
            asperiores aliquam, tenetur nihil qui fuga facere quia temporibus!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            labore reiciendis non consequuntur vero, perspiciatis unde amet
            dolore! At ea fuga aspernatur, qui minima veniam fugiat numquam odit
            delectus blanditiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio atque natus modi corrupti facere veritatis
            sapiente suscipit enim doloribus iure provident mollitia repellendus
            tempora, omnis voluptate ducimus quaerat eligendi dolor. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolores animi
            temporibus id vel nulla at reiciendis cumque et ducimus ab quas,
            error quos incidunt eveniet quibusdam atque totam veritatis impedit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, suscipit! Quidem consectetur unde temporibus corrupti
            doloribus dicta, doloremque explicabo nisi eaque quos dolor vitae
            asperiores illo animi blanditiis repellat dolores. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Maxime maiores debitis nisi
            quibusdam nemo, voluptatem eum officiis laborum nam consequuntur
            voluptatibus ab nulla, eius odit fugiat rerum repellat! Modi,
            accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates doloremque rem in iusto dolorum, autem odit quas ut
            commodi quisquam. Sapiente voluptatibus, explicabo id modi velit
            similique officia temporibus provident. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deleniti corporis quis amet veniam
            earum asperiores laudantium ab sapiente eveniet, expedita assumenda
            dignissimos accusantium ipsam officia ad rerum. Debitis, excepturi
            eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deserunt soluta quisquam saepe non suscipit velit delectus rerum,
            eum, nobis nihil numquam! Ipsum asperiores magnam eveniet ad quia
            explicabo necessitatibus? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Non doloremque dicta repudiandae iste eos, odio
            ipsam quia? Voluptas laboriosam quidem officiis praesentium, porro
            nobis? Obcaecati consequatur libero alias vero! Doloribus!
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default DocumentPage;
