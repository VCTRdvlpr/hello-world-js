import React from "react";

const LoginComponent = () =>{
    return(
        <div>
            <form className="LoginStyle">
                <ul>
                    <li className="LoginItem">
                        <label htmlFor="email">
                            E-mail cadastrado:
                        </label>
                        <input
                            type="email"
                            placeholder="E-mail"
                        />
                    </li>
                    <li className="LoginItem">
                        <label htmlFor="senha">
                            Senha cadastrada:
                        </label>
                        <input
                            type="password"
                            placeholder="Senha"
                            autoComplete="current-password"
                        />
                    </li>
                </ul>
                <div className="LoginBtnAlign">
                    <button>
                        Login
                    </button>
                </div>
            </form>                     
        </div>
    );
}

export default LoginComponent;