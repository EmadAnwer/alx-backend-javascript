import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];

    readDatabase(path)
      .then((data) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('This is the list of our students\n');
        let myData = '';

        Object.keys(data).forEach((key) => {
          myData += `Number of students in ${key}: ${
            data[key].length
          }. List: ${data[key].join(', ')}\n`;
        });

        response.write(myData.slice(0, -1));

        response.end();
      })
      .catch((err) => {
        response.status(500).json(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase(process.argv[2])
      .then((data) => {
        if (data[major]) {
          response.status(200).send(`List: ${data[major].join(', ')}`);
        } else {
          response
            .status(500)
            .send(`Major parameter must be ${Object.keys(data).join(', ')}`);
        }
      })
      .catch((err) => {
        response.status(500).json(err.message);
      });
  }
}

export default StudentsController;