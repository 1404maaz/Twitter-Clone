const mongoose = require("mongoose");

class database {

    constructor() {
        this.connect();
    }

    
      connect() {

        mongoose.connect("mongodb+srv://maazahfarooqui:Farooqui%40007@twitterclonecluster.d7ibpz7.mongodb.net/")

        .then(() => {
            console.log("database connected successful");
        })
        .catch((err) => {
            console.log("database connected error " + err);
        })
      }
}

module.exports = new database();