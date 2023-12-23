import React, { useState } from 'react'
import AuthContext from './AuthContext'
const Authstate = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
  )
}

export default Authstate