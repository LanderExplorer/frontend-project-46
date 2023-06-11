import _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';

const getDifference = (filepath1, filepath2) => {
  const validPath1 = path.resolve(process.cwd(), filepath1);
  const validPath2 = path.resolve(process.cwd(), filepath2);

  const data1 = fs.readFileSync(validPath1);
  const data2 = fs.readFileSync(validPath2);

  const json1 = JSON.parse(data1);
  const json2 = JSON.parse(data2);

  const keys1 = _.keys(json1);
  const keys2 = _.keys(json2);
  const allKeys = _.union(keys1, keys2).sort();
};

export default getDifference;
