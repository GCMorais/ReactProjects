import './main.css';

function Card(){
    return(
        <div className="Container">
            <div className="pay-box">
                <div className="input">
                    <img src="./logo.svg"></img>
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
                    <div className="card-box">
                        <div className="first-icons">
                            <img src="./cc-icon.svg"></img>
                            <img src="./cc-visa.svg"></img>
                        </div>
                        <div className="card-infos">
                            <h1>1234 5678 9012 3456</h1>
                            <p>Nome do titular</p>
                            <h2>Fulano da Silva</h2>
                        </div>
                        <div className="card-infos-box">
                            <div className="inf-area">
                                <p>Expiração</p>
                                <h2>02/32</h2>
                            </div>
                            <div className="inf-area">
                                <p>CVC</p>
                                <h2>123</h2>
                            </div>
                            <img src="./cc-chip.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;