import API_ENDPOINTS from './Endpoints';
import ApiError from './ApiError';

/**
 * Send request to API
 * @param {string} url
 * @returns {Promise<object>} result
 */
async function sendRequest(url, method = 'GET', body = null) {
  const fetchParams = body !== null ? {
    method,
    body: JSON.stringify({ ...body }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
    : { method };
  const resp = await fetch(url, fetchParams);
  if (resp.ok) {
    return resp.json();
  }
  throw new ApiError(resp.status, resp.statusText);
}

async function getToken({ username, password }) {
  return sendRequest(
    API_ENDPOINTS.GET_TOKEN.URL,
    API_ENDPOINTS.GET_TOKEN.METHOD,
    { username, password }
  );
}

export default getToken;
