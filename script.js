const data = [
    { semestre: "1° Semestre", ramos: ["Introducción a la Profesión", "Química General y Orgánica", "Biología Molecular de la Célula", "Anatomía General", "Taller de Desarrollo Personal"] },
    { semestre: "2° Semestre", ramos: ["Salud Pública", "Promoción y Educación para la Salud I", "Bioética y Aspectos Legales", "Morfología Reproductiva", "Bioquímica Clínica", "Psicología del Desarrollo", "Inglés I"] },
    { semestre: "3° Semestre", ramos: ["Salud Familiar Comunitaria", "Promoción y Educación para la Salud II", "Epidemiología Clínica y Social", "Desarrollo Embrio-Fetal", "Fisiología", "Microbiología y Parasitología Clínica", "Bioestadística"] },
    { semestre: "4° Semestre", ramos: ["Obstetricia I", "Ginecología I", "Neonatología I", "Proceso de Atención de Enfermería", "Farmacología General Gineco-Obstétrica", "Fisiopatología", "Inglés II"] },
    { semestre: "5° Semestre", ramos: ["Obstetricia II", "Ginecología II", "Neonatología II", "Investigación en Salud I", "Clínica: Proceso de Enfermería", "Atención Primaria Obstétrica"] },
    { semestre: "6° Semestre", ramos: ["Investigación en Salud II", "Sexualidad y Sexología", "Integración Profesional", "Psicología de la Mujer", "Enfermería Médico-Quirúrgica", "Atención Primaria Ginecológica", "Inglés III"] },
    { semestre: "7° Semestre", ramos: ["Proyecto de Licenciatura I", "Gestión en Salud I", "Clínica de Servicios Gineco-Obstétricos I", "Clínica Neonatología I", "Proceso de Intervención Comunitaria", "Optativo de Formación General"] },
    { semestre: "8° Semestre", ramos: ["Proyecto de Licenciatura II", "Gestión en Salud II", "Clínica de Servicios Gineco-Obstétricos II", "Clínica en Neonatología II", "Electivo de Formación I"] },
    { semestre: "9° Semestre", ramos: ["Gestión en Salud III", "Internado Intra Hospitalario", "Internado de Atención Primaria y Comunitaria", "Electivo de Formación II"] },
    { semestre: "10° Semestre", ramos: ["Internado Integral", "Trabajo de Titulación", "Examen de Título"] },
];

const estado = JSON.parse(localStorage.getItem("mallaEstado")) || {};

function guardarEstado() {
    localStorage.setItem("mallaEstado", JSON.stringify(estado));
}

function crearMalla() {
    const container = document.getElementById("malla-container");
    container.innerHTML = "";

    data.forEach(semestre => {
        const semDiv = document.createElement("div");
        semDiv.className = "semestre";

        const title = document.createElement("h2");
        title.textContent = semestre.semestre;
        semDiv.appendChild(title);

        semestre.ramos.forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo " + (estado[ramo] || "bloqueado");
            div.textContent = ramo;
            div.setAttribute("data-tooltip", "Haz click para marcar como aprobado o deshacer.");
            div.onclick = () => {
                if (estado[ramo] === "aprobado") {
                    estado[ramo] = "desbloqueado";
                } else {
                    estado[ramo] = "aprobado";
                }
                guardarEstado();
                crearMalla();
            };
            semDiv.appendChild(div);
        });

        container.appendChild(semDiv);
    });
}

window.onload = crearMalla;
