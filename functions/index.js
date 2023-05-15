import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as functions from 'firebase-functions';
import http from 'http';

import { export_account } from './src/controllers/adduser.js';
import { checkUserExists } from './src/controllers/getuser.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

app.post('/account-exports', export_account)
app.get('/lists/76f5877f0b/members', checkUserExists)

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});


export const api = functions.https.onRequest(app);
