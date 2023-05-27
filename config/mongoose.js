const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sagararor403:vrvJxWKPOs0GBUUl@cluster0.jsyfxgk.mongodb.net/?retryWrites=true&w=majority",
    {
      //   useCreateIndex: true,
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
