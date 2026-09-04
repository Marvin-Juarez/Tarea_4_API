const express = require("express");

const app = express();
app.disable("x-powered-by");
const PORT = 3000;

app.use(express.json());

let tareas = [];

app.get("/tasks", (req, res) => {
    res.json(tareas);
});

app.get("/tasks/:id", (req, res) => {
    const id = Number.parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    res.json(tarea);
});

app.post("/tasks", (req, res) => {
    if (!req.body.titulo || req.body.titulo.trim() === "") {
        return res.status(400).json({
            mensaje: "El titulo es obligatorio"
        });
    }

    const nuevaTarea = {
        id: tareas.length + 1,
        titulo: req.body.titulo,
        completada: false
    };

    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.put("/tasks/:id", (req, res) => {
    const id = Number.parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    tarea.titulo = req.body.titulo ?? tarea.titulo;
    tarea.completada = req.body.completada ?? tarea.completada;

    res.json(tarea);
});

app.delete("/tasks/:id", (req, res) => {
    const id = Number.parseInt(req.params.id);
    const indice = tareas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({ mensaje: "Tarea no encontrada" });
    }

    tareas.splice(indice, 1);
    res.json({ mensaje: "Tarea eliminada" });
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});