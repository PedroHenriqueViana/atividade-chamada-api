var token;

async function testarChamadaGET() {
    var response = await fetch("https://cdb-todolist-api.herokuapp.com/v1");
    var jsonResponse = await response.json();

    var h2 = document.getElementById("resultado-get");
    h2.innerHTML = jsonResponse.title + " - " + jsonResponse.description;
}

async function fazerLoginNaAPI() {
    var body = {
        email: "caio.campsv@gmail.com",
        password: "tabmedia@2021"
    };

    var respostaAPI = await fetch("https://cdb-todolist-api.herokuapp.com/v1/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    });

    var respostaJSON = await respostaAPI.json();

    if (respostaAPI.status === 200) {
        var h2 = document.getElementById("resultado-login");
        h2.innerHTML = respostaJSON.name;

        token = respostaJSON.token;
    } else {
        alert(respostaJSON.message);
    }
}

async function buscarTarefasNaAPI() {
    var respostaAPI = await fetch("https://cdb-todolist-api.herokuapp.com/v1/todos", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        }
    });

    if (respostaAPI.status === 200) {
        var respostaJSON = await respostaAPI.json();

        var listaDeTarefas = document.getElementById("lista-de-tarefas");
        listaDeTarefas.innerHTML = "";

        console.log(respostaJSON);

        for (var contador = 0; contador < respostaJSON.length; contador++) {

            var novoItem = document.createElement("li");
            novoItem.innerHTML = respostaJSON[contador].title;

            listaDeTarefas.appendChild(novoItem);
        }

    } else {
        alert(respostaJSON.message);
    }
}