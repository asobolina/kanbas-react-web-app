import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { FaGear } from "react-icons/fa6";


export default function GradesControls() {
    return (
        <div id="wd-grades-controls" className="text-nowrap d-flex justify-content-between mb-3">
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
          Import
        </button>
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <LiaFileExportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
          Export
        </button>
  
        <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaGear className="position-relative me-2" style={{ bottom: "1px" }} />
        </button>
  
  
      </div>
    );
}