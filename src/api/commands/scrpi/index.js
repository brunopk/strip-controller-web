import { sendRequest } from '../../common';
import API_ENDPOINTS from '../../endpoints';

/**
 * Check the device status
 * @param {string} token
 * @returns {Promise<[Object]>} result
 */
async function cmdScrpiStatus({ token }) {
  return sendRequest({
    token,
    url: API_ENDPOINTS.CMD_SCRPI_STATUS.URL,
    method: API_ENDPOINTS.CMD_SCRPI_STATUS.METHOD,
  });
}

/**
 * Connect sc-master with a device with sc-rpi
 * @param {string} token
 * @param {string} address
 * @param {number} port
 * @returns {Promise<[Object]>} result
 */
async function cmdScrpiConnect({ token, address, port }) {
  return sendRequest({
    url: API_ENDPOINTS.CMD_SCRPI_STATUS.URL,
    method: API_ENDPOINTS.CMD_SCRPI_STATUS.METHOD,
    token,
    body: { address, port }
  });
}

export { cmdScrpiStatus, cmdScrpiConnect };
