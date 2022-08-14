import { combineReducers } from "redux"
import Auth from "./Auth"
import Register from "./Register"


const rootReducers = combineReducers({
    auth: Auth,
    register: Register
})


export default rootReducers