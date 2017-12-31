import qs from 'qs';
const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};

const parseJSONFilter = (res) => res.json();

const get = (uri) => {
  return fetch(uri).then(parseJSONFilter).catch(err => ({ err }));
};

const post = (uri, body) => {
  return fetch(uri, {
    body: qs.stringify(body),
    headers: defaultHeaders,
    method: 'POST'
  }).then(parseJSONFilter).catch(error => ({ error }));
};

const asyncGet = (uri) => {
  return fetch(uri);
};

const asyncPost = (uri, body) => {
  return fetch(uri, {
    body: qs.stringify(body),
    headers: defaultHeaders,
    method: 'POST'
  });
};


export default { get, post, asyncGet, asyncPost };
