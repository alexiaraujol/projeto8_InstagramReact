import React from "react";

export default function User(){

  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");


  function inserirNome(){
    const nomeDigitado = prompt("Digite o seu nickname: ");
    setNome(nomeDigitado);
  }

  function inserirImagem(){
    const imagemAnexada = prompt("Insira o link da imagem: ");
    setImagem(imagemAnexada);
  }

    return(
        <div className="usuario">
          <img onClick={inserirImagem} src={!imagem ? "assets/img/catanacomics.svg" : `${imagem}`} alt="imagem de perfil"/>
          <div className="texto">
            <span>
              <strong>{!nome ? "catanacomics" : `${nome}`}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}