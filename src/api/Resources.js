/* async function getItem({name}) {
  let result = await sendRequest(
    API_ENDPOINTS.STOCK_ITEMS.URL.replace('%s', name),
    API_ENDPOINTS.STOCK_ITEMS.METHOD,
  );
  if (result.length > 1) {
    throw Error('More than one item found');
  }
  if (result.length === 0) {
    return [];
  }
  return [restObjectsToRealmModels.mapItem(result[0])];
}

async function getLocations() {
  return await sendRequest(
    API_ENDPOINTS.LOCATIONS.URL,
    API_ENDPOINTS.LOCATIONS.METHOD,
  );
}

async function getPickingReason() {
  return await sendRequest(
    API_ENDPOINTS.PICKING_REASONS.URL,
    API_ENDPOINTS.PICKING_REASONS.METHOD,
  );
}

async function getPickings({userId, stateFilter}) {
  let result = await sendRequest(
    API_ENDPOINTS.PICKINGS.URL.replace('%u', userId).replace('%f', stateFilter),
    API_ENDPOINTS.PICKINGS.METHOD,
  );
  return result.map((x) => restObjectsToRealmModels.mapPicking(x));
}

async function getUsers() {
  return await sendRequest(API_ENDPOINTS.USERS.URL, API_ENDPOINTS.USERS.METHOD);
}

async function sendPicking(picking) {
  picking = realmModelsToRestObjects.mapPicking(picking);
  return await sendRequest(
    API_ENDPOINTS.PICKING_SEND.URL,
    API_ENDPOINTS.PICKING_SEND.METHOD,
    {params: {vals: picking}},
  );
}

async function approvePicking({picking, note}) {
  return await sendRequest(
    API_ENDPOINTS.PICKING_APPROVE.URL.replace('%s', picking.apiId),
    API_ENDPOINTS.PICKING_APPROVE.METHOD,
    {params: {vals: {note}}},
  );
}

async function cancelPicking({picking, note}) {
  return await sendRequest(
    API_ENDPOINTS.PICKING_CANCEL.URL.replace('%s', picking.apiId),
    API_ENDPOINTS.PICKING_CANCEL.METHOD,
    {params: {vals: {note}}},
  );
} */
