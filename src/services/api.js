import apiClient from './axios';

export function getData(login) {
  return apiClient
    .get(`/search/users?q=${login} in:login`)
    .then((response) => {
      if (response) {
        return response.data;
      }
      return false;
    })
    .catch((error) => {
      console.log('API: getData() Error: ', error);
      return false;
    });
}

export function testFunction() {}
