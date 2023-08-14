import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'
import { api } from '../../lib/axios'

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export interface PlayerState {
  course: Course | null
  currentModuleIndex: number
  currentLessonIndex: number
  isLoading: boolean
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
}

export const loadCourses = createAsyncThunk('player/load', async () => {
  const response = await api.get('/courses/1')

  return response.data
})

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // start: (state, action: PayloadAction<Course>) => {
    //   state.course = action.payload
    // },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1

      const nextLesson =
        state.course?.modules[state.currentLessonIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCourses.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loadCourses.fulfilled, (state, action) => {
      state.course = action.payload
      state.isLoading = false
    })
  },
})

export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]

    const currentLesson =
      state.player.course?.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return { currentModule, currentLesson }
  })
}
