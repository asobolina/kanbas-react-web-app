import "../../../styles.css";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { PiNotebook } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addAssignment, deleteAssignment, updateAssignment } from "./reducer";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AssignmentEditor from "./Editor";

export default function Assignments() {
  const params = useParams();
  const courseId = params.id;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(
    null
  );

  // const confirmDelete = () => {
  //   if (selectedAssignment) {
  //     dispatch(deleteAssignment(selectedAssignment));
  //     setSelectedAssignment(null);
  //   }
  // };

  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <IoMdArrowDropdown className="fs-4" />
          <h3 className="mb-0 bg-light">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark fs-6 me-2 border border-secondary text-secondary rounded-pill p-2">
            40% of Total
          </span>
          <BsPlus className="fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === params.id)
          .map((assignment: any) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div
                className="d-flex align-items-center"
                onClick={() =>
                  navigate(`/Courses/${courseId}/Assignments/${assignment._id}`)
                }
              >
                <BsGripVertical className="me-2 fs-3" />
                <PiNotebook className="me-2 fs-3 text-success" />
                <div>
                  <div className="wd-assignment-container fs-5">
                    {assignment._id}
                  </div>
                  <p className="mb-0">
                    <span className="text-danger">Multiple Modules </span>
                    <strong>| Not available until</strong> May 6 at 12:00am |
                    <strong> Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                </div>
              </div>
              <div>
                <BsTrash
                  className="text-danger me-2 mb-1"
                  onClick={() => dispatch(deleteAssignment(assignment._id))}
                />
              </div>
              <AssignmentControlButtons />
            </li>
          ))}
      </ul>
    </div>
  );
}
