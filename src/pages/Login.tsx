import { FormEvent, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Input from '../components/Input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setJwtToken, setAlertMsg, setAlertClass } = useOutletContext()
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (email === 'abc@example.com') {
      setJwtToken('abc')
      setAlertClass('hidden')
      setAlertMsg('')
      navigate('/')
    } else {
      setAlertClass('flex justify-center w-full m-2 p-2 rounded-md text-black font-bold')
      setAlertMsg('Invalid email or password')
    }
  }

  return (
    <section className="flex flex-col w-full items-center">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <Input
          title="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Type your e-mail"
          autoComplete="email-new"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <Input
          title="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Type your e-mail"
          autoComplete="password-new"
          className="w-full border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="border mt-4 py-2 px-4 rounded-lg bg-blue-200">
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
