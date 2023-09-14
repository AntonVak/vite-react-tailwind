import PlateGame from "./components/PlateGame/PlateGame"




function App() {
  return (
    
      <div className='container h-screen mx-auto  bg-red-500 font-serif	'>
        <h1 className="text-4xl font-bold text-center text-neutral-400 pt-4" >Tic Tac Toe</h1>
        <PlateGame />
      </div>
   
  )
}

export default App
