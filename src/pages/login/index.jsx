import { useState } from 'react';

import { Link } from 'react-router-dom'

export const Login = () => { 

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form">
            <span className="login-form-title">Bem Vindo!</span>
            <span className="login-form-title">
              <img src="" alt="" />
            </span>


            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-vel input' : 'input' }
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-value input' : 'input'} 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>


            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta ?</span>
              <Link href="#" className="txt2">Criar Conta</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
    )
}