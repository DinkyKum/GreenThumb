const express = require("express");
const plantRouter = express.Router();
const Plant =require('../models/Plant');

plantRouter.get("/", async (req, res) => {
    try {
      const plants = await Plant.find();
      res.status(200).json(plants);
    } catch (error) {
      res.status(500).json({ message: "Error fetching plants", error });
    }
  })

plantRouter.get("/:id", async (req, res) => {
    try {
      const plant = await Plant.findById(req.params.id);
      if (!plant) return res.status(404).json({ message: "Plant not found" });
      res.status(200).json(plant);
    } catch (error) {
      res.status(500).json({ message: "Error fetching plant", error });
    }
  });

module.exports = plantRouter; 
