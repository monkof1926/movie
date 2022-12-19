import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <BrowersRouter>
        <Routes>
            <Route path = "src\components\Home.jsx" element={
                <Home />
            } />
            <Route path = "src\components\SearchView.jsx" element={
                <SearchView />
            } />

            <Route path = "src\components\Movie.jsx" element={
                <Movie />
            } />
        </Routes>
    </BrowersRouter>
  )
}

export default AppRouter