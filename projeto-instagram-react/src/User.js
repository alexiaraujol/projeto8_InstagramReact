import React from "react";

export default function User(){

  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");


  function inserirNome(){
    const nomeDigitado = prompt("Digite o seu nome: ");
    setNome(nomeDigitado);
  }

  function inserirImagem(){
    const imagemAnexada = prompt("Insira a sua imagem aqui: ");
    setImagem(imagemAnexada)
  }

    return(
        <div class="usuario">
          <img onClick={inserirImagem} src={!imagem ? "assets/img/catanacomics.svg" : `${imagem}`} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{!nome ? "catanacomics" : `${nome}`}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}