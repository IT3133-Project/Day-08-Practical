import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import { Routes, Route, Link } from 'react-router-dom';
import '../assets/css/dashboard.css'


export default function Dashboard() {
    return (
        <div>
            <h1>Hello User</h1>
            <div>

                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/home" element={<Home/>}> </Route>
                    <Route path="/about" element={<AboutUs/>}> </Route>
                    <Route path="/contact" element={<ContactUs/>}> </Route>
                </Routes>



            </div>
        </div>
    );
}