
class CadastroDespesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    } 
}

let publicacaoDespesa = new CadastroDespesa(valor, tipo, descricao)
let conteudoDespesa = []

function publicaDespesa() {
    let valor = document.getElementById("valor").value
    let tipo = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value

    console.log(publicacaoDespesa)

    conteudoDespesa = [document.getElementById("valor").value, document.getElementById("tipo").value, document.getElementById("descricao").value]
    
    console.log(conteudoDespesa)

    if(valor !== "" && tipo !== "" && descricao !== ""){
        let despesa = document.querySelector("#despesa")
        despesa.innerHTML += "<li>" + conteudoDespesa + "</li>"
        document.getElementById("valor").value = ""
        document.getElementById("tipo").value = ""
        document.getElementById("descricao").value = ""

    }else{
        alert("Atenção! É obrigatório o preenchimento de TODOS os campos!")
    }


}

// let filtroDespesa = () => {


//     if(valor !== "" && tipo !== "" && descricao !== ""){
//         document.getElementById("tipo").value = ""
//         document.getElementById("valor-minimo").value = ""
//         document.getElementById("valor-maximo").value = ""
//     }else{
//         alert("Atenção! É obrigatório o preenchimento de TODOS os campos para filtrar!")
//     }
// }

