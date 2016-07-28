import normalize from './normalizeContentType';

export default (dataModel) => ({
  url: dataModel.url,
  path: dataModel.path,
  depth: dataModel.depth,
  responseTime: dataModel.stateData && dataModel.stateData.requestTime,
  statusCode: dataModel.stateData && dataModel.stateData.code,
  time: dataModel.stateData && dataModel.stateData.headers.date,
  type: dataModel.stateData && normalize(dataModel.stateData.contentType)
});
