import React from 'react'

function Rodape (props){
    return(

        <footer className='page footer  bg-dark'>

            <div className='bg-success'>
                <div className='container'>
                    <div className='row py-4 d-flex align-item-center'>

                        <div className='col-md-12 text-center'>

                            <a href='#'><i className='fab fa-facebook text-white mr-4'></i></a>
                            <a  href='#'><i className='fab fa-twitter text-white mr-4'></i></a>
                            <a  href='#'><i className='fab fa-google-plus-g text-white mr-4'></i></a>
                            <a  href='#'><i className='fab fa-instagram text-white'></i></a>
                            <h6 class='text-white'> &copy; Recode Pro 2020</h6>
                            
                            
                        </div>

                    </div>
                </div>
            </div>
 </footer>
            
       
            
       
    );
}
export default Rodape
