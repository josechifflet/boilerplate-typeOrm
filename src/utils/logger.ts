import chalk from 'chalk';

export const debug = (text: any): void => {
  typeof text === 'object'
    ? console.log(chalk.hex('ffa500')(JSON.stringify(text, null, 2)))
    : console.log(chalk.hex('ffa500')(text?.toString()));
};

export const logInfo = (text: any): void => {
  typeof text === 'object'
    ? console.log(chalk.blue(JSON.stringify(text, null, 2)))
    : console.log(chalk.blue(text?.toString()));
};

export const logSuccess = (text: any): void => {
  typeof text === 'object'
    ? console.log(chalk.greenBright(JSON.stringify(text, null, 2)))
    : console.log(chalk.greenBright(text?.toString()));
};

export const logWarning = (text: any): void => {
  typeof text === 'object'
    ? console.log(chalk.yellowBright(JSON.stringify(text, null, 2)))
    : console.log(chalk.yellowBright(text?.toString()));
};

export const logError = (error: any): void => {
  if (error.stack) {
    console.log(chalk.redBright(error.stack?.toString()));
  } else if (typeof error === 'object') {
    console.log(chalk.redBright(JSON.stringify(error, null, 2)));
  } else {
    console.log(chalk.redBright(error?.toString()));
  }
};
