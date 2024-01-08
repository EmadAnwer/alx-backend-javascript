export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) return students.reduce((p, c) => p + c.id, 0);
  return 0;
}
