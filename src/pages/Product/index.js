import axios from 'axios'
import React, {useState, useRef} from 'react'


const Product = () => {
  // const [name, setName] = useState('')
  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const priceRef = useRef('')
  const [form, setForm] = useState({
    nama: '',
    description: '',
    price: 0
  })
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    // const name = nameRef.current.value
    // const description = descriptionRef.current.value
    // const price = priceRef.current.value
    // console.log({name, description, price, data: ''});
    // descriptionRef.current.focus()
    // console.log(descriptionRef.current);
    axios.post('http://locahost:4000/products', form)
    .then((res)=>{
      alert('succs')
    })
    .catch(()=> alert('failed'))
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama">Nama Product</label>
          <input type="text" name="nama" id="nama" className="form-control" onChange={handleChange} ref={nameRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" className="form-control" onChange={handleChange} ref={descriptionRef} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="price" className="form-control" onChange={handleChange} ref={priceRef} />
        </div>
        <button className="btn btn-primary">Add product</button>
      </form>
      
    </div>
  )
}

export default Product
