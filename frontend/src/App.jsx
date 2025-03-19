import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ChatPage from './pages/chat.jsx';
import AboutUs from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import AdminChatPage from './pages/AdminChat.jsx';
import AdminLoginPage from './pages/AdminLogin.jsx';
import ShipmentProgress from './pages/Shipment-Progress.jsx';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/adminchat" element={<AdminChatPage />} />
                <Route path="/adminlogin" element={<AdminLoginPage />} />
                <Route path="/shipment-progress" element={<ShipmentProgress />} />
            </Routes>
        </>
    );
}

export default App;
