import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct} from '../../configs/redux/actions/productAction'

const InsertProduct = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    price:'',
    description: '',
    image: null,
    imagePreview: null
  })
  // const [dataLama, setDataLama] = useState({
  //   name:
  // })
  const [loading, setLoading] = useState(false)
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleInputFile = (e) =>{
    // multiple
    // const newArr = [...e.target.files]
    // console.log(e.target.files);
    // setForm({
    //   ...form,
    //   image: e.target.files,
    //   imagePreview: newArr.map((item) => URL.createObjectURL(item))
    // })
    console.log(e);
    setForm({
      ...form,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0])
    })
  }
  const handleSubmit = ()=>{
    dispatch(addProduct(form, setLoading))
  }
  return (
    <div>
      <ul>
        <li><input type="text" name="name" id="name" placeholder="name" onChange={handleChange} /></li>
        <li><input type="text" name="price" id="price" placeholder="price" onChange={handleChange} /></li>
        <li><input type="text" name="description" id="description" placeholder="description" onChange={handleChange} /></li>
        <li><input type="file" onChange={handleInputFile} multiple/></li>
        {/* {form.imagePreview.map((item)=>  */}
        <img src={form.imagePreview} alt="" />
        {/* )} */}
        <button onClick={handleSubmit} disabled={loading}>{!loading ? 'Simpan' : 'Loading'}</button>
      </ul>
    </div>
  )
}

export default InsertProduct
