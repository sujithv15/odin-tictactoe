

const App = () => {

  const board = [['x','x','x'],['x','x','x'],['x','x','x']]

  const win = ['00', '01', '02']

  return (
    <>
      <header>
        <h1>Tic Tac Toe!</h1>
      </header>
      <div className="grid-container">
        <div className="board">
          <div className="cell" id="cell-00">X</div>
          <div className="cell" id="cell-01">X</div>
          <div className="cell" id="cell-02">X</div>
          <div className="cell" id="cell-10">X</div>
          <div className="cell" id="cell-11">X</div>
          <div className="cell" id="cell-12">X</div>
          <div className="cell" id="cell-20">X</div>
          <div className="cell" id="cell-21">X</div>
          <div className="cell" id="cell-22">X</div>
        </div>
      </div>
    </>
  )
}

export default App
