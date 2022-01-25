import React from "react";

function Footer(){
    const currYear=new Date().getFullYear();
    return(
        <Footer>
            <p>Copyright ⓒ {currYear}</p>
        </Footer>
    );
}

export default Footer;