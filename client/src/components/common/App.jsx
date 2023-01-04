import React from 'react'
import '../../css/App.css'
import Sidebar from '../Sidebar/Sidebar'
import Workspace from '../Workspace/Workspace'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Empty from './Empty'
function App() {
  const posts = useSelector(state => state.post.posts)
  return (
    <div className='container'>
      
      <Header />
      <div className='section'>
        <div className='sidebar'>
          <div className='note_title'>Мои заметки</div>
          <Sidebar />
          <div className='bottom_title'></div>
        </div>
        <div className='box'>
          <Routes>
            <Route path='' element={<Empty />} />
            {posts.map(item => {
              return (
                <Route path={item._id} element={<Workspace id={item._id} />} />
              )
            })}
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App
