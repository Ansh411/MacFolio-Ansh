import { WindowControls } from "#components/index";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowStore from "#store/window";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
).toString();

const Resume = () => {
  const { windows } = useWindowStore();
  const isMaximized = windows.resume?.isMaximized;

  return (
    <>
      {/* HEADER */}
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* PDF CONTAINER */}
      <div
        className={
          isMaximized
            ? "flex justify-center items-start py-5.75 overflow-auto"
            : ""
        }
      >
        <Document file="files/resume.pdf">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            scale={isMaximized ? 1.22 : 1}
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
