import axios from "axios"
 
const userRegisterService=(employeeId,employeeName,password)=>{

let response;

axios.post('/api/userRegister', {

    Id:employeeId,
    name: employeeName,
    password: password
  })
  .then((response)=>response)
  .catch(function (error) {
    console.log(error);
  });

  return response

}

export default userRegisterService