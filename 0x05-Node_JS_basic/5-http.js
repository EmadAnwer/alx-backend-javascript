const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    fs.readFile(path, (error, dataBuffer) => {
      if (error) {
        return reject();
      }
      const data = dataBuffer.toString().split('\n');
      let count = 0;
      const fields = {};

      const firstnameIndex = data[0].split(',').indexOf('firstname');
      const fieldIndex = data[0].split(',').indexOf('field');
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < data.length; i++) {
        // eslint-disable-next-line no-continue
        if (data[i] === '') continue;
        // eslint-disable-next-line no-plusplus
        count++;
        const row = data[i].split(',');
        if (fields[row[fieldIndex]]) {
          fields[row[fieldIndex]].push(row[firstnameIndex]);
        } else {
          fields[row[fieldIndex]] = [row[firstnameIndex]];
        }
      }
      let studentsData = 'This is the list of our students\n';
      studentsData += `Number of students: ${count}\n`;

      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        studentsData += `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[
          field
          // eslint-disable-next-line comma-dangle
        ].join(', ')}\n`;
      }
      resolve(studentsData);
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}
const app = http
  // eslint-disable-next-line consistent-return
  .createServer((req, res) => {
    if (req.url === '/') {
      return res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
      const path = process.argv[2];

      countStudents(path)
        .then((studentsData) => res.end(studentsData))
        .catch((error) => {
          console.log(error);
        });
    }
  })
  .listen(1245);
module.exports = app;
