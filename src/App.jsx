import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-95 bg-sky-800 "></div>
      </div>
      <NavBar />

    </>
  )
}

export default App
