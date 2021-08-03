import React, {useState} from 'react'
import style from './card.module.css'
import PropTypes from 'prop-types';

const Card = ({title, description:Description}) => {
  const [name, setName] = useState("")
  
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{title}</h3>
      <h5>Name : {name}</h5>
      <div className={style.body}>
        <Description/>
      </div>
      <button onClick={()=>setName('risano')}>click name</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.elementType,
}
export default Card
