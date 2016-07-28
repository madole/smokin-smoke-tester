import {
  Converter
} from 'csvtojson';

const convertor = new Converter();

export default (filename) => {
  const convert = (resolve, reject) => {
    const callback = (err, results) => {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    };
    convertor.fromFile(filename, callback);
  };

  return new Promise(convert);
};
