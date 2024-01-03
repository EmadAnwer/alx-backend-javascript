import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [createUser(), uploadPhoto()];

  return Promise.all(promises)
    .then(([userData, photoData]) => {
      console.log(photoData.body, userData.firstName, userData.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
