import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoading: false,
  posts: [],
  onePost: [],
  errorMessage: '',
  editorMode: false,
}

export const postCreate = createAsyncThunk(
  'create/post',
  async ({ dataTime }, thunkAPI) => {
    try {
      console.log(dataTime)
      const res = await axios.post('http://localhost:9999/api/add', {
        dataTime,
      })
      return res.data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)
export const postUpdate = createAsyncThunk(
  'update/post',
  async ({ header, text, id }, thunkAPI) => {
    try {
      const res = await axios.post(`http://localhost:9999/api/update/${id}`, {
        header,
        text,
      })
      return res.data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const postsGet = createAsyncThunk('get/post', async (_, thunkAPI) => {
  try {
    const res = await axios.get('http://localhost:9999/api/get')
    return res.data
  } catch (error) {
    thunkAPI.rejectWithValue(error.message)
  }
})

export const postsOneGet = createAsyncThunk(
  'get/one/post',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:9999/api/get/one/${id}`)
      return res.data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)

const post = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postsGet.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(postsGet.rejected, (state, action) => {
        state.errorMessage = action.payload
        state.isLoading = false
      })
      .addCase(postsGet.fulfilled, (state, action) => {
        state.posts = action.payload
      })
      .addCase(postCreate.fulfilled, (state, action) => {
        state.posts = action.payload
      })
      .addCase(postsOneGet.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(postsOneGet.rejected, (state, action) => {
        state.errorMessage = action.payload
        state.isLoading = false
      })
      .addCase(postsOneGet.fulfilled, (state, action) => {
        state.onePost = action.payload
        state.isLoading = false
      })
      .addCase('edit', (state, action) => {
        state.editorMode = !state.editorMode
      })
  },
})
export default post.reducer
