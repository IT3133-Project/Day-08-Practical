import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Login() {
    const [uname, setUname] = useState("");
    const [passwrd, setpasswrd] = useState("");
    return (
        <div>
            <h1 align="center">Login Here</h1>

            <table align="center">
                <tbody align="center">
                    <tr>
                        <td>Username : </td>
                        <td> <input type="text" name="username" value={uname} /> </td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td> <input type="password" name="password" value={passwrd} /> </td>
                    </tr>
                    <Button align="center">Login</Button>
                </tbody>
            </table>
        </div>
    );
}