import React from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const List = () => {


  const [list, setList] = useState([])

  const fetchList=async () => {
    
    try {
      
      const response=await axios.get(backendUrl + "/api/product/list")
      console.log(response.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchList();
  
  }, [])
  
  
  return (
    <div>
      
    </div>
  )
}

export default List
