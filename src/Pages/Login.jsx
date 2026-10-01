import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit  = (e) =>{
    e.preventDefault()
  }


  return (
    <div className="flex items-center justify-center h-[80vh] border">
      <form action="" onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3 border p-8 ">
        <div className="flex flex-col">
          <label htmlFor="" className="font-medium">Email: </label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            className="border pl-3 rounded-md py-1 mt-1.5 "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="font-medium">Password: </label>
          <input
            type="text"
            placeholder="Enter Your Password"
            value={password}
            className="border pl-3 rounded-md py-1 mt-1.5"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center font-extrabold m-4">
          <Link to='/register'>
          Registration
          </Link>
        </div>  
      </form>
    </div>
  );
};

export default Login;
