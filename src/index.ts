import "reflect-metadata"; // Help us to use decorators 
import express from "express"; // Import express to use it as a server
import sequelize from "./config/db"; // Import sequelize so the router can syncronice with the db
import router from "./routes/Router"; // Import router that brings the routes of the entities

const app = express(); // app is going to be use as our server
app.use(express.json()); // app is going to use express.json() so express can response whit a js object
app.use("/api", router); // we define api as the midelware betweet the main root and the db

const startServer = async () => { // We define this fuction as the conetion with the server and initialization
  try {
    await sequelize.authenticate(); // the function wait to connect first with the db
    console.log("Database connected!");
    await sequelize.sync(); // then sync the status of the data on the code with the db and update it
    app.listen(3000, () => { // Server is going to listen all the changes that happens in the port 3000
      console.log("Server started on port 3000");
    });
  } catch (error) { // If there is an error conecting with the database is going to show an error
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
