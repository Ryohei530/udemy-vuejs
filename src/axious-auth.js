import axious from 'axious';

const instance = axious.create({
  baseURL: "https://firestore.googleapis.com/v1/projects/vuejs-http-83e6e/databases/(default)/documents"
});

export default instance;