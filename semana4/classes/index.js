class Post {
    constructor(titulo, subtitulo, autor, fraseIntroducao, conteudo) {
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.autor = autor
        this.fraseIntroducao = fraseIntroducao
        this.conteudo = conteudo
        }
    }

    let publicacao = new Post(titulo, subtitulo, autor, introd, conteudo)

    function publicarPost() {
        let titulo = document.getElementById("titulo").value
        let subtitulo = document.getElementById("subtitulo").value
        let autor = document.getElementById("autor").value
        let introd = document.getElementById("introd").value
        let conteudo = document.getElementById("conteudo").value
        
        console.log(publicacao)

        let conteudoPostagem = [document.getElementById("titulo").value, document.getElementById("subtitulo").value, document.getElementById("autor").value, document.getElementById("introd").value, document.getElementById("conteudo").value]

        console.log(conteudoPostagem)

        if(titulo !== "" && subtitulo !== "" && autor !== "" && introd !== "" && conteudo !== "") {
            document.getElementById("titulo").value = ""
            document.getElementById("subtitulo").value = ""
            document.getElementById("autor").value = ""
            document.getElementById("introd").value = ""
            document.getElementById("conteudo").value = ""
        }
        else {
            alert("É necessário que você digite todos os campos para enviar!")
        }   
        
    }
        
        function adicionarPublicacao() {
            // let tituloBlog = document.querySelector("#titulo")
            conteudoPostagem.innerHTML += "<h2>" + [0] + "</h2>"
    
        }
    

   