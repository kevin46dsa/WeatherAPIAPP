const express = require("express");
const app = express();
const configRoutes = require("./routes");
let port = 8080;



const whitelist = ["http://localhost:3000"]; //Refrence: https://www.codingdeft.com/posts/nodejs-react-cors-error/
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/public", static);
app.use(express.urlencoded({ extended: true }));

app.use("/users", (req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});



configRoutes(app);

app.listen(port, () => {
  console.log(`Your routes will be running on port http://localhost/${port}`);
});