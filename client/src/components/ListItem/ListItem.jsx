import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postsGet } from '../../store/features/post'
import { NavLink } from 'react-router-dom'
function ListItem(props) {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.post.posts)
  const editorMode = useSelector(state => state.post.editorMode)
  const deleteMode = useSelector(state => state.post.deleteMode)
  const textInputString = useSelector(state => state.post.textInputString)
  useEffect(() => {
    dispatch(postsGet())
  }, [dispatch, editorMode, deleteMode, textInputString])
  const headersItems = posts.filter(note => {
    return note.header.toLowerCase().includes(textInputString.toLowerCase())
  })
  return editorMode ? (
    <div className='scroll_block'>
      <ul className='sidebar_menu'>
        {posts.map(item => {
          return (
            <div className='block_notes_menu'>
              <li className='notes_menu'>{item.header}</li>
            </div>
          )
        })}
      </ul>
    </div>
  ) : (
    <div className='scroll_block'>
      <ul className='sidebar_menu'>
        {headersItems.map(item => {
          return (
            <NavLink className='block_notes_menu' to={item._id}>
              <li className='notes_menu'>{item.header}</li>
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default ListItem
