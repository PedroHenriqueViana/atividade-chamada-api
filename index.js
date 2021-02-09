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
    /*
    Listagem das tarefas (to-dos)
    URL: https://cdb-todolist-api.herokuapp.com/v1/todos
    Method: GET
    Headers: Content-Type e x-access-token
    Resposta:
    [
        { 
            "_id": 1,
            "title": "Título da Tarefa",
            "done": false,
            "tags": [
                "teste", "atividade"
            ]
        },
        { 
            "_id": 2,
            "title": "Título da Tarefa 2",
            "done": true,
            "tags": [
                "outro"
            ]
        }
    ]
    */

    var respostaAPI = "aqui vai ser a sua requisição";
    var respostaJSON = "aqui vc vai transformar a resposta da sua requisição em um JSON"

    if (respostaAPI.status === 200) {
        var listaDeTarefas = document.getElementById("lista-de-tarefas");
        
        for (var contador = 0; contador < respostaJSON.length; contador++) {

            var novoItem = document.createElement("li");
            novoItem.innerHTML = "aqui seria legal vc pegar o título da tarefa";

            listaDeTarefas.appendChild(novoItem);
        }
    } else {
        alert(respostaJSON.message);
    }
}