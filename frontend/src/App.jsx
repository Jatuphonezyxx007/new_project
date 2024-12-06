import { useState } from 'react'
import './App.css'

import Fetch from './Component/Fetch'
import Swr from './Component/Swr'
import RQ from './Component/RQ'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    {/* <Fetch /> */}
    {/* <Swr /> */}
    <RQ />
    </QueryClientProvider>
  )
}

export default App
