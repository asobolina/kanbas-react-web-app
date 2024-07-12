export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <p><input id="wd-name" value="A1 - ENV + HTML" /><br /><br /></p>
        <textarea id="wd-description" >
          The assignment is available online. Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-ppoints" type="number" value={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="assignments">ASSIGNMENTS</option>

                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="percentage">Percentage</option>

                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="online">Online</option>

                </select>
              </td>
            </tr>
          </tbody>
        </table><br /><br />
        
        <div style={{ marginLeft: '40px' }}>
            <label>Online Entry Options</label><br/>
            <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
        </div>


        <label htmlFor="wd-assign-to">Assign to</label><br />
        <input id="wd-assign-to" value="Everyone" /><br /><br />

        <div>
          <label htmlFor="wd-due-date">Due</label><br />
          <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />
        </div>

        <table>
          <tbody>
            <tr>

              <td>
                <label htmlFor="wd-available-from">Available from</label><br />
                <input id="wd-available-from" type="date" value="2024-05-06" />
              </td>
              <td>
                <label htmlFor="wd-available-until">Until</label><br />
                <input id="wd-available-until" type="date" value="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table> <br /><br />

        <hr style={{ border: '1px solid grey' }} />

        <div style={{ textAlign: 'right' }}>
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </div>
    );
}
