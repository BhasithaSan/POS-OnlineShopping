import React from 'react'

const Login = () => {
  return (
    <div>
      <label For="userName">UserName
        <input type="text" id="userName"/>
      </label>

      <label For="password">Password
        <input type="text" id="password"/>
      </label>
      <a href="/Register">Havent you Signed UP yet ? Click this link</a>
      
      

    </div>
  )
}

export default Login