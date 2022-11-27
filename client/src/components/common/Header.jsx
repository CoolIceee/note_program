import React, { useEffect, useState } from 'react'
import '../../css/Header.css'
import Buttons from './Buttons'
import { postCreate } from '../../store/features/post'
import { useDispatch } from 'react-redux'
import date from 'date-and-time'
function Header(props) {
  const dispatch = useDispatch()
  const now = new Date()
 
  const handleClickAddPost = () => {
    dispatch(postCreate({ dataTime: date.format(now, 'YYYY/MM/DD HH:mm') }))
  }
  return (
    <div className='header'>
      <div className='left_department'>
        <div onClick={handleClickAddPost} className='add_button'>
          Новая заметка
        </div>
      </div>
      <Buttons />
    </div>
  )
}

export default Header
