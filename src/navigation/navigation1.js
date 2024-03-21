import productdetail from "../pages/productdetail"

const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../pages/home-screen")
const { default: About } = require("../pages/about")
const { default: Contact } = require("../pages/contact")
const { default: Settings } = require("../pages/settings")



const NavigationStack =()=>{
return(
    <BrowserRouter>
    <Routes>
        {/* list of routes in the app */}
        <Route   path="/"  Component={HomeScreen}/>
        <Route  path="/about"  Component={About}/>
        <Route path="/contact" Component={Contact}/>
        <Route path="/setting" Component={Settings}/>

        <Route path="/:category/:product" Component={productdetail}></Route>
    </Routes>
    </BrowserRouter>
)
}
export default NavigationStack

