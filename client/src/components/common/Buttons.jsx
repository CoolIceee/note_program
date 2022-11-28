import React, { useState } from 'react'
import '../../css/Buttons.css'
import basket from '../../assets/icons8-очистить-корзину-60 (1).png'
import basketDis from '../../assets/icons8-очистить-корзину-60 (3).png'
import edit from '../../assets/icons8-книга-и-карандаш-50.png'
import back from '../../assets/icons8-u---образная-стрелка-влево-48.png'
import { useDispatch, useSelector } from 'react-redux'
import { postsOneDelete, postsGet } from '../../store/features/post'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
function Buttons() {
  const dispatch = useDispatch()
  const editorMode = useSelector(state => state.post.editorMode)
  const posts = useSelector(state => state.post.posts)
  const postsOne = useSelector(state => state.post.onePost)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleClickBack = () => {
    navigate('/')
  }
  const handleOk = async () => {
    navigate('/')
    dispatch({ type: 'delete/posts' })
    dispatch(postsOneDelete(postsOne.map(item => item._id)[0]))
    dispatch(postsGet())
    setIsModalOpen(false)
  }
  const handleClickAddEdit = () => {
    dispatch({ type: 'edit/posts' })
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal
        title='Удаление'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Вы действительно хотите удалить эту заметку?</p>
      </Modal>
      <ul className='menu'>
        <li className='menu_panel'>
          <div
            onClick={editorMode ? '' : handleClickBack}
            className={editorMode ? 'cuts_mode' : 'menu_img'}
          >
            <img className='img' src={back} alt='err' />
          </div>
        </li>
        <li className='menu_panel'>
          <div
            onClick={handleClickAddEdit}
            className={editorMode ? 'cuts_mode' : 'menu_img'}
          >
            <img className='img' src={edit} alt='err' />
          </div>
        </li>
        {posts.map(item => item._id)[0] ? (
          <li className='menu_panel'>
            <div onClick={showModal} className='menu_img'>
              <img className='img' src={basket} alt='err' />
            </div>
          </li>
        ) : (
          <li className='menu_panel'>
            <div className='menu_img'>
              <img className='img' src={basketDis} alt='err' />
            </div>
          </li>
        )}
      </ul>
      <ul className='input_style'>
        <li>
          <form onClick={e => e.stopPropagation()} className='search'>
            <div className='styling'>
              <div className='entrails'>
                <input
                  className='search_input'
                  type='text'
                  placeholder='Поиск'
                  onChange={e =>
                    dispatch(
                      dispatch({
                        type: 'input/search',
                        payload: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </form>
        </li>
      </ul>
    </>
  )
}

export default Buttons
