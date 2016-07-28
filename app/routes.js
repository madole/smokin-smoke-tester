import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import UploadPage from './containers/upload-file-container';
import ViewTablePage from './containers/view-table-container';
import SpendOverTime from './containers/spend-over-time-container';
import SpendByCategory from './containers/spend-by-category-container';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/upload" component={UploadPage} />
    <Route path="/view-table" component={ViewTablePage} />
    <Route path="/spend-over-time" component={SpendOverTime} />
    <Route path="/spend-by-category" component={SpendByCategory} />
  </Route>
);
