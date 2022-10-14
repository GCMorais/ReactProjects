import './Fourthpage.css';

const Btn = document.querySelector('.btnbtn');
const Area = document.querySelector('.Areatxt');




function Fourthpage(){
    return (
        <div className='ContainerFourth'>
            <div className='Areaheader'>
                <h1>arts & culture</h1>
            </div>
            <div className='box-Area'>
                <div className='Areabtn'>
                    <button type='button' className='btnbtn'>Eyes</button>
                    <button type='button' className='btnbtn active'>My epic Trip</button>
                    <button type='button' className='btnbtn'>Estagio</button>
                </div>
                <div className='Areatxt'>
                    <div className='Areatxt-header'>
                        <h2>Bacharelado / Estágio</h2>
                        <h3>Mar 2033 - Jul 2033</h3>
                    </div>
                    <h4>Lorem Lorem Ipsum da Silva JR. - LOREM</h4> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum neque ac condimentum viverra. Donec dui velit, elementum at porttitor vel, euismod nec nisi. Morbi pulvinar magna lorem at porttitor vel, euismod nec nisi. Morbi pulvinar magna lorem</p>
                </div>
            </div>
        </div>
    )
}

export default Fourthpage;