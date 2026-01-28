import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/result", async (req, res) => {
  try {
    const response = await axios.post(
      "https://gateway7.diu.edu.bd/api/student/public/check/result",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "Origin": "https://studentportal.diu.edu.bd",
          "Referer": "https://studentportal.diu.edu.bd/",
          "User-Agent": "Mozilla/5.0"
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Server error"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
