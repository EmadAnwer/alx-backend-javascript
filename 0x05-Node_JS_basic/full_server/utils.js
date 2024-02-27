import { readFile } from 'fs';

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    readFile(path, (error, dataBuffer) => {
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

      resolve(fields);
    });
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

export default readDatabase;
