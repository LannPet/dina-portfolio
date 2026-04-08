import { useEffect } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router"
import Navigation from "./components/navigation/Navigation"
import Kulinarika from "./views/kulinarika/Kulinarika"
import Omeni from "./views/oMeni/Omeni"
import Kontakt from "./views/kontakt/Kontakt"
import Izkusnje from "./views/izkusnje/Izkusnje"
import MainLayout from "./layouts/MainLayout"



function App() {
  const location = useLocation()

  useEffect(() => {
    let scrollTimeout: number | undefined

    const handleScroll = () => {
      document.documentElement.classList.add("is-scrolling")

      window.clearTimeout(scrollTimeout)
      scrollTimeout = window.setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling")
      }, 700)
    }

    document.addEventListener("scroll", handleScroll, true)

    return () => {
      document.removeEventListener("scroll", handleScroll, true)
      window.clearTimeout(scrollTimeout)
      document.documentElement.classList.remove("is-scrolling")
    }
  }, [])

  return (
    <MainLayout>
      <Navigation/>
      <div key={location.pathname} className="route-fade-in w-full">
        <Routes location={location}>
          <Route
            path="*"
            element={
              <Navigate to="/kulinarika" replace/>
            }
          />
          <Route
            path="/"
            element={
              <Navigate to="/kulinarika" replace/>
            }
          />
          <Route
            path="/kulinarika"
            element={<Kulinarika/>}
          />
          <Route
            path="/omeni"
            element={<Omeni/>}
          />
          <Route
            path="/kontakt"
            element={<Kontakt/>}
          />
          <Route
            path="/izkusnje"
            element={<Izkusnje/>}
          />
        </Routes>
      </div>
    </MainLayout>
  )
}

export default App
