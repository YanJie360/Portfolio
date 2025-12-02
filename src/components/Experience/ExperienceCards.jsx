import React, { useState, useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ProjectCards(props) {
  const imgPath = props.imgPath;
  const isPdf = !!imgPath && typeof imgPath === "string" && imgPath.toLowerCase().endsWith(".pdf");

  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(300);
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        // Subtract small padding to avoid horizontal scroll
        const w = containerRef.current.offsetWidth - 16;
        setPageWidth(w > 200 ? w : 200);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Card className="project-card-view">
      {/* Render image or PDF preview depending on the file type */}
      {imgPath && !isPdf && (
        <Card.Img variant="top" src={imgPath} alt="card-img" />
      )}

      {imgPath && isPdf && (
        <div ref={containerRef} style={{ padding: "0.75rem", background: "#f8f9fa" }}>
          <div>
            <Document file={imgPath} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error} loading="">
              {Array.from(new Array(numPages), (el, index) => (
                <div key={`page_${index + 1}`} style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
                  <Page pageNumber={index + 1} width={pageWidth} />
                </div>
              ))}
            </Document>
          </div>
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* Short description / summary */}
        {/* Duration of experience */}
        <Card.Text>{props.duration}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Full body text (always visible when provided) */}
        {props.fullText && (
          <Card.Text style={{ textAlign: "justify", marginTop: "0.5rem" }}>
            {props.fullText}
          </Card.Text>
        )}
        {/* Render GitHub/Blog button only if ghLink is provided */}
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Render Demo button only if not a blog and demoLink is provided */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
