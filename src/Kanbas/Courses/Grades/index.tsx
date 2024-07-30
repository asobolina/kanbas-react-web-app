import React from "react";
import GradesControls from "./GradesControls";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
  const params = useParams();
  const courseId = params.id;

  // Get the list of students enrolled in the current course
  const enrolledStudents = db.enrollments
    .filter((enrollment) => enrollment.course === courseId)
    .map((enrollment) => db.users.find((user) => user._id === enrollment.user));

  // Get the list of assignments for the current course
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="container mt-4">
      <GradesControls />

      <div className="row mb-3">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text">
              <HiMiniMagnifyingGlass />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Students"
            />
            <span className="input-group-text">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text">
              <HiMiniMagnifyingGlass />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Assignments"
            />
            <span className="input-group-text">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>

      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-secondary me-1"
      >
        <CiFilter
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Apply Filters
      </button>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student) => (
              <tr key={student?._id ?? "unknown"}>
                <td>
                  {student?.firstName} {student?.lastName}
                </td>
                {courseAssignments.map((assignment) => {
                  const gradeRecord = db.grades.find(
                    (grade) =>
                      grade.student === student?._id &&
                      grade.assignment === assignment._id
                  );
                  return (
                    <td key={assignment._id}>
                      {gradeRecord ? gradeRecord.grade : "N/A"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
