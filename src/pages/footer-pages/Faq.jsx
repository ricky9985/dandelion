import SData from "../../data.json";
import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Pages.css";
import { useState } from "react";

// #694a35
// 8f776a
export default function FAQPage() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { FaqData } = SData;
  return (
    <div className="faq">
      <NavBar></NavBar>
      <section className="mb-50">
        <div className="exp-info-title">
          <span>FAQ'S</span>
          <hr style={{ width: "35px" }}></hr>
        </div>
        <div className="content para-container">
          {FaqData.map((fdata, index) => (
            <Accordion
              expanded={expanded === `f-${index}`}
              onChange={handleChange(`f-${index}`)}
              key={`faq-${index}`}
            >
              <AccordionSummary
                sx={{ color: "#694a35", fontSize: "2rem" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{fdata.heading}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#8f776a" }}>
                <div dangerouslySetInnerHTML={{ __html: fdata.summary }} />
                {/* {fdata.summary} */}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
