import { configureStore } from '@reduxjs/toolkit';
import './App.css'
import dataSlice from './Slices/dataSlice.ts';
import { Provider} from 'react-redux'
import clickInputSlice from './Slices/clickInputSlice.ts';
import dataServerSlice from './Slices/dataServerSlice.ts';
import DataEntry from './Components/DataEntry.tsx'
import navigationSlice from './Slices/navigationSlice.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageAnswer from './Components/PageAnswer.tsx'

const myStore = configureStore({
  reducer:{
    dataSlice,
    clickInputSlice,
    dataServerSlice,
    navigationSlice
  }
})

export type RootState = ReturnType<typeof myStore.getState>;

function App() {

  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="/answer" element={<PageAnswer />} />
        </Routes>
      </BrowserRouter >
    </Provider>
  )
}

export default App
