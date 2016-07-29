import normalize from './normalizeContentType';
import statusGenerator from './statusGenerator';

const statusCodes = [
  100,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200,
  201,
  202,
  203,
  204,
  205,
  204,
  300,
  301,
  302,
  303,
  307,
  404,
  400,
  401,
  403,
  500, 500, 500, 500,
  501,
  502,
  503,
  504,
  505
];

export default (dataModel) => {
  dataModel.stateData.code = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  return {
    url: dataModel.url,
    path: dataModel.path,
    depth: dataModel.depth,
    responseTime: dataModel.stateData && dataModel.stateData.requestTime,
    statusCode: dataModel.stateData && dataModel.stateData.code,
    status: dataModel.stateData && statusGenerator(dataModel.stateData.code),
    time: dataModel.stateData && dataModel.stateData.headers.date,
    contentType: dataModel.stateData && dataModel.stateData.contentType,
    type: dataModel.stateData && normalize(dataModel.stateData.contentType)
  };
};
