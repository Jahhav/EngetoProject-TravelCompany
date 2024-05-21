import { useEffect, useState } from 'react'
import './DescriptionApi.component.css'



const DescriptionApi = (props) => {
    const { isActive } = props;

    const [text, setText] = useState('')


    useEffect(() => {
        if (isActive === "cz") {
            setText("Range 100 00 - 798 62")
        } else if (isActive === "sk") {
            setText("Range 010 01 - 992 01")
        } else if (isActive === "us") {
            setText("Range 00210 - 99950")
        } else { setText('') }
    }, [isActive])




    return <div className='api-body'>
        <div className='description-api'>
            <p>{text}</p>
        </div>
    </div>

}

export default DescriptionApi