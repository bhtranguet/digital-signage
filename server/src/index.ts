import express from "express";
import ServerConfig from "../serverConfig";

const app = express();



app.listen(ServerConfig.port, () => {
  console.log("Server running at: https://localhost:" + ServerConfig.port);
})