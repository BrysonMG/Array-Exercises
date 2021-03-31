import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)
export const getStudentById = (id) => {
    const studentWithId = students.find(student => {
        return student.id === id
    })
    return studentWithId
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)
export const getInstructorById = (id) => {
    const instr = instructors.find(instructor => {
        return instructor.id === id
    })
    return instr
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")
export const getStudentByLastName = (lastName) => {
    const fixedCase = lastName.toLowerCase();
    const studentWithName = students.find(student => {
        return student.lastName.toLowerCase() === fixedCase
    })
    return studentWithName
}

// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")
export const getStudentByName = (fullName) => {
    const fixedCase = fullName.toLowerCase();
    const studentWithName = students.find(student => {
        const studentFullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return studentFullName === fixedCase;
    })
    return studentWithName
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long
export const getInstructorOfStudent = (studentId) => {
    const selectedStudent = students.find(student => {
        return student.id === studentId
    })
    const instructorOfStudent = instructors.find(instructor => {
        return instructor.id === selectedStudent.instructorId
    })
    return instructorOfStudent
}

// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate
export const getStudentWithMostLangs = () => {
    for (const eachStudent of students) {
        eachStudent.numOfLangs = eachStudent.languages.length;
    }
    let mostLangs = students.reduce((most, checkNext) => most.numOfLangs > checkNext.numOfLangs ? most : checkNext);
    return mostLangs
} 