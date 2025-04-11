require('dotenv').config();
const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json()); 
const { v4: uuidv4 } = require("uuid"); 

app.get("/acceptCookie", (req, res) => {
    
    const guestUserId = uuidv4();
    res.cookie("cookieConsent", "true", { maxAge: 900000});
    res.cookie("guestUserId", guestUserId, {
      maxAge: 30 * 24 * 60 * 60 * 1000, 
      httpOnly: false,
      sameSite: "Lax",
    });
    res.status(200).json({ message: "Cookie consent accepted" });

    

})
app.get("/rejectCookie", (req, res) => {
    res.cookie("cookieConsent", "false", { maxAge: 900000 });
    res.status(200).json({ message: "Cookie consent rejected" });

})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
