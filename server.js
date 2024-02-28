import app from "./app.js";

const port = process.env.PORT || 3000;

const startServer = () => {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
};

startServer();
