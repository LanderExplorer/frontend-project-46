import { program } from 'commander';

const genDiff = () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.');

  program.parse();
};

genDiff();
