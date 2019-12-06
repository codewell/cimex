
const cimex = (message) => {
  const isTurnedOn = process.env.NODE_ENV === 'development' || false;

  if (isTurnedOn) {
    const { stack } = new Error();
    const [functionName, filePathString] = stack.split(' ')
      .filter(e => !['', 'at',].includes(e))
      .slice(3);
    const [filePath, line] = filePathString
      .replace('\n', '')
      .replace(')', '')
      .replace('(', '')
      .split(':')

    console.log('-------- C I M E X --------');
    console.log(`PATH     : ${filePath}`);
    console.log(`LINE     : ${line}`);
    console.log(`FUNCTION : ${functionName}`);
    console.log(`MESSAGE  : ${message}`);
    console.log('---------------------------');
  }

};

export default cimex;