import { createContext, useState } from "react";

export let UserContext = createContext('')

const UserContextProvider = ({children}) => {
    let [user, setUser] = useState({name: JSON.parse(localStorage.getItem('user'))?.name, email: JSON.parse(localStorage.getItem('user'))?.email, basket: []})
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}

export default UserContextProvider;