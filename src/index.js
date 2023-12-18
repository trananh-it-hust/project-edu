import app from "./app.js";

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`Sever is running ${PORT}`);
});
process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Exit Server Express`);
  });
});
