import { useState } from 'react'
import './Api.css'



const Api = () => {

    const url = new URL("https://api.zipcodestack.com/v1/status");

    const headers = {
        "apikey": "01HY9FR7ARHXXX045M0NSJZVPP",
        "Accept": "application/json",
    };

    fetch(url, {
        method: "GET",
        headers
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("CHYBA: ", error));


    const [value, setValue] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(value);
    }

    return <div className='body-api'>
        <div className='main-container'>
            <form onSubmit={formSubmitHandler}>
                <input type='text' onChange={(e) => { setValue(e.target.value) }} value={value}></input>
                <button>Submit</button>
            </form>
        </div>
    </div>

}

export default Api