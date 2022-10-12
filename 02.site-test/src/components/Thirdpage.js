import './Thirdpage.css';

function Thirdpage(){
    return (
        <div className="ContainerThird">
            <div className='boxArea'>
                <div className='boxone'>
                    <img src='brazil.png' alt='brazil'></img>
                    <h1>High Quality</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum neque ac condimentum viverra. Donec dui velit, elementum at porttitor vel, euismod nec nisi. Morbi pulvinar magna lorem</p>
                    <button className='btnthird' type='text'><a href='#'>Saiba mais..</a></button>
                </div>
                <div className='boxtwo'>
                    <img src='united-kingdom.png' alt='united kingdom'></img>
                    <h1>Cool Animations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum neque ac condimentum viverra. Donec dui velit, elementum at porttitor vel, euismod nec nisi. Morbi pulvinar magna lorem</p>
                    <button className='btnthird' type='text'><a href='#'>Saiba mais..</a></button>
                </div>
                <div className='boxthree'>
                    <img src='south-korea.png' alt='south korea'></img>
                    <h1>Easy to Changes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum neque ac condimentum viverra. Donec dui velit, elementum at porttitor vel, euismod nec nisi. Morbi pulvinar magna lorem</p>
                    <button className='btnthird' type='text'><a href='#'>Saiba mais..</a></button>
                </div>
            </div>
        </div>
    )
}

export default Thirdpage;