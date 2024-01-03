import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
    .then((user) => {
      uploadPhoto().then(
        (data) => {
          console.log(data.body, user.firstName, user.lastName);
        },
        () => {
          console.log('Signup system offline');
        },
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
