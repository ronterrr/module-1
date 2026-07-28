/*
Top navigation section of the page

import <name> from "<relative path>"
ensure before import its in the src directory
*/

import logo from "./assets/logo.png";

function Navigate(){
    return(
        <>
        <div>
            <img src={logo} height={'40px'}/>
            <h2>Navigation section</h2>
        </div>
        </>
    )
}

/*
export so that any other file can import the component
1. Default export component
*/

export default Navigate;