const express = require('express');
const {
  createBootcamp,
  getBootcamp,
  getBootcamps,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router
  .route('/')
  .post(createBootcamp)
  .get(getBootcamps);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
