export default function Sugestao() {

    const sugestoes = [
        { nome: "bad.vibes.memes ", foto: "assets/img/bad.vibes.memes.svg" },
        { nome: "chibirdart ", foto: "assets/img/chibirdart.svg" },
        { nome: "razoesparaacreditar ", foto: "assets/img/razoesparaacreditar.svg" },
        { nome: "adorable_animals ", foto: "assets/img/adorable_animals.svg" },
        { nome: "smallcutecats ", foto: "assets/img/smallcutecats.svg" }
    ]

    return (
       
            <div class="sugestoes">
                {sugestoes.map( sugestoes => <Seguirusuario usuario ={sugestoes.nome} imagem={sugestoes.foto} />)}
                
            </div>
        

    )

}


function Seguirusuario(props){

    return(
        <div class="sugestao">
            <div class="usuario">
                    <img src={props.imagem} alt={props.usuario} />
                    <div class="texto">
                        <div class="nome">{props.usuario}</div>
                        <div class="razao">Segue você</div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>
        </div>
    )


}