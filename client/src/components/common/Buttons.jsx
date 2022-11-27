import React from 'react'
import '../../css/Header.css'
import basket from '../../assets/icons8-очистить-корзину-60 (1).png'
import edit from '../../assets/icons8-книга-и-карандаш-50.png'
import { useDispatch, useSelector } from 'react-redux'
function Buttons(props) {
  const dispatch = useDispatch()

  const editorMode = useSelector(state => state.post.editorMode)
 
  const handleClickAddEdit = () => {
    dispatch({ type: 'edit' })
    
  }

  return (
    <ul className='menu'>
      <li className='menu_panel'>
        <div
          onClick={handleClickAddEdit}
          className={editorMode ? 'cuts_mode' : 'menu_img'}
        >
          <img className='img' src={edit} alt='err' />
        </div>
      </li>
      <li className='menu_panel'>
        <div onClick={handleClickAddEdit} className='menu_img'>
          <img className='img' src={basket} alt='err' />
        </div>
      </li>
    </ul>
  )
}

export default Buttons
