import express from 'express';

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is the GET employee route'})
});

router.post('/', (req, res) => {
  res.json({ message: 'This is the POST employee route, a new employee was added'})
});

router.put('/', (req, res) => {
  res.json({ message: 'This is the PUT employee route, an  employee was fully updated'})
});

router.patch('/', (req, res) => {
  res.json({ message: 'This is the PATCH employee route, an employee was partially updated'})
});

router.delete('/', (req, res) => {
  res.json({ message: 'This is the DELETE employee route, an employee was removed'})
});

export default router;