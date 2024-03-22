import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home-screen";
import About from "../pages/about";
import Contact from "../pages/contact";
import Settings from "../pages/settings";
import ProductDetail from "../pages/productdetail";




export const MessageInfo = createContext()

const NavigationStack = () => {
   
    const [Message, setMessage] = useState("data transferd")

const ChangeMessage=()=>{
    setMessage("data not transfer")
}
    return ( 
    
        <BrowserRouter>
            <MessageInfo.Provider value={{

                    Message,
                    greetings:"congrats",
                     messageChanger:ChangeMessage
                }}>

            <Routes>
                {/* list of routes in the app */}
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/setting" element={<Settings/>} />

                <Route path="/:category/:product" element={<ProductDetail/>}/>


            </Routes>
            </MessageInfo.Provider>
        </BrowserRouter>
    )
}
export default NavigationStack

