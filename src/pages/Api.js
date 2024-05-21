import { useEffect, useState } from 'react'
import './Api.css'
import { Link } from 'react-router-dom';
import DescriptionApi from '../components/DescriptionApi.component';



const Api = () => {

    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('612 00')
    const [responseData, setResponseData] = useState(null); // State to store API response data
    const [cities, setCities] = useState([])
    const [country, setCountry] = useState('')



    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.zippopotam.us/${state}/${zipCode}`)
                if (response.ok) {
                    const data = await response.json();
                    setResponseData(data)
                    const placeNames = data.places.map(place => place['place name'].replace(/ x\)/g, ''))
                    setCities(placeNames)
                    setCountry(data.country)
                } else {
                    console.log("CHYBA: " + response.status);
                }
            } catch (error) {
                console.log("Error fatching data: ", error)
            }
        };

        if (state && zipCode) {
            fetchData()
        }
    }, [state, zipCode])





    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(zipCode, state);
        console.log(responseData);
        console.log(responseData.places[0].state);
        console.log(responseData.country);
        console.log(cities);
    }

    return <div className='body-api'>
        <div className='main-container'>
            <form onSubmit={formSubmitHandler}>
                <input type='text' onChange={(e) => { setZipCode(e.target.value) }} value={zipCode} placeholder='612 00'></input>
                <select value={state} onChange={(e) => { setState(e.target.value) }}>
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
            <h3>{country}</h3>
            <div className='cities'>
                {cities.map((city) => {
                    return <p>{city}</p>
                })}
            </div>
        </div>
        <Link to='/' className='api-link'>Zpět</Link>
    </div>

}

export default Api



