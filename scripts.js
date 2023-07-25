function validarDatosPaciente(
  nombre,
  apellido,
  cedula,
  edad,
  tel,
  especialidad
) {
  const validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  const validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  const validarCedula = /[0-9]/g;
  const validarNumero = /^([0-9]{10})$/g;

  let validacion = 0;

  const validarCampo = (valor, regex, campo) => {
    if (!regex.test(valor)) {
      const elemento = document.getElementById(campo);
      elemento.classList.add("warning");
      alert(`Ingrese un ${campo} válido`);
      validacion++;
    } else {
      const elemento = document.getElementById(campo);
      elemento.classList.remove("warning");
    }
  };

  validarCampo(nombre, validarNombre, "nombre");
  validarCampo(apellido, validarApellido, "apellido");
  validarCampo(cedula, validarCedula, "cedula");

  if (isNaN(edad) || edad < 1) {
    alert("Ingrese una fecha de nacimiento válida");
    validacion++;
  }

  validarCampo(tel, validarNumero, "tel");

  if (especialidad === "especialidad") {
    alert("Ingrese una especialidad válida");
    validacion++;
  }

  return validacion;
}

function validarDatosDoctor(
  nombre,
  apellido,
  cedula,
  especialidad,
  consultorio,
  email
) {
  const validarNombre = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  const validarApellido = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
  const validarCedula = /[0-9]/g;
  const validarConsultorio = /^([0-9]{3})$/g;
  const validarCorreo =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;

  let validacion = 0;

  const validarCampo = (valor, regex, campo) => {
    if (!regex.test(valor)) {
      const elemento = document.getElementById(campo);
      elemento.classList.add("warning");
      alert(`Ingrese un ${campo} válido`);
      validacion++;
    } else {
      const elemento = document.getElementById(campo);
      elemento.classList.remove("warning");
    }
  };

  validarCampo(nombre, validarNombre, "nombre-doctor");
  validarCampo(apellido, validarApellido, "apellido-doctor");
  validarCampo(cedula, validarCedula, "cedula-doctor");
  validarCampo(consultorio, validarConsultorio, "consultorio");
  validarCampo(email, validarCorreo, "email");

  if (especialidad === "especialidad") {
    alert("Ingrese una especialidad válida");
    validacion++;
  }

  return validacion;
}

function datosPaciente() {
  const botonEnviar = document.getElementById("boton-envio");
  const pacientes = [];

  let i = 0;

  botonEnviar.addEventListener("click", () => {
    i++;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cedula = document.getElementById("cedula").value;
    const edad =
      new Date().getFullYear() -
      new Date(document.getElementById("edad").value).getFullYear();
    const tel = document.getElementById("tel").value;
    const especialidad = document.getElementById("especialidad").value;

    const validacion = validarDatosPaciente(
      nombre,
      apellido,
      cedula,
      edad,
      tel,
      especialidad
    );

    if (validacion === 0) {
      alert("Datos subidos correctamente");

      const paciente = {
        nombre,
        apellido,
        cedula,
        edad,
        tel,
        especialidad,
      };

      pacientes.push(paciente);

      const botonPacientesDatos = document.createElement("input");
      botonPacientesDatos.id = "boton-paciente";
      botonPacientesDatos.className = "boton-paciente";
      botonPacientesDatos.type = "button";
      botonPacientesDatos.value = "Ver Datos de Pacientes";

      botonPacientesDatos.style.display = "inline-block";
      botonPacientesDatos.style.width = "30%";
      botonPacientesDatos.style.height = "80px";
      botonPacientesDatos.style.margin = "20px 0px 0px 35%";

      document
        .getElementById("main")
        .appendChild(botonPacientesDatos)
        .scrollIntoView({ behavior: "smooth", block: "start" });

      if (i >= 2) {
        botonPacientesDatos.remove();
      }

      const botonVerDatos = document.getElementById("boton-paciente");
      botonVerDatos.addEventListener("click", () => {
        const datosPacientes = JSON.stringify(pacientes);
        alert("JSON Pacientes: \n " + datosPacientes);
        const contenedorDatosPacientes =
          document.getElementById("datos-pacientes");
        contenedorDatosPacientes.innerText =
          "Pacientes \n \n \n" + datosPacientes;
      });
    } else {
      document.getElementById("boton-paciente").remove();
    }
  });
}

function datosDoctor() {
  const botonEnviar = document.getElementById("boton-envio-doctor");
  const doctores = [];

  let i = 0;

  botonEnviar.addEventListener("click", () => {
    i++;
    const nombre = document.getElementById("nombre-doctor").value;
    const apellido = document.getElementById("apellido-doctor").value;
    const cedula = document.getElementById("cedula-doctor").value;
    const consultorio = document.getElementById("consultorio").value;
    const email = document.getElementById("email").value;
    const especialidad = document.getElementById("especialidad-doctor").value;

    const validacion = validarDatosDoctor(
      nombre,
      apellido,
      cedula,
      especialidad,
      consultorio,
      email
    );

    if (validacion === 0) {
      alert("Datos subidos correctamente");

      const doctor = {
        nombre,
        apellido,
        cedula,
        consultorio,
        email,
        especialidad,
      };
      doctores.push(doctor);

      const botonPacientesDatos = document.createElement("input");
      botonPacientesDatos.id = "boton-doctor";
      botonPacientesDatos.className = "boton-paciente";
      botonPacientesDatos.type = "button";
      botonPacientesDatos.value = "Ver Datos de Doctores";

      botonPacientesDatos.style.display = "inline-block";
      botonPacientesDatos.style.width = "30%";
      botonPacientesDatos.style.height = "80px";
      botonPacientesDatos.style.margin = "20px 0px 0px 35%";

      document
        .getElementById("main")
        .appendChild(botonPacientesDatos)
        .scrollIntoView({ behavior: "smooth", block: "start" });

      if (i >= 2) {
        botonPacientesDatos.remove();
      }

      const botonVerDatos = document.getElementById("boton-doctor");
      botonVerDatos.addEventListener("click", () => {
        const datosDoctores = JSON.stringify(doctores);
        alert("JSON Doctores: \n " + datosDoctores);
        const contenedorDatosDoctores =
          document.getElementById("datos-doctores");
        contenedorDatosDoctores.innerText = "Doctores \n \n \n" + datosDoctores;
      });
    } else {
      document.getElementById("boton-doctor").remove();
    }
  });
}

datosDoctor();
datosPaciente();
