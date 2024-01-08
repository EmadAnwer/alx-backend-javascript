export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const filterdGrades = newGrades.filter((g) => g.studentId === student.id)[0];
      if (filterdGrades) {
        return {
          ...student,
          grade: filterdGrades.grade || 'N/A',
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
}
