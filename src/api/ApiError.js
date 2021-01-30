/**
 * Errors from the API
 */
class ApiError {
  constructor(httpStatus, httpStatusText) {
    this.httpStatus = httpStatus;
    this.httpStatusText = httpStatusText;
  }
}

export default ApiError;
