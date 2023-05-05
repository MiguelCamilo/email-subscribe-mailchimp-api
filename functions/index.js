import functions from "firebase-functions";
import express from "express";
import cors from "cors";

import { export_account } from "./src/adduser.js";

const app = express();
app.use(cors())
app.use(express.json())

app.post('/account-exports', export_account)

export const api = functions.https.onRequest(app);
