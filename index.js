const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use("/cv", (req, res)=>{
    res.download(path.join(__dirname, 'public/cv/cv.pdf'), 'cv_JoseRosales.pdf');
});

app.listen(app.get("port"), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});