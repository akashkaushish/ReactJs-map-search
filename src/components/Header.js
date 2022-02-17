import React from 'react'; 

function Header()
{
    return (  <>
                <header className="header">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="img-fluid navbar-brand" alt="Marquerie" />
                        </div>
                    </nav>
                </header>  
            </>
        );
}
    
export default Header;