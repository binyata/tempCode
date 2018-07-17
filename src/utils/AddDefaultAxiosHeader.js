// This is something that will always be added to every request from axios:
// axios.defaults.headers.common['Auth-Token'] = 'foo bar';

// if you want to override default behavior:
/*
// https://github.com/axios/axios/issues/382
axios.request('/path', {
  headers: {
    'Content-Type': null
  }
});
*/
