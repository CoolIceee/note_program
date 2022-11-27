import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/Workspace.css'
import { useDebounced, useDebouncedTwo } from '../../hooks/debounced'
import { postsOneGet, postUpdate } from '../../store/features/post'

function Workspace({ id }) {
  const posts = useSelector(state => state.post.onePost)
  const editorMode = useSelector(state => state.post.editorMode)
  const [header, setHeader] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const debounced = useDebounced(header)
  const debouncedTwo = useDebouncedTwo(text)

  useEffect(() => {
    dispatch(postsOneGet(id))
    if (header.length !== 0 && editorMode) {
      dispatch(postUpdate({ header, text, id }))
    }
  }, [dispatch, id, editorMode, debounced, debouncedTwo, header, text])
  useEffect(() => {
    if (editorMode) {
      setHeader(posts.map(item => item.header))
      setText(posts.map(item => item.text))
    }
  }, [dispatch, editorMode])

  return posts.map(item => {
    return !editorMode ? (
      <div className='block_text'>
        <div className='main_end'>
          <div className='notes_header'>{item.dataTime}</div>
        </div>
        <div className='header_text'>{item.header}</div>
        <div className='basic_text'>{item.text}</div>
      </div>
    ) : (
      <div className='edit_field'>
        <div className='main_end'>
          <div className='notes_header'>{item.dataTime}</div>
        </div>
        <form>
          <div className='header_block'>
            <input
              className='header_input'
              value={header}
              onChange={e => setHeader(e.target.value)}
            />
          </div>
          <textarea
            className='notes'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </form>
      </div>
    )
  })
}

export default Workspace
