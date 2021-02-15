import { sendRequest } from '../../common';
import API_ENDPOINTS from '../../endpoints';

/**
 * List colors
 * @param {string} token
 * @returns {Promise<[Color]>} result
 */
async function getColor({ token }) {
  return sendRequest({
    token,
    url: API_ENDPOINTS.GET_COLOR.URL,
    method: API_ENDPOINTS.GET_COLOR.METHOD,
  });
}

export default getColor;
