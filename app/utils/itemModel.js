import normalize from './normalizeContentType';
import statusGenerator from './statusGenerator';

export default (dataModel) => ({
  url: dataModel.url,
  path: dataModel.path,
  depth: dataModel.depth,
  responseTime: dataModel.stateData && dataModel.stateData.requestTime,
  statusCode: dataModel.stateData && dataModel.stateData.code,
  status: dataModel.stateData && statusGenerator(dataModel.stateData.code),
  time: dataModel.stateData && dataModel.stateData.headers.date,
  contentType: dataModel.stateData && dataModel.stateData.contentType,
  type: dataModel.stateData && normalize(dataModel.stateData.contentType)
});
