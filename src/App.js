import { Routes, Route } from "react-router-dom"

import AllMeetUps from "./pages/AllMeetUps"
import Favorites from "./pages/Favorites"
import NewMeetUp from "./pages/NewMeetUp"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetUps />}></Route>
        <Route exact path="/new-meetup" element={<NewMeetUp />} ></Route>
        <Route exact path="/favorites" element={<Favorites />} ></Route>
      </Routes>
    </Layout>
  )
}

export default App
