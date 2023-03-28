const express = require('express');
const renderService = require('../services/render.service');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/', renderService.home);

router.get('/add-student', renderService.add);
router.get('/update-student', renderService.update);
router.get('/delete-student', renderService.delete);

// API
router.post('/api/students', controller.insert);
router.get('/api/students', controller.find);
router.post('/api/students/:id', controller.update);
router.delete('/api/students', controller.delete);

module.exports = router;
