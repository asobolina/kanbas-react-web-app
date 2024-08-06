import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment } from "./reducer";

export default function AssignmentsControls() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div
      id="wd-assignments-controls"
      className="text-nowrap d-flex justify-content-between mb-3"
    >
      <div className="input-group">
        <span className="input-group-text">
          <HiMagnifyingGlass />
        </span>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          id="wd-text-fields-search"
          aria-describedby="basic-addon1"
        />
      </div>
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={() => navigate(`/Courses/${params.id}/Assignments/Editor.tsx`)}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
