import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import TotalScore from "../TotalScore/TotalScore";

type Scores = {
  [key: string]: number;
};

const INITIAL_GAME_STATE = ['','','','','','','','','', ];
const INITIAL_SCORES: Scores = { X: 0, O: 0 };
const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

const PlateGame = () => {
    const [game, setGame] = useState(INITIAL_GAME_STATE);
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [scores, setScores] = useState(INITIAL_SCORES);
console.log(currentPlayer);

    useEffect(() => {
      if (game === INITIAL_GAME_STATE) {
        return;
      }
        checkForWinner()
    }, [game]);

    const resetBoard = () => setGame(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);

    const newPlayerScore = scores[currentPlayer] + 1
    const newScores = {...scores};
    newScores[currentPlayer] = newPlayerScore;
    setScores(newScores);

    resetBoard();
  }

  const handleDraw = () => {
    window.alert("The game ended in a draw");
    resetBoard();
  };

    const checkForWinner = () => {
        let roundWon = false

        for (let i = 0; i < WINNING_COMBOS.length; i++) {
            const winCombo = WINNING_COMBOS[i]; 
            //winCombo = значения выгрышных массивов [0, 1, 2] 
            
            const a = game[winCombo[0]];
            const b = game[winCombo[1]];
            const c = game[winCombo[2]];
            // console.log(a);
           
            if ([a, b, c].includes("")) {
                continue;
              }
         //a, b, c = в них содержится либо "X", либо "O".
              if (a === b && b === c) {
                roundWon = true;
                break;
              }
      
        }
        if (roundWon) {
            setTimeout(() => handleWin(), 500);
            return;
          }
      
          if (!game.includes("")) {
            setTimeout(() => handleDraw(), 500);
            return;
          }
      
          changePlayer();
    }

    const changePlayer = () => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        //индекс ячейки 0,1,2,3,
        const cellIndex = Number(event.currentTarget.getAttribute("data-cell-index"));
        const currentValue = game[cellIndex]
        // console.log(cellIndex);
        if(currentValue ) {
            return
        }
        const newValues = [...game];
        console.log('newValues',newValues);
        newValues[cellIndex] = currentPlayer;
        // console.log(currentPlayer);
        setGame(newValues);
        changePlayer()
        


    }
    return ( 
        <div className=" mt-5">
            <h1 className="text-center mb-10 text-3xl" >Board Goes Here</h1>
            <div className="grid grid-cols-3 gap-3 mx-auto w-max">
                {
                    game.map((player, index) => (
                        <CardItem onClick={handleClick} {...{ index, player }} key={index}/>
                    ))
                }
            </div>
            <TotalScore currentPlayer={currentPlayer} scores={scores}/>
        </div>
     );
}
 
export default PlateGame;