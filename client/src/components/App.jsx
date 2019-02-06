import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      playersTurn: 1
    }
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlayer(row,col) {
    let mark = this.state.playersTurn === 1 ? 'X' : 'O';
    let newBoard = this.state.board
    newBoard[row][col] = mark;
    this.setState({
      board: newBoard
    })
  }

  render() {
    return (
      <div className="board">
        <div className="row1">
          <div className="cell" onClick= {() => this.handlePlay(0, 0)}></div>
          <div className="cell" onClick= {() => this.handlePlay(0, 1)}></div>
          <div className="cell" onClick= {() => this.handlePlay(0, 2)}></div>
        </div>
        <div className="row2">
          <div className="cell" onClick= {() => this.handlePlay(1, 0)}></div>
          <div className="cell" onClick= {() => this.handlePlay(1, 1)}></div>
          <div className="cell" onClick= {() => this.handlePlay(1, 2)}></div>
        </div>
        <div className="row3">
          <div className="cell" onClick= {() => this.handlePlay(2, 0)}></div>
          <div className="cell" onClick= {() => this.handlePlay(2, 1)}></div>
          <div className="cell" onClick= {() => this.handlePlay(2, 2)}></div>
        </div>
      </div>
    )
  }
}

export default App;