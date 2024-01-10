interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}` as string;
};

console.log(printTeacher('John', 'Doe'));
interface StudentConstructor {
  firstName: string;
  lastName: string;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student1.workOnHomework());
console.log(student1.displayName());
console.log(student1.firstName);
console.log(student1.lastName);
