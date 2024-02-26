const fs = require('fs');

function countStudents (path) {
  let data;
  try {
    data = fs.readFileSync(path).toString().split('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  let count = 0;
  const fields = {};

  const firstnameIndex = data[0].split(',').indexOf('firstname');
  const fieldIndex = data[0].split(',').indexOf('field');
  for (let i = 1; i < data.length; i++) {
    if (data[i] === '') continue;
    count++;
    const row = data[i].split(',');
    if (fields[row[fieldIndex]]) {
      fields[row[fieldIndex]].push(row[firstnameIndex]);
    } else {
      fields[row[fieldIndex]] = [row[firstnameIndex]];
    }
  }
  console.log(`Number of students: ${count}`);

  for (const field in fields) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[
        field
      ].join(', ')}`
    );
  }
}

module.exports = countStudents;
