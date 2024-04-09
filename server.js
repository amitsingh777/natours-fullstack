const app = require('./app');

const listeningPortNumber = 8000;
const ipAddress = '127.0.0.1';

app.listen(listeningPortNumber, ipAddress, () => {
  console.log(
    `Listening at ${'http://' + ipAddress + ':' + listeningPortNumber}`
  );
});
