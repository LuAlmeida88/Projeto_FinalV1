import React from 'react'

function Lojas (props){
    return(
<div>
        <div className='container'>

            <div cclassName='row pt-5'>
                <div className='col-12 text-center my-5'>
                    <h1 className='display-5 text-success'> <i cclassName='fas fa-building'></i> Nossas Lojas</h1>
                </div>
            </div>

            <div className='jumbotron'>

            <div cclassName='row mb-5'>

                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 cclassName='card-title'> Rio de Janeiro</h4>
                            <p className='card-text'>Avenida Presidente Vargar, 5000 1º andar - Centro</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />

                <div className='col-sm-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>São Paulo</h4>
                            <p className='card-text'>Avenida Paulista, Bela Vista, 985 3º andar - Centro</p>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className ='col-sm-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className='card-title'>Santa Catarina</h4>
                            <p className='card-text'>Rua Major Ávila, 1370 3º andar - <br />Centro</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
        </div>

</div>

    );
}

export default Lojas