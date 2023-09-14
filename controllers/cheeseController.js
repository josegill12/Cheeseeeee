const express = require('express');  
const Cheese = require('../models/cheese');
const router = express.Router();

// Path: controllers/cheeseController.js
// Index Route
router.get("/", async (req, res) => {
    try {
        res.json(await Cheese.find(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create Route
router.post("/", async (req, res) => {
    try {
        res.json(await Cheese.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }   
});

// Show Route
router.get("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Update Route 
router.put("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true }));

    } catch (error) {
        res.status(400).json(error);
    }

});


// Delete Route
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;