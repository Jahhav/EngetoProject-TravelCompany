import './Card.component.css'

const Card = (props) => {
    const { image, heading, text } = props

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