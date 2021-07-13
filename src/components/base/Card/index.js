import React, {useState} from 'react'
import style from './card.module.css'

const Card = ({title, description}) => {
  const [name, setName] = useState("")
  
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{title}</h3>
      <h5>Name : {name}</h5>
      <div className={style.body}>
        <p className={style.content}>{description}</p>
      </div>
      <button onClick={()=>setName('risano')}>click name</button>
    </div>
  )
}

export default Card
