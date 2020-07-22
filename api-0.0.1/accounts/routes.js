const express = require('express');
const router = express.Router();

const { getAllAccounts, createAccount } = require('./handlers');

const id = '5f151af075a54319f461b775';

router.get('/', getAllAccounts);
router.post('/', createAccount);

module.exports = router;
