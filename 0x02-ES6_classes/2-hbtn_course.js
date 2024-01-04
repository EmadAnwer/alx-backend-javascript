export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of Strings');
    }

    for (const student of students) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of Strings');
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      for (const student of students) {
        console.log('im here');
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of Strings');
        }
      }

      this._students = students;
    } else {
      throw new TypeError('Students must be an array of Strings');
    }
  }
}
