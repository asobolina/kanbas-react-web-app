import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api//modules/assignments`;
export const findAssignmentsForModule = async (assignmentId: string) => {
  const response = await axios.get(
    `${ASSIGNMENTS_API}/${assignmentId}/modules`
  );
  return response.data;
};
