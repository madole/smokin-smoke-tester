/* eslint no-param-reassign: 0 */
import Crawler from 'simplecrawler';
import $ from 'jquery';
const DEFAULT_DEPTH_LIMIT = 2;

export default ({ dispatchItemFetched, dispatchUpdateStatusComplete }) => ({ url, depthLimit }) => {
  if (!url.startsWith('http://') || !url.startsWith('https://')) {
    url = `http://${url}`;
  }
  const crawler = Crawler.crawl(url);

  crawler.maxDepth = depthLimit || DEFAULT_DEPTH_LIMIT;
  crawler.interval = 500;
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
  crawler.on('crawlstart', () => console.info('crawlin'));

  crawler.on('fetchcomplete', queueItem => {
    dispatchItemFetched(queueItem);
  });
  crawler.on('complete', () => {
    dispatchUpdateStatusComplete();
  });
  crawler.start();
};
