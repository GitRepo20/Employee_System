const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//require("C:/Users/user/Angular8Client/src/app/routes/tutorials.routes")(app);
 //app.listen();

var corsOption = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) => {
  res.json({message:"welcome to angular application"});
});


const PORT = process.env.PORT || 8080;
app.listen(PORT,() =>{
  console.log(`Server is running on port ${PORT}.`);

  const db = require("C:/Users/user/Angular8Client/src/app/model");
  db.sequelize.sync({force: true}).then(() =>{
    console.log("Drop and re-sync db.");
  });
  
});
