const { connect } = require("mongoose")

const uri = "mongodb+srv://varsha:6h1UtMeUgnXufzHv@cluster0.vytdw.mongodb.net/Brilliodb?retryWrites=true&w=majority"
connect(uri)
.then(() => console.log("MongoDB Connected!!!"))
.catch((err) => console.log(err))