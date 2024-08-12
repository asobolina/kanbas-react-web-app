import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/courses/modules/assignments`;

export const deleteModule = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const createAssignment = async (
  assignmentId: string,
  assignment: any
) => {
  const response = await axios.post(
    `${ASSIGNMENTS_API}/${assignmentId}/modules`,
    module
  );
  return response.data;
};

export const findAssignmentsForModule = async (assignmentId: string) => {
  const response = await axios.get(
    `${ASSIGNMENTS_API}/${assignmentId}/modules`
  );
  return response.data;
};
