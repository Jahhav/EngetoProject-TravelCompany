import { useEffect, useState } from 'react'
import './DescriptionApi.css'

const DescriptionApi = ({ isActive }) => {

    const [text, setText] = useState('')

    const textInDescription = () => {
        setText("")
        if (isActive === "cz") setText("Range 100 00 - 798 62");
        if (isActive === "sk") setText("Range 010 01 - 992 01");
        if (isActive === "us") setText("Range 00210 - 99950");
    }

    useEffect(() => {
        textInDescription()
    }, [isActive]);

    return <div className='api-body'>
        <div className='description-api'>
            <p>{text}</p>
        </div>
    </div>
}

export default DescriptionApi