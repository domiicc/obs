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