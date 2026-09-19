const campos = document.querySelectorAll("input");

campos.forEach((campo, indice) => {

    campo.value = localStorage.getItem("materia" + indice) || "";

    campo.addEventListener("input", () => {

        localStorage.setItem(
            "materia" + indice,
            campo.value
        );

    });

});


function limparHorario() {

    if (confirm("Deseja apagar todas as matérias?")) {

        campos.forEach((campo, indice) => {

            localStorage.removeItem("materia" + indice);

            campo.value = "";

        });

    }

}