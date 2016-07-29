import Crawler from 'simplecrawler';
import $ from 'jquery';

export const BEGIN_CRAWLING = Symbol('Begin Crawling');
const DEFAULT_DEPTH_LIMIT = 2;

export default () => next => action => {
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

  const crawler = Crawler.crawl(url);

  crawler.maxDepth = depthLimit;
  crawler.interval = 500;

  if (filter === 'html') {
    crawler.discoverResources = (buffer) => {
      const $site = $(buffer.toString('utf8'));

      const allLinks = $site.find('a[href]').map(function mapHrefs() {
        return $(this).attr('href');
      });

      const links = [];
      allLinks
      .filter((i, link) => (link.startsWith('/')))
      .each((i, link) => links.push(link));
      return links;
    };
  }

  crawler.on('crawlstart', () => console.info('crawlin'));

  crawler.on('fetchcomplete', queueItem => {
    next(actionWith({ type: resultType, item: queueItem }));
  });

  crawler.on('complete', () => {
    next(actionWith({ type: completeType }));
  });

  crawler.start();
};
