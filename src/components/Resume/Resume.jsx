import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cl_pdf from "../../Assets/../Assets/LIAUWYANJIE_CHINESE CV.pdf";
import en_pdf from "../../Assets/../Assets/LIAUWYANJIE_Eng CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [index, setIndex] = useState(0); // 0: Chinese, 1: English

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSelect = (selectedIdx) => {
    setIndex(selectedIdx);
  };

  const currentFile = index === 0 ? cl_pdf : en_pdf;

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", position: "relative", paddingTop: 20 }}>
        <Col xs="auto">
          <Button variant="primary" href={currentFile} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />&nbsp; Download CV
          </Button>
        </Col>
      </Row>

      <Row className="resume" style={{ justifyContent: "center", paddingTop: 20 }}>
        <Col md={10}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Document file={cl_pdf} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </div>
              <Carousel.Caption>
                <h5>Chinese CV</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Document file={en_pdf} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
              </div>
              <Carousel.Caption>
                <h5>English CV</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
