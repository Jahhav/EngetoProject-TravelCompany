import { useEffect, useState } from 'react'
import './Home.css'
import exportData from '../data'
import Card from '../components/Card.component'
import Content from '../components/Content.component'
import { PiBookOpenText, PiPackageBold } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const { slogany, contentData } = exportData




const randomSlogan = () => {
    const randomIndex = Math.floor(Math.random() * slogany.length)
    return slogany[randomIndex].slogan
}


const Home = () => {

    const [slogan, setSlogan] = useState('')
    const [content, setContent] = useState(contentData[0])


    useEffect(() => {
        setSlogan(randomSlogan())
    }, [])



    const { id, heading, text } = content


    return <div className='body'>
        <div className='heading-box'>
            <h2 className='heading-title'>Transportní společnost</h2>
            <h3 className='heading-slogan'>{slogan}</h3>
            <img src={require('../img/truck-8656658.jpg')} alt="Truck"></img>
        </div>
        <div className='background'>
            <div className='second-section'>
                <h2>Výhody a přednosti naší společnosti</h2>
                <div className='card-container'>
                    <Card image={<TbTruckDelivery />} heading={"Rychlé doručení"} text={"Zaregistrujte si účet získejte prioritní odbavení."} />
                    <Card image={<MdOutlineComputer />} heading={"Pokročilý nástroj pro odesílání"} text={"Zaregistrujte si účet získejte prioritní odbavení."} />
                    <Card image={<PiBookOpenText />} heading={"Přehledný systém"} text={"Zaregistrujte si účet získejte prioritní odbavení."} />
                    <Card image={<PiPackageBold />} heading={"Přeprava pro e-commerce"} text={"Zaregistrujte si účet získejte prioritní odbavení."} />
                </div>
            </div>
            <div className='third-section'>
                <div className='navigation-buttons'>
                    <button onClick={() => { setContent(contentData[0]) }}>Technologie</button>
                    <button onClick={() => { setContent(contentData[1]) }}>Projekty</button>
                    <button onClick={() => { setContent(contentData[2]) }}>Udržitelnost</button>
                    <button onClick={() => { setContent(contentData[3]) }}>Specializace</button>
                </div>
                <Content heading={heading} text={text} />
            </div>
        </div>
    </div>
}



export default Home