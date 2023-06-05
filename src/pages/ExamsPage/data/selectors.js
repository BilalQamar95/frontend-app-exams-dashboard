export const courseExamsList = state => state.exams.examsList;

// derived from currentExamIndex rather than duplicating in state
export const currentExam = state => state.exams.examsList[state.exams.currentExamIndex];
