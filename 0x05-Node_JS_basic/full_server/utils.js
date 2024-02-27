import { readFile } from 'fs/promises';

async function readDatabase(path) {
  return readFile(path)
    .then((dataBuffer) => {
      const data = dataBuffer.toString().split('\n');

      const fields = {};

      const firstnameIndex = data[0].split(',').indexOf('firstname');
      const fieldIndex = data[0].split(',').indexOf('field');
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < data.length; i++) {
        // eslint-disable-next-line no-continue
        if (data[i] === '') continue;
        // eslint-disable-next-line no-plusplus

        const row = data[i].split(',');
        if (fields[row[fieldIndex]]) {
          fields[row[fieldIndex]].push(row[firstnameIndex]);
        } else {
          fields[row[fieldIndex]] = [row[firstnameIndex]];
        }
      }
      return fields;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

export default readDatabase;
