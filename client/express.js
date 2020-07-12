const express = require('express');
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(PORT, HOST, () => {
  console.log(`Express web server started: http://localhost:${PORT}`);
  console.log(`Serving content from /${sourceDir}/`);
});
