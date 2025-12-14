const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let courses = require("./data/db.json");

app.get("/api/courses", (req, res) => {
    res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const course = courses.find(c => c.cid === id);

    if (!course) {
        return res.status(404).json({ msg: "Course not found" });
    }

    res.json(course);
});

app.post("/api/courses", (req, res) => {
    const { cname, cdur } = req.body;

    const cid = courses.length
        ? courses[courses.length - 1].cid + 1
        : 1;

    const newCourse = { cid, cname, cdur };
    courses.push(newCourse);

    res.status(201).json(newCourse);
});

app.put("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    const { cname, cdur } = req.body;

    const course = courses.find(c => c.cid === id);

    if (!course) {
        return res.status(404).json({ msg: "Course not found" });
    }

    course.cname = cname;
    course.cdur = cdur;

    res.status(200).json(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const id = Number(req.params.id);
    courses = courses.filter(c => c.cid !== id);

    res.json({ msg: "Course deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
