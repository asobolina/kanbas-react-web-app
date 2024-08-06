import { createSlice } from "@reduxjs/toolkit";
import { assignments, assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments.push(newAssignment);
      //  = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: updatedAssignment }) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === updatedAssignment._id
      );
      if (index !== -1) {
        state.assignments[index] = updatedAssignment;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
