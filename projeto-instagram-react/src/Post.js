export default function Post() {
    const post = [

        { usuario: "meowed", imagemUsuario: "assets/img/meowed.svg", imgPost: "assets/img/gato-telefone.svg" },
        { usuario: "barked", imagemUsuario: "assets/img/barked.svg", imgPost: "assets/img/dog.svg" },
        

    ]

    return (
        <div className="post">
            <div className="topo">

                {post.map(post => <Usuario nome={post.usuario} foto={post.imagemUsuario}/>)}

                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <Conteudo foto={post.imgPost} />
           
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}


function Usuario(props) {
    return (

        <div className="usuario">
            <img src={props.foto} alt="meowed" />
            {props.nome}
        </div>

    )
}


function Conteudo(props){
    return(
        <div className="conteudo">
        <img src={props.foto} alt="gato-telefone" />
    </div>

        
    )
}