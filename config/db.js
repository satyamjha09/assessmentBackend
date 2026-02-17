const mongoose = require("mongoose");

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGO_URL)
              .then(() => console.log("Mongodb connected ❤️❤️❤️❤️❤️ "))
              .catch((error) => console.error("Error", error))
        

    } catch(error) {
        console.error(error.message)
        process.exit(0)

    }

}

module.exports = connectDB