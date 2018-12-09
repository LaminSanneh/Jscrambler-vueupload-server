const express = require('express');
const router = express.Router();
const fileService = require('../services/file.service.js');
const app = express();

router.get('/files', fileService.getAll);
const options = fileService.getFileOptions();
const multer = require('multer')(options);

router.post('/upload', multer.any(), fileService.uploadFile);

router.delete('/files/:id', fileService.deleteFile);

module.exports = router;
