import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate= useNavigate();
    const authenticate=()=>{
        navigate("/dash");
    }

    const [uname, setUname] = useState("");
    const [passwrd, setpasswrd] = useState("");
    const [error, setError] = useState("");

    const name="admin";
    const pwd= "admin";
    const verifyLogin =()=>{
        if (uname === name && passwrd === pwd){
            setError("");
            alert('Login Successful');
            authenticate();
        }else{
            setError("Invalid Username or Password");
        }
    }


    return (
        <div>
            <h1 align="center">Login Here</h1>

            <table>
                <tbody>
                    <tr>
                        <td>Username : </td>
                        <td>
                            <input type="text" name="username" value={uname} onChange={(e) => setUname(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td>
                            <input type="password" name="password" value={passwrd} onChange={(e) => setpasswrd(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button variant="primary" onClick={verifyLogin}>Login</Button>
            {error && <div>{error}</div>}
        </div>
    );
}