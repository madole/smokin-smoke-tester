// import Crawler from 'simplecrawler';
import simpleCrawler from 'super-simple-crawler';
import $ from 'jquery';

export const BEGIN_CRAWLING = Symbol('Begin Crawling');
export const STOP_CRAWLING = Symbol('Stop Crawling');
const DEFAULT_DEPTH_LIMIT = 2;

let crawler;

export default () => next => action => {
  const stopCrawling = action[STOP_CRAWLING];
  if (stopCrawling) return console.info('TO BE IMPLEMENTED');

  const beginCrawling = action[BEGIN_CRAWLING];
  if (!beginCrawling) return next(action);

  const { types, filter } = beginCrawling;
  let { url, depthLimit } = beginCrawling;

  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction[BEGIN_CRAWLING];
    return finalAction;
  }

  const [startType, resultType, completeType] = types;
  next(actionWith({ type: startType, url, depthLimit }));

  const protocolRegex = /^http.*:\/\//;
  if (!protocolRegex.test(url)) {
    url = `http://${url}`;
  }

  if (!depthLimit > 0) {
    depthLimit = DEFAULT_DEPTH_LIMIT;
  }

  const crawler = simpleCrawler({ url, maxDepthLimit: depthLimit });

  crawler.on('response', queueItem => {
    next(actionWith({ type: resultType, item: queueItem }));
  });

  crawler.on('done', () => {
    next(actionWith({ type: completeType }));
  });
};
