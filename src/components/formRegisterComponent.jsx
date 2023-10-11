import React from "react";
import { useState } from "react";

const FormRegisterComponent = () =>{
    
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        senha: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados preenchidos:', formData);
      };  
       
    return(
        <div>
            <form onSubmit={handleSubmit} className="FormRegisterStyle">
                <ul>
                    <li className="FormRegisterItem">
                        <label htmlFor="nome">
                            Seu nome:
                        </label>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={formData.nome}
                            name="nome"
                            onChange={handleChange}
                        />
                    </li>
                    <li className="FormRegisterItem">
                        <label htmlFor="idade">
                            Sua idade:
                        </label>
                        <input
                            type="number"
                            placeholder="Idade"
                            value={formData.idade}               
                            name="idade"             
                            onChange={handleChange}
                        />
                    </li>
                    <li className="FormRegisterItem">
                        <label htmlFor="senha">
                            Crie uma senha:
                        </label>
                        <input
                            type="password"
                            placeholder="Senha"
                            value={formData.senha}                            
                            onChange={handleChange}   
                            name="senha"
                            autoComplete="off"                                                    
                        />
                    </li>
                </ul>
                <div className="FormRegisterBtnAlign">
                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
} 

export default FormRegisterComponent;