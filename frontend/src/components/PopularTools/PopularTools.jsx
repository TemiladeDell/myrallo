import ToolCard from "../ToolCard/ToolCard";
import compress from "../../assets/compress.png";
import resume from "../../assets/resume.png";
import qrcode from "../../assets/qrcode.png";
import ocr from "../../assets/ocr.png";
import word from "../../assets/word.png";
import merge from "../../assets/merge.png";
import fire from "../../assets/fire.png";

function PopularTools() {
  return (
    <section className="mx-auto mt-0 max-w-7xl px-6">
      
      <div className="mb-12 flex flex-col items-center justify-center">
        <img src={fire} alt="Fire" className="mx-auto mb-4 h-12 w-12" />
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Popular Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        <ToolCard
          icon={<img src={merge} alt="Merge" className="h-10 w-10 object-contain" />}
          title="Merge PDF"
          description="Combine multiple PDF files into one."
        />

        <ToolCard
          icon={<img src={compress} alt="Compress" className="h-10 w-10 object-contain" />}
          title="Compress PDF"
          description="Reduce PDF file size."
        />

        <ToolCard
          icon={<img src={word} alt="Word" className="h-10 w-10 object-contain" />}
          title="PDF to Word"
          description="Convert PDFs into editable word documents."
        />

        <ToolCard
          icon={<img src={resume} alt="Resume" className="h-10 w-10 object-contain" />}
          title="Resume Builder"
          description="Create a professional resume in minutes."
        />

        <ToolCard
          icon={<img src={qrcode} alt="QR Code" className="h-10 w-10 object-contain" />}
          title="QR Generator"
          description="Generate custom QR codes instantly."
        />

        <ToolCard
          icon={<img src={ocr} alt="OCR" className="h-10 w-10 object-contain" />}
          title="OCR"
          description="Extract text from images."
        />

      </div>

    </section>
  );
}

export default PopularTools;