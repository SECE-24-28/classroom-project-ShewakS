const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mycourse").then(() => console.log("Connected successfully"))
.catch(err => console.log("Error:", err));

const mycourse = require("./model/CourseModel");

app.get("/api/courses"
    , async (req, res) => {
    try {
        const courses = await mycourse.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.post("/api/courses", async (req, res) => {
    try {
        const {title,duration} = req.body;
        const course = new mycourse({title,duration});
        await course.save();
        res.status(201).json(course);

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.put("/api/courses/:id", async (req, res) => {
    try {
        const updatedCourse = await mycourse.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({ msg: "Course Not Found" });
        }

        res.json(updatedCourse);

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.delete("/api/courses/:id", async (req, res) => {
    try {
        const course = await mycourse.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({ msg: "Course Not Found" });
        }

        res.json({ msg: "Course Deleted" });

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});


app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
