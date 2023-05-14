import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import functions from 'firebase-functions';

import { export_account } from './src/adduser.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.post('/account-exports', export_account);

module.exports.api = functions.https.onRequest(app);
