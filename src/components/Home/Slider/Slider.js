import React, {useState, useEffect} from "react";
import style from './Slider.module.css'
import Card from "../Card/Card";
import Title from "../../Title/Title";
import { getSznAni } from "../../../actions/getData";


const Slider = () =>{
    const[results, setResult]=useState([])

    useEffect(()=>{
        getSznAni(setResult)
    },[])
    

    
    return(
        <>
        <div className={style.title}>
            <Title title={'Top season anime'}/>
            <div className={style.wrapper}>
                {results.map(ani=>(<Card anime={ani} key={ani.mal_id}/>))}
            </div>
        </div>
        </>
    )
}

export default Slider