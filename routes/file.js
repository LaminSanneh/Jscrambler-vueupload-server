const express = require('express');
const router = express.Router();
const fileService = require('../services/file.service.js');

router.get('/download/:name', fileService.downloadFile);

module.exports = router;