const API_ENDPOINTS = {
  GET_TOKEN: {
    URL: 'MASTER/token',
    METHOD: 'POST'
  },
  GET_COLOR: {
    URL: 'MASTER/resources/color',
    METHOD: 'GET'
  },
  CMD_SCRPI_STATUS: {
    URL: 'MASTER/commands/scrpi/status',
    METHOD: 'PATCH'
  },
  CMD_SCRPI_CONNECT: {
    URL: 'MASTER/commands/scrpi/connect',
    METHOD: 'PATCH'
  }
};

export default API_ENDPOINTS;
