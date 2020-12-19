import React from 'react'

function Contato (props){
    return(
<div>
        <div className='container-fluid'>

            <div className='row pt-5'>
                <div className='col-12  my-5'>
                    <h1 className='display-5 text-success'><i className='fas fa-paper-plane'></i> Fale Conosco </h1>
                </div>
            </div>
        </div>

            

            <p className='faleconosco'>Oferecemos diversos canais de comunicação. Converse com a gente!</p>

            <div className='card-group'>
                <div className='card bg-success mb-3' >
                    <div className='card-body'>
                        <h4 className='card-title text-white'> <i className='fab fa-whatsapp'></i> (11) 9999-7885</h4>
                    </div>
                </div>

                <div className='card bg-danger mb-3' >
                    <div className='card-body'>
                        <h4 className ='card-title text-white'> <i className='fas fa-envelope-square'></i> fullstackeletro@recode.com.br</h4>
                    </div>
                </div>
            </div>
        

        <div className='container'>

            <div className='row pt-5'>

                <div className='col-6 mx-auto containerfaleconosco'>

                    <form method='POST' action=''>
                        <div className='form-group pt-5'>

                            <label for='nome'> Digite seu Nome:</label>
                                <input className='form-control' type ='nome' name='nome' id='nome'/>
                                
                                <div className='form-group'>
                                    <label for='email'> Digite seu E-mail:</label>
                                    <input className='form-control' type ='email' name='email' id='email'/>
                                </div>
                               

                                <div className='form-group'>
                                    <label for='areadetexto'> Digite sua mensagem aqui:</label>
                                    <textarea className='form-control' id='areadetexto' rows='3'></textarea>
                                </div>

                                <button type='submit' className='btn btn-primary btn-lg active' role='button' aria-pressed='true'>
                                    Enviar
                                </button>
                             
                        
                        </div>
                        </form>  
                   
                </div>
            </div>
        </div>
        <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/><br/>
        </div>


        
   
    );
}

export default Contato