// This is something that will always be added to every request from axios:
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// delete axios.defaults.headers.common['Authorization'];

// if you want to override default behavior:
/*
// https://github.com/axios/axios/issues/382
axios.request('/path', {
  headers: {
    'Content-Type': null
  }
});
*/
