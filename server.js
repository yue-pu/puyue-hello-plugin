const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
  // 构建一个/hello的get方法
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
