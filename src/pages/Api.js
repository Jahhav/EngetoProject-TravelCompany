import { useEffect, useState } from 'react'
import './Api.css'
import { Link } from 'react-router-dom';
import DescriptionApi from '../components/DescriptionApi.component';



const Api = () => {

    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [cities, setCities] = useState([])
    const [city, setCity] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')




    const fetchData = async () => {
        try {
            const response = await fetch(`http://api.zippopotam.us/${state}/${zipCode}`)
            if (response.ok) {
                const data = await response.json();
                console.log("API Response data: ", data);
                const placeNames = data.places.map(place => place['place name'].replace(/ x\)/g, ''))
                setCities(placeNames)
                setCity(data.places[0].state)
                setError('')
            } else {
                setError("Chyba: Zadaná kombinace PSČ a země nebyla nalezena.");
                console.log("CHYBA: " + response.status);
            }
        } catch (error) {
            setError("Chyba při načítání dat.");
            console.log("Error fatching data: ", error)
        }
    };





    const formSubmitHandler = async (e) => {
        e.preventDefault();


        setSubmitted(false);
        setError('')
        setCities([])
        setCity('')
        await fetchData();
        setSubmitted(true);
    }

    const handleZipCodeChange = (e) => {
        let value = e.target.value
        // Remove any non-numeric characters
        value = value.replace(/\D/g, '');

        // Insert a space after the third character
        if ((state === "cz" || state === "sk") && value.length > 3) {
            value = value.slice(0, 3) + ' ' + value.slice(3);
        }
        setZipCode(value)

    }

    const handleStateChange = (e) => {
        setState(e.target.value)
        setZipCode('')
    }

    return <div className='body-api'>
        <h1>Zip Code tracker</h1>
        <div className='main-container'>
            <form onSubmit={formSubmitHandler}>
                <input type='text' onChange={handleZipCodeChange} value={zipCode} placeholder='např. 612 00'></input>
                <select value={state} onChange={handleStateChange}>
                    <option value=''>Vyber zemi</option>
                    <option value='cz'>Česko</option>
                    <option value='sk'>Slovensko</option>
                    <option value='us'>USA</option>
                </select>
                <button>Submit</button>
            </form>
            <div className='range-description'>
                <DescriptionApi isActive={state} />
            </div>
        </div>
        <div className='second-container main-container'>
            {error && <p className='error'>{error}</p>}
            {
                submitted && !error && (
                    <>
                        <h3>{city}</h3>
                        <div className='cities'>
                            {cities.map((city, index) => {
                                return <p key={index}>{city}</p>
                            })}
                        </div>
                    </>
                )
            }
        </div>
        <Link to='/' className='api-link'>Zpět</Link>
    </div>

}

export default Api



