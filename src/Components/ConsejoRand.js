import React, {useState, useEffect} from "react";
import { useRef } from "react";
import { Row, Col } from 'antd';
import '../Styles/ConsejoRand.css';
function ConsejoRand(){
//para agregar a favs
    const [fav, setFav] = useState([])

    const url='https://api.adviceslip.com/advice'
    const [consejo, setConsejo] = useState()
    const conRand = async () =>{
        const consejo =await fetch(url)
        const conObj = await consejo.json();
        setConsejo(conObj)
    };
    useEffect(()=>{
        conRand()
    },[]);

    if (!consejo){
        return "Espere....";
    }

    //agregar a favs
    const favoritos= [];
    const agregarFav =(favorito) =>{
         const idea={
             ide: consejo.slip.id,
          name:consejo.slip.advice
         }
        setFav((prevState) => [...prevState, idea]);

    };






    return(
        <div>
        <Row className="principalrow">
            <Col className="consejitos">
                <h1>Consejo del día</h1>
                <h4>{consejo.slip.advice}</h4>
                <button onClick={conRand}>Siguiente Consejo</button>
                <button onClick={()=> agregarFav(consejo.slip.device)}>Agregar a favoritos</button>


            </Col>
            <Col>
                <h1>Lista de favoritos</h1>
                <ul>
                    {fav.map((value, index, array)=>(
                        <li key={consejo.slip.id}>{consejo.slip.advice} <button className="botoncito"> Eliminar de favoritos</button></li>

                    ))}


                </ul>

            </Col>
        </Row>
        </div>

    );
};
export default ConsejoRand;