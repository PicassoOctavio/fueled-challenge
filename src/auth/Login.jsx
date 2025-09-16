import { useAuthStore } from '../hooks/useAuthStore';
import { useForm } from '../hooks/useForm';
import './Login.css'

const loginFormFields = {
  username: '',
  password: ''
}

export const Login = () => {

  const { startLogin } = useAuthStore()
  const { username, password, onChange } = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault()
    startLogin({username, password});
  }

  return (
    <>
      <h1>
        Login
      </h1>

      <div class="login">
        {/* Connect this form with the WP JWT API */}
        <form method="post" onSubmit={loginSubmit}>
          <div>
            <label for="username">Username</label>
            <input id="username" type="text" name="username" value={username} onChange={onChange} />
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" value={password} onChange={onChange} />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  )
}
