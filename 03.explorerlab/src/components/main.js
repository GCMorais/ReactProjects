import './main.css';

function Card(){
    return(
        <div className="Container">
            <div className="pay-box">
                <div className="input">
                    <div className="input-p">
                        <p>Número do cartão</p>
                        <input></input>
                    </div>
                    <div className="input-p">
                        <p>Número do titular</p>
                        <input></input>
                    </div>
                    <div className="input-c">
                        <div className="input-m">
                            <p>Expiração</p>
                            <input></input>
                        </div>
                        <div className="input-m">
                            <p>CVC</p>
                            <input></input>
                        </div>
                    </div>
                    <button>Adicionar cartão</button>
                </div>
                <div className="card">

                </div>
            </div>
        </div>
    )
}

export default Card;