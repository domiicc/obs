const data = [
    {
        semestre: "Primer Año - Primer Semestre",
        ramos: [
            { nombre: "Introducción a la Profesión", requisitos: [] },
            { nombre: "Química General y Orgánica", requisitos: [] },
            { nombre: "Biología Molecular de la Célula", requisitos: [] },
            { nombre: "Anatomía General", requisitos: [] },
            { nombre: "Taller de Desarrollo Personal", requisitos: [] },
        ],
    },
    {
        semestre: "Primer Año - Segundo Semestre",
        ramos: [
            { nombre: "Salud Pública", requisitos: [] },
            { nombre: "Promoción y Educación para la Salud I", requisitos: [] },
            { nombre: "Bioética y Aspectos Legales", requisitos: [] },
            { nombre: "Morfología Reproductiva", requisitos: ["Anatomía General"] },
            { nombre: "Bioquímica Clínica", requisitos: ["Química General y Orgánica", "Biología Molecular de la Célula"] },
            { nombre: "Psicología del Desarrollo", requisitos: [] },
            { nombre: "Inglés I", requisitos: [] },
        ],
    },
    {
        semestre: "Segundo Año - Primer Semestre",
        ramos: [
            { nombre: "Salud Familiar Comunitaria", requisitos: ["Salud Pública"] },
            { nombre: "Promoción y Educación para la Salud II", requisitos: ["Salud Pública", "Promoción y Educación para la Salud I"] },
            { nombre: "Epidemiología Clínica y Social", requisitos: ["Salud Pública"] },
            { nombre: "Desarrollo Embrio-Fetal", requisitos: ["Biología Molecular de la Célula", "Morfología Reproductiva"] },
            { nombre: "Fisiología", requisitos: ["Anatomía General", "Bioquímica Clínica"] },
            { nombre: "Microbiología y Parasitología Clínica", requisitos: ["Bioquímica Clínica"] },
            { nombre: "Bioestadística", requisitos: [] },
        ],
    },
    {
        semestre: "Segundo Año - Segundo Semestre",
        ramos: [
            { nombre: "Obstetricia I", requisitos: ["Salud Familiar Comunitaria", "Desarrollo Embrio-Fetal"] },
            { nombre: "Ginecología I", requisitos: ["Salud Familiar Comunitaria", "Desarrollo Embrio-Fetal"] },
            { nombre: "Neonatología I", requisitos: ["Salud Familiar Comunitaria", "Desarrollo Embrio-Fetal"] },
            { nombre: "Proceso de Atención de Enfermería", requisitos: ["Fisiología", "Microbiología y Parasitología Clínica"] },
            { nombre: "Farmacología General Gineco-Obstétrica", requisitos: ["Bioquímica Clínica"] },
            { nombre: "Fisiopatología", requisitos: ["Fisiología"] },
            { nombre: "Inglés II", requisitos: ["Inglés I"] },
        ],
    },
    {
        semestre: "Tercer Año - Primer Semestre",
        ramos: [
            { nombre: "Obstetricia II", requisitos: ["Obstetricia I", "Fisiopatología"] },
            { nombre: "Ginecología II", requisitos: ["Ginecología I", "Fisiopatología"] },
            { nombre: "Neonatología II", requisitos: ["Neonatología I", "Fisiopatología"] },
            { nombre: "Investigación en Salud I", requisitos: ["Bioestadística"] },
            { nombre: "Clínica: Proceso de Enfermería", requisitos: ["Promoción y Educación para la Salud II", "Proceso de Atención de Enfermería"] },
            { nombre: "Atención Primaria Obstétrica", requisitos: ["Promoción y Educación para la Salud II", "Obstetricia I"] },
        ],
    },
    {
        semestre: "Tercer Año - Segundo Semestre",
        ramos: [
            { nombre: "Investigación en Salud II", requisitos: ["Investigación en Salud I"] },
            { nombre: "Sexualidad y Sexología", requisitos: ["Ginecología II"] },
            { nombre: "Integración Profesional", requisitos: ["Obstetricia II", "Ginecología II", "Neonatología II"] },
            { nombre: "Psicología de la Mujer", requisitos: ["Psicología del Desarrollo"] },
            { nombre: "Enfermería Médico-Quirúrgica", requisitos: ["Clínica: Proceso de Enfermería"] },
            { nombre: "Atención Primaria Ginecológica", requisitos: ["Ginecología II", "Atención Primaria Obstétrica"] },
            { nombre: "Inglés III", requisitos: ["Inglés II"] },
        ],
    },
    {
        semestre: "Cuarto Año - Primer Semestre",
        ramos: [
            { nombre: "Proyecto de Licenciatura I", requisitos: ["Investigación en Salud II"] },
            { nombre: "Gestión en Salud I", requisitos: ["Atención Primaria Ginecológica"] },
            { nombre: "Clínica de Servicios Gineco-Obstétricos I", requisitos: ["Integración Profesional", "Atención Primaria Ginecológica"] },
            { nombre: "Clínica Neonatología I", requisitos: ["Neonatología II", "Integración Profesional"] },
            { nombre: "Proceso de Intervención Comunitaria", requisitos: ["Integración Profesional"] },
            { nombre: "Optativo de Formación General", requisitos: [] },
        ],
    },
    {
        semestre: "Cuarto Año - Segundo Semestre",
        ramos: [
            { nombre: "Proyecto de Licenciatura II", requisitos: ["Proyecto de Licenciatura I"] },
            { nombre: "Gestión en Salud II", requisitos: ["Gestión en Salud I"] },
            { nombre: "Clínica de Servicios Gineco-Obstétricos II", requisitos: ["Clínica de Servicios Gineco-Obstétricos I"] },
            { nombre: "Clínica en Neonatología II", requisitos: ["Clínica Neonatología I"] },
            { nombre: "Electivo de Formación I", requisitos: [] },
        ],
    },
    {
        semestre: "Quinto Año - Primer Semestre",
        ramos: [
            { nombre: "Gestión en Salud III", requisitos: ["Gestión en Salud II"] },
            { nombre: "Internado Intra Hospitalario", requisitos: ["Clínica de Servicios Gineco-Obstétricos II", "Clínica en Neonatología II"] },
            { nombre: "Internado de Atención Primaria y Comunitaria", requisitos: ["Proceso de Intervención Comunitaria"] },
            { nombre: "Electivo de Formación II", requisitos: [] },
        ],
    },
    {
        semestre: "Quinto Año - Segundo Semestre",
        ramos: [
            { nombre: "Internado Integral", requisitos: ["Optativo de Formación General", "Electivo de Formación I", "Gestión en Salud III", "Internado Intra Hospitalario", "Internado de Atención Primaria y Comunitaria", "Electivo de Formación II"] },
            { nombre: "Trabajo de Titulación", requisitos: [] },
            { nombre: "Examen de Título", requisitos: [] },
        ],
    },
];

const estadoRamos = {};
const indexRamos = {};

function inicializarIndices() {
    data.forEach(sem => {
        sem.ramos.forEach(ramo => {
            indexRamos[ramo.nombre] = ramo;
            estadoRamos[ramo.nombre] = "bloqueado";
        });
    });
}

function requisitosCumplidos(nombre) {
    const requisitos = indexRamos[nombre].requisitos;
    return requisitos.every(r => estadoRamos[r] === "aprobado");
}

function actualizarEstados() {
    for (const nombre in estadoRamos) {
        if (estadoRamos[nombre] !== "aprobado") {
            estadoRamos[nombre] = requisitosCumplidos(nombre) ? "desbloqueado" : "bloqueado";
        }
    }
}

function renderizarMalla() {
    const container = document.getElementById("malla-container");
    container.innerHTML = "";

    data.forEach(sem => {
        const divSem = document.createElement("div");
        divSem.className = "semestre";

        const titulo = document.createElement("h2");
        titulo.textContent = sem.semestre;
        divSem.appendChild(titulo);

        sem.ramos.forEach(ramo => {
            const divRamo = document.createElement("div");
            divRamo.className = "ramo " + estadoRamos[ramo.nombre];
            divRamo.textContent = ramo.nombre;

            if (estadoRamos[ramo.nombre] === "desbloqueado") {
                divRamo.addEventListener("click", () => aprobarRamo(ramo.nombre));
            } else if (estadoRamos[ramo.nombre] === "aprobado") {
                divRamo.addEventListener("click", () => desaprobarRamo(ramo.nombre));
            }

            divSem.appendChild(divRamo);
        });

        container.appendChild(divSem);
    });
}

function aprobarRamo(nombre) {
    estadoRamos[nombre] = "aprobado";
    guardarProgreso();
    actualizarEstados();
    renderizarMalla();
}

function desaprobarRamo(nombre) {
    estadoRamos[nombre] = "bloqueado";
    guardarProgreso();
    actualizarEstados();
    renderizarMalla();
}

function guardarProgreso() {
    localStorage.setItem("estadoMalla", JSON.stringify(estadoRamos));
}

function cargarProgreso() {
    const guardado = localStorage.getItem("estadoMalla");
    if (guardado) {
        const estadoGuardado = JSON.parse(guardado);
        for (const ramo in estadoGuardado) {
            estadoRamos[ramo] = estadoGuardado[ramo];
        }
    }
}

function iniciar() {
    inicializarIndices();
    cargarProgreso();
    actualizarEstados();
    renderizarMalla();
}

window.onload = iniciar;
