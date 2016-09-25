// import normalize from './normalizeContentType';
import statusGenerator from './statusGenerator';

export default (dataModel) => {
  return {
    url: dataModel.url,
    path: null,
    depth: dataModel.depthLimit,
    responseTime: dataModel.responseTime,
    statusCode: dataModel.status,
    status: statusGenerator(dataModel.status),
    time: null, // dataModel.stateData && dataModel.stateData.headers.date,
    contentType: null, // dataModel.stateData && dataModel.stateData.contentType,
    type: null // dataModel.stateData && normalize(dataModel.stateData.contentType)
  };
};
