function verNome(){
    nome = document.getElementById("nome").value;
    result = ""
    switch(nome.toLowerCase()){
        case 'amanda':
        case 'mor':
            result = nome + " (Amanda), te amo <3"
            break
        case 'jorje':
        case 'george':
            result = nome + ", SEU MERDA!"
            break
        case 'giovanni':
            result = nome + ", obrigado pela ajuda :D"
            break
        case 'amor':
            result = 'Amor só se vc for a amanda'
            break
        case 'andre':
        case 'andré':
            result = "Para de mentir"
            break
        case 'guilherme':
            result = nome + ", tamo junto bro!"
            break
        case 'eduardo':
        case 'dudu':
            result = nome + ", tamo junto bro! Mas para de zoar meu mozao"
            break
        default:
            result = nome + ", você é irrelevante"
    }

    document.getElementById('resultado').innerHTML = result

   
    return false;
}

function cabeca(){
    document.getElementById('cabeca').innerHTML = "<h1>Me diga seu nome:</h1>"
}

function header(){
    document.getElementById('head').innerHTML = 
        `<header>
            <h1 id="header"> GAMERPRIDE.COM </h1>
            <hr/>
        </header>`
}

function footer(){
    document.getElementById('footer').innerHTML = 
        `<footer>
            <hr />
            <p>Site criado para aprendizado</p>
            <p>Contato: <a href="mailto:andreacciolyl@hotmail.com">andreacciolyl@hotmail.com</a></p>
        </footer>`
}

function ler(){
    document.querySelectorAll("a").forEach(link =>{
       
       link.onclick = function(e){
           console.log("clicou")
           e.preventDefault()
           const conteudo = document.getElementById('conteudo')
           fetch(link.href)
               .then(resp => resp.text())
               .then(html => conteudo.innerHTML = html)
       }
   })
}

function lista(){
    document.getElementById('lista').innerHTML = 
        `
        <span  wm-folder class = "jogo"> Jogos </span>
        <ul class="jogos">
            <li> <span wm-folder class = "jogo"> Corrida </span>
                <ul>
                    <li> Need for Speed </li>
                    <li> Burnout </li>
                </ul>
            </li>
            <li> <span wm-folder class = "jogo"> Gatos </span>
                <ul>
                    <li> Cat Quest </li>
                    <li> Cat Quest II </li>
                    <li> Tap Cats </li>
                </ul>
            </li>
        </ul>`
}

function hideLista(){
    document.querySelectorAll('[wm-folder]').forEach(folder=>{
        folder.onclick = function(e){
            const ul = folder.nextElementSibling
            console.log(ul)
            const disp = ul.style.display
            ul.style.display = disp === 'none' ? 'block' : 'none'
        }

    })
}