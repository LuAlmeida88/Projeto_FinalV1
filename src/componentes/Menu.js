import React from 'react'
import {Link} from 'react-router-dom'

function Menu (props){
    return(

        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
        <a className ='navbar-brand' href='index.php'> <i className='fas fa-laptop-code'></i> Fullstackeletro</a>
        <button class='navbar-toggler' type ='button' data-toggle='collapse' data-target='#navbarSite' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSite'>
           
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                    <Link to ='/' className ='text-white'> Página Inicial <span className='sr-only'>(current)</span></Link>
                </li>

                <li className='nav-item active'>
                <Link to ='/Produtos' className ='text-white'>Nossos Produtos</Link>
                </li>

                <li className='nav-item active'>
                    <Link to ='/Lojas' className ='text-white'>Nossas Lojas</Link>
                </li>

                <li className='nav-item active'>
                <Link to ='/Contato' className ='text-white'>Fale conosco</Link>
                </li>

            </ul>
        </div>
    </div>

    </nav>

    );
}

export default Menu