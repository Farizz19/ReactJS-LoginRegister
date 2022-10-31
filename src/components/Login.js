import './style.css';
import { Link } from 'react-router-dom';
import Register from './Register';

const Login = () => {
    return(
      <div id='login' class="container">
      <div class="form">
        <div id='jdl' class="btn">
        <Link to='/Register' class="signUpBtn">SIGN UP</Link>
          <Link to='/' class="loginBtn">LOG IN</Link>
        </div>
        <form class="pp"/>
        <div class="formGroup">
        <h4>Sign In</h4>
          </div>
          <div class="formGroup form-floating">
            <input type="email" placeholder="Alamat Email" name="email" required autocomplete="off"/>
          </div>
          <div class="formGroup">
            <input type="password" id="password" placeholder="Kata Sandi" required autocomplete="off"/>
          </div>
          <div class="checkBox">
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <span class="text">Ingat saya</span>
          </div>
          <div class="formGroup">
            <button type="button" class="btn2">MASUK</button>
          </div>
          </div>
          </div>
)
}

export default Login;