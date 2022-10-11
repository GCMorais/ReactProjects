import React from 'react';
import "./Style.css";

function Menu(){
    return(
        <div className='MenuArea'>
            <h1>example</h1>
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Projetos</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;