class Post {
    constructor(titulo, subtitulo, autor, fraseIntroducao, conteudo) {
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.autor = autor
        this.fraseIntroducao = fraseIntroducao
        this.conteudo = conteudo
        }
    }

    let publicacao1 = new Post(titulo, subtitulo, autor, introd, conteudo)

    function publicarPost() {
        let titulo = document.getElementById("titulo").value
        let subtitulo = document.getElementById("subtitulo").value
        let autor = document.getElementById("autor").value
        let introd = document.getElementById("introd").value
        let conteudo = document.getElementById("conteudo").value
        
        console.log(publicacao1)
    }