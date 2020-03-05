import React,{useState} from 'react'

function Login() {
    const [user,setUser]= useState(
        {
            
            email:"",
            password:"",
           
        });
        const {name,email,password, password2}=user;
        const onChange=(e)=>setUser({...user, [e.target.name]:e.target.value})
        const onSubmit=(e)=>{
            e.preventDefault();
            console.log("Register user")
        }
    return (
        <div className="form-container">
            <h2>
            Account <span className="text-primary">Login</span>
            </h2>
            <form>
               
                <div className="form-group">
                    <label htmlFor ="email">Email</label>
                    <input type="text" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor ="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange}/>
                </div>                                
                
                <input type="submit" value="Login" className="btn btn-block btn-primary"/>                 
            </form>
        </div>
    )
}

export default Login
