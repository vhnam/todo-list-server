const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const mockData = require("./db.json");

const router = jsonServer.router(mockData);
const server = jsonServer.create();

server.use("/static", express.static(path.join(__dirname, "public")));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(router);

server.listen(5000);
