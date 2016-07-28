import Crawler from 'simplecrawler';
const DEFAULT_DEPTH_LIMIT = 2;

export default ({ dispatchItemFetched, dispatchUpdateStatusComplete }) => ({ url, depthLimit }) => {
  const crawler = Crawler.crawl(url);

  crawler.maxDepth = depthLimit !== undefined ? depthLimit : DEFAULT_DEPTH_LIMIT;
  // crawler.interval = 500;
  crawler.on('crawlstart', () => console.info('crawlin'));
  crawler.on('fetchcomplete', queueItem => {
    dispatchItemFetched(queueItem);
  });
  crawler.on('complete', () => {
    dispatchUpdateStatusComplete();
  });
  crawler.start();
};
