import './Content.component.css'

const Content = (props) => {
    const { heading, text } = props
    return (
        <div className='content-container'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Content