import { useState } from "react";

export const useCep = () => {
    const [endereco, setEndereco] = useState({});
    const [cepEndereco, setCepEndereco] = useState('');
  
    const handleChange = (e) => {
        setCepEndereco(e.target.value);
    };
   
    const handleClickCep = () => {
        if (cepEndereco.trim() !== '') {
            fetch(`https://viacep.com.br/ws/${cepEndereco}/json/`)
            .then((response) => response.json())
            .then((data) => {
                if (!data.erro) {
                setEndereco(data);
                } else {
                setEndereco({});
                }
            })
            .catch((error) => {
                console.error(error);
                setEndereco({});
            });
        }
    };
  
    return {
        endereco,
        cepEndereco,
        handleChange,
        handleClickCep,
    };
}