import express from 'express';
import Category from './routes/categories.router.js'

const app = express();
const PORT = 3030

app.use(express.json());

app.use('/category', Category)

app.listen(PORT, () => {
    console.log(PORT, '포트로 서버가 열렸어요!');
  });