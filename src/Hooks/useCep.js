import { useEffect, useState } from "react"

export const useCep = (cep) => {
    const [ endereco, setEndereco ] = useState({});

    function fetchCEP(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(dados => dados.json())
        .then(endereco => {
            setEndereco(endereco);
        })
    }

    useEffect(() => {
        fetchCEP(cep);
    })    

    return endereco;
}