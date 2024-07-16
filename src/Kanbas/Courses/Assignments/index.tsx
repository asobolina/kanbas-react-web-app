import "/Users/anastasiasobolina/webdev/kanbas-react-web-app/src/Kanbas/styles.css";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { PiNotebook } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AssignmentControlButtons from "./AssignmentsControlButtons";



export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <IoMdArrowDropdown className="fs-4"/>
          <h3 className="mb-0 bg-light">ASSIGNMENTS</h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark fs-6 me-2 border border-secondary text-secondary rounded-pill p-2">40% of Total</span>
          <BsPlus className="fs-4"/>
          <IoEllipsisVertical className="fs-4" />

        </div>
      </div>
      
      <ul id="wd-assignment-list" className="list-group rounded-0">
      <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <PiNotebook className="me-2 fs-3 text-success" />
            <div>
              <div className="wd-assignment-container fs-5">
                A1
              </div>
              <p className="mb-0">
                <span className="text-danger">Multiple Modules  </span>
                <strong>| Not available until</strong> May 6 at 12:00am |
                <strong> Due</strong> May 13 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <AssignmentControlButtons />
        </li>
        </a>

        <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <PiNotebook className="me-2 fs-3 text-success" />
            <div>
              <div className="wd-assignment-container fs-5">
                A2
              </div>
              <p className="mb-0">
                <span className="text-danger">Multiple Modules </span>
                <strong>| Not available until</strong> May 13 at 12:00am |
                <strong> Due</strong> May 20 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <AssignmentControlButtons />
        </li>
        </a>


        <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none text-dark">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <PiNotebook className="me-2 fs-3 text-success" />
            <div>
              <div className="wd-assignment-container fs-5">
                A3
              </div>
              <p className="mb-0">
                <span className="text-danger">Multiple Modules </span>
                <strong>| Not available until</strong> May 20 at 12:00am |
                <strong> Due</strong> May 27 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
          <AssignmentControlButtons />

        </li>
        </a>
      </ul>
    </div>
  );
}
