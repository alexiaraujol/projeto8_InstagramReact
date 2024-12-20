export default function Suggestion () {

    const sugestoes = [
        { nome: "bad.vibes.memes ", foto: "assets/img/bad.vibes.memes.svg" },
        { nome: "chibirdart ", foto: "assets/img/chibirdart.svg" },
        { nome: "razoesparaacreditar ", foto: "assets/img/razoesparaacreditar.svg" },
        { nome: "adorable_animals ", foto: "assets/img/adorable_animals.svg" },
        { nome: "smallcutecats ", foto: "assets/img/smallcutecats.svg" }
    ]
  
    return (
       
            <div className="sugestoes">
                {sugestoes.map( sugestoes => <Seguirusuario usuario ={sugestoes.nome} imagem={sugestoes.foto} key={sugestoes.nome} />)}
                
            </div>
        
  
    )
  
  }
  
  
  function Seguirusuario(props){
  
    return(
        <div className="sugestao">
            <div className="usuario">
                    <img src={props.imagem} alt={props.usuario} />
                    <div className="texto">
                        <div className="nome">{props.usuario}</div>
                        <div className="razao">Segue você</div>
                    </div>
                    <div className="seguir">Seguir</div>
                </div>
        </div>
    )
  
  
  }