function adicionaTarefa() {
    let input = document.querySelector("input")
    let select = document.querySelector("select")
    let novaTarefa = input.value
    let diaDaSemana = select.value
    
    

    if(novaTarefa === "") {
        alert("Por favor, insira uma tarefa para ser adicionada à sua lista")
    }

    else if(novaTarefa !== "") {
        if(diaDaSemana === "segunda") {
            let tarefas = document.querySelector("#seg")
            tarefas.innerHTML += "<li>" + novaTarefa +  " </li>" 
            input.value = ""
        }

        else if(diaDaSemana === "terca") {
            let tarefas = document.querySelector("#ter")
            tarefas.innerHTML += " <li>" + novaTarefa + " </li>"
            input.value = ""
        }

        else if(diaDaSemana === "quarta") {
            let tarefas = document.querySelector("#qua")
            tarefas.innerHTML += "<li>" + novaTarefa + " </li>"
            input.value = ""
        }

        else if(diaDaSemana === "quinta") {
            let tarefas = document.querySelector("#qui")
            tarefas.innerHTML += "<li>" + novaTarefa + " </li>"
            input.value = ""
        }

        else if(diaDaSemana === "sexta") {
            let tarefas = document.querySelector("#sex")
            tarefas.innerHTML += "<li>" + novaTarefa + " </li>"
            input.value = ""
        }

        else if(diaDaSemana === "sabado") {
            let tarefas = document.querySelector("#sab")
            tarefas.innerHTML += "<li>" + novaTarefa + " </li>"
            input.value = ""
        }
    
        else if(diaDaSemana === "domingo") {
            let tarefas = document.querySelector("#dom")
            tarefas.innerHTML += "<li>" + novaTarefa + " </li>"
            input.value = ""
        }
    }


}
    
    // switch(select) {
    //     case "Segunda-Feira":
    //     tarefas.innerHTML += document.getElementById("#seg")
    //     break;
            
    //     case "Terça-Feira":
    //     tarefas.innerHTML += document.getElementById("#ter")
    //     break;

    //     case "Quarta-Feira":
    //     tarefas.innerHTML += document.getElementById("#qua")
    //     break;

    //     case "Quinta-Feira":
    //     tarefas.innerHTML += document.getElementById("#qui")
    //     break

    //     case "Sexta-Feira":
    //     tarefas.innerHTML += document.getElementById("#sex")
    //     break;

    //     case "Sábado":
    //     tarefas.innerHTML += document.getElementById("#sab")
    //     break;

    //     case "Domingo":
    //     tarefas.innerHTML += document.getElementById("#dom")
    //     break;
    //     }    
    
    




