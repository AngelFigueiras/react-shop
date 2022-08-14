import React from "react";

//encapsulamiento de lo que recibirá 
const Layout = ({children}) =>{
    return(
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;