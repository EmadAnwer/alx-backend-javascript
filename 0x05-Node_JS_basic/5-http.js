const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, dataBuffer) => {
      if (error) {
        reject(new Error('Cannot load the database')); // Provide a meaningful error message
        return;
      }
      const data = dataBuffer.toString().split('\n');
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

      let studentsData = 'This is the list of our students\n';
      studentsData += `Number of students: ${count}\n`;

      for (const field in fields) {
        studentsData += `Number of students in ${field}: ${
          fields[field].length
        }. List: ${fields[field].join(', ')}\n`;
      }

      resolve(studentsData);
    });
  });
}

const app = http
  .createServer((req, res) => {
    if (req.url === '/') {
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      const path = process.argv[2];

      countStudents(path)
        .then((studentsData) => res.end(studentsData))
        .catch((error) => {
          console.error(error); // Log the error for debugging
          res.statusCode = 500; // Internal Server Error
          res.end('Internal Server Error');
        });
    } else {
      res.statusCode = 404; // Not Found
      res.end('404 Not Found');
    }
  })
  .listen(1245);

module.exports = app;
