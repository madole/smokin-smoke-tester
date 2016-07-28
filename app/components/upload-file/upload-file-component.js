import React, { Component, PropTypes } from 'react';
import ReactDropzone from 'react-dropzone';
import parseData from '../../utils/parse-data';
import styles from './upload-file-component.scss';
import { Checkbox } from 'material-components';
import backButton from '../back-button/back-button';

export default class UploadComponent extends Component {
  static propTypes = {
    ingestData: PropTypes.func.isRequired,
    dataset: PropTypes.array
  };

  async onDrop(files) {
    const path = files[0].path;
    if (!path.indexOf('.json')) {
      return;
    }
    try {
      const data = await parseData(path);
      this.props.ingestData(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const dataset = this.props.dataset;

    return (
      <div>
        {backButton(styles.backButton)}
        <ReactDropzone className={styles.dropzone} onDrop={this.onDrop.bind(this)}>
          <div>Try uploading a file</div>
        </ReactDropzone>

        <Checkbox label="Data Loaded" value={!!(dataset && dataset.length)} />
      </div>
    );
  }
}
