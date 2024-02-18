const BACKEND = import.meta.env.VITE_STUDENTS_COURSES_API_URL || '';
export const GET_STUDENTS = `${BACKEND}/students`
export const GET_COURSES = `${BACKEND}/courses`
export const GET_STUDENT = (id: string) => `${BACKEND}/student/${id}`
export const GET_COURSE = (id: string) => `${BACKEND}/course/${id}`