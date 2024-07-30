import React from "react";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className="form-control"
            defaultValue="A1 - ENV + HTML"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <label htmlFor="wd-description" className="form-label">
            Description
          </label>
          <textarea
            id="wd-description"
            className="form-control"
            defaultValue="The assignment is available online. Submit a link to the landing page of"
          ></textarea>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-12">
          <div className="mb-3">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
            <input
              id="wd-points"
              type="number"
              className="form-control"
              defaultValue={100}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-group" className="form-label">
              Assignment Group
            </label>
            <select id="wd-group" className="form-select">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="wd-display-grade-as" className="form-label">
              Display Grade as
            </label>
            <select id="wd-display-grade-as" className="form-select">
              <option value="percentage">Percentage</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="form-label">
          Submission Type
        </label>

        <div className="col-lg-12">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select">
              <option value="online">Online</option>
            </select>
            <label className="form-label">
              <strong>Online Entry Options</strong>
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
              <br />
              <input
                type="checkbox"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
              <br />
              <input
                type="checkbox"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
              <br />
              <input
                type="checkbox"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
              <br />
              <input
                type="checkbox"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
              <br />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-assign" className="form-label">
        Assign
      </label>

      <div className="border p-3">
        <div className="row mb-3">
          <div className="col-lg-10">
            <label htmlFor="wd-assign-to" className="form-label">
              <strong>Assign to</strong>
            </label>
            <input
              id="wd-assign-to"
              className="form-control"
              defaultValue="Everyone"
            />
          </div>

          <div className="row mb-3">
            <div className="col-lg-10">
              <label htmlFor="wd-due-date" className="form-label">
                <strong>Due</strong>
              </label>
              <input
                id="wd-due-date"
                type="date"
                className="form-control"
                defaultValue="2024-05-13"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-5">
              <label htmlFor="wd-available-from" className="form-label">
                <strong>Available from</strong>
              </label>
              <input
                id="wd-available-from"
                type="date"
                className="form-control"
                defaultValue="2024-05-06"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="wd-available-until" className="form-label">
                <strong>Until</strong>
              </label>
              <input
                id="wd-available-until"
                type="date"
                className="form-control"
                defaultValue="2024-05-20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <hr className="my-4" />
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-primary bg-danger border-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
