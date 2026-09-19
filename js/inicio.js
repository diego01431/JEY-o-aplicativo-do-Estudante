let compromissos =
  JSON.parse(localStorage.getItem("compromissos")) || {};


for (let i = 1; i <= 30; i++) {

  let dia =
    document.getElementById("dia" + i);


  if (compromissos[i]) {
    dia.classList.add("marcado");
  }


  dia.onclick = function () {

    if (compromissos[i]) {

      let apagar = confirm(
        "Compromisso:\n\n" +
        compromissos[i] +
        "\n\nDeseja apagar este compromisso?"
      );


      if (apagar) {

        delete compromissos[i];

        localStorage.setItem(
          "compromissos",
          JSON.stringify(compromissos)
        );

        dia.classList.remove("marcado");

        alert("Compromisso removido!");
      }

    } else {

      alert("Nenhum compromisso");

    }

  };

}


function adicionarCompromisso() {

  let texto =
    document.getElementById("compromisso").value;


  let diaNumero =
    document.getElementById("diaInput").value;


  let dia =
    document.getElementById("dia" + diaNumero);


  if (dia && texto != "") {

    compromissos[diaNumero] = texto;


    localStorage.setItem(
      "compromissos",
      JSON.stringify(compromissos)
    );


    dia.classList.add("marcado");


    document.getElementById("compromisso").value = "";
    document.getElementById("diaInput").value = "";

  } else {

    alert("Preencha corretamente!");

  }

}