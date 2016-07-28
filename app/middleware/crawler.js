import Crawler from 'simplecrawler';

export const BEGIN_CRAWLING = Symbol('Begin Crawling');
const DEFAULT_DEPTH_LIMIT = 2;

export default () => next => action => {
  const beginCrawling = action[BEGIN_CRAWLING];
  if (!beginCrawling) return next(action);

  const { types } = beginCrawling;
  let { url, depthLimit } = beginCrawling;

  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction[BEGIN_CRAWLING];
    return finalAction;
  }

  const [startedType, resultType, completeType] = types;
  next(actionWith({ type: startedType, url, depthLimit }));

  const protocolRegex = /^http.*:\/\//;
  if (!protocolRegex.test(url)) {
    url = `http://${url}`;
  }

  if (!depthLimit > 0) {
    depthLimit = DEFAULT_DEPTH_LIMIT;
  }

  const crawler = Crawler.crawl(url);

  crawler.maxDepth = depthLimit;
  crawler.interval = 500;

  crawler.on('crawlstart', () => console.info('crawlin'));

  crawler.on('fetchcomplete', queueItem => {
    next(actionWith({ type: resultType, item: queueItem }));
  });

  crawler.on('complete', () => {
    next(actionWith({ type: completeType }));
  });

  crawler.start();
};
