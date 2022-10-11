import './Firstpage.css';

function FirstPage(){
    return (
        <div className="Container">
            <section className='textPage'>
                <div>
                    <h1>lorem <br></br>Impsum.</h1>
                    <p>lorem ipsum in the future!!</p>
                </div>

                <div className='buttonPage'>
                    <button className='btn1' type='text'>Video Presentation</button>
                    <button className='btn2' type='text'>Learn More</button>
                </div>
            </section>
        </div>
    )
}

export default FirstPage;