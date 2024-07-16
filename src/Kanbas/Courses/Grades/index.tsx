import React from 'react';
import GradesControls from './GradesControls';
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";




export default function Grades() {
  return (
    <div className="container mt-4">
      <GradesControls />

      <div className="row mb-3">
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text"><HiMiniMagnifyingGlass /></span>
            <input type="text" className="form-control" placeholder="Search Students" />
            <span className="input-group-text"><IoIosArrowDown /></span>

          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-group">
            <span className="input-group-text"><HiMiniMagnifyingGlass /></span>
            <input type="text" className="form-control" placeholder="Search Assignments" />
            <span className="input-group-text"><IoIosArrowDown /></span>
          </div>
        </div>
      </div>

      <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1">
          <CiFilter className="position-relative me-2" style={{ bottom: "1px" }} />
          Apply Filters
    </button>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML 2</th>
              <th>A3 CSS 3</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td><input type="text" className="form-control" defaultValue="90" /></td>
              <td>85</td>
              <td>92</td>
              <td>88</td>

            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>87</td>
              <td>89</td>
              <td>91</td>
              <td>90</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
