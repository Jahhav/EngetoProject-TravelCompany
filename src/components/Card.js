import './Card.css'

const Card = ({ image, heading, text }) => {

    return (
        <div className='upper-div'>
            < div className='card' >
                <div>{image}</div>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div >
        </div>
    )
}

export default Card