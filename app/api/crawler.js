/* eslint no-param-reassign: 0 */
import Crawler from 'simplecrawler';
const DEFAULT_DEPTH_LIMIT = 2;

export default ({ dispatchItemFetched, dispatchUpdateStatusComplete }) => ({ url, depthLimit }) => {
  if (!url.startsWith('http://') || !url.startsWith('https://')) {
    url = `http://${url}`;
  }
  const crawler = Crawler.crawl(url);

  crawler.maxDepth = depthLimit || DEFAULT_DEPTH_LIMIT;
  crawler.interval = 500;
  crawler.on('crawlstart', () => console.info('crawlin'));

  crawler.on('fetchcomplete', queueItem => {
    dispatchItemFetched(queueItem);
  });
  crawler.on('complete', () => {
    dispatchUpdateStatusComplete();
  });
  crawler.start();
};
