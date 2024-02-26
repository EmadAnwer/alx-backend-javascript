const fs = require('fs');

// eslint-disable-next-line space-before-function-paren
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    fs.readFile(path, (error, data) => {
      if (error) {
        return reject();
      }
      data.toString().split('\n');
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
      console.log(`Number of students: ${count}`);

      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        console.log(
          `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[
            field
            // eslint-disable-next-line comma-dangle
          ].join(', ')}`
        );
      }
      resolve();
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

module.exports = countStudents;
