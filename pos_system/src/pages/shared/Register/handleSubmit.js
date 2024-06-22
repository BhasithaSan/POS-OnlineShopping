import userRegisterServices from "../../../Services/userRegisterServices"

// e.preventDefault()
const handleSubmit=(Id,name,password,setResponse,navigate)=>{

// let res=userRegisterServices(Id,name,password);

 let res=true;
(res)? setResponse(true):setResponse(false);
console.log("kkkk");
setTimeout(()=>{
    console.log("kkkk");
    navigate('/login');
},500)




}

export default handleSubmit;