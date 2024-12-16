export default function Post() {
    const post = [

        { usuario: "meowed", imagemUsuario: "assets/img/meowed.svg", imgPost: "assets/img/gato-telefone.svg" },
        { usuario: "barked", imagemUsuario: "assets/img/barked.svg", imgPost: "assets/img/dog.svg" },
        

    ]

    return (
        <div class="post">
            <div class="topo">

                {post.map(post => <Usuario nome={post.usuario} foto={post.imagemUsuario}/>)}

                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <Conteudo foto={post.imgPost} />
           
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}


function Usuario(props) {
    return (

        <div class="usuario">
            <img src={props.foto} alt="meowed" />
            {props.nome}
        </div>

    )
}


function Conteudo(props){
    return(
        <div class="conteudo">
        <img src={props.foto} alt="gato-telefone" />
    </div>

        
    )
}