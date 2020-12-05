import express from "express";
module.exports = express().get(
  "/hello",
  (_req: express.Request, res: express.Response) => res.send("ok")
);
