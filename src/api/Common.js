import API_ENDPOINTS from './endpoints';
import ApiError from './ApiError';

/**
 * Send request to API
 * @param {string} url
 * @param {string} token
 * @param {string} method
 * @param {object} body
 * @returns {Promise<object>} result
 */
async function sendRequest({ url, token = null, method = 'GET', body = null }) {
  const address = localStorage.getItem('masterAddress');
  const port = localStorage.getItem('masterPort');
  const fetchParams = { method };

  if (body != null) {
    fetchParams.body = JSON.stringify({ ...body });
    fetchParams.headers = { 'Content-Type': 'application/json' };
  }

  if (token != null) {
    fetchParams.headers = typeof fetchParams.headers !== 'undefined' ? fetchParams.headers : {};
    fetchParams.headers.Authorization = `Bearer ${token}`;
  }

  const resp = await fetch(url.replace('MASTER', `http://${address}:${port}`), fetchParams);
  if (resp.ok) {
    return resp.json();
  }
  throw new ApiError(resp.status, resp.statusText);
}

async function getToken({ username, password }) {
  return sendRequest({
    url: API_ENDPOINTS.GET_TOKEN.URL,
    method: API_ENDPOINTS.GET_TOKEN.METHOD,
    body: { username, password }
  });
}

export { sendRequest, getToken };
