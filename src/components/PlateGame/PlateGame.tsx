import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";

const INITIAL_GAME_STATE = ['','','','','','','','','', ];
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

    useEffect(() => {
        checkForWinner()
    }, [game]);

    const resetBoard = () => setGame(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);
    resetBoard();
  }

  const handleDraw = () => {
    window.alert("The game ended in a draw");

    resetBoard();
  };

    const checkForWinner = () => {
        let roundWon = false

        for (let i = 0; i < WINNING_COMBOS.length; i++) {
            const winCombo = WINNING_COMBOS[i]; //winCombo = значения выгрышных массивов [0, 1, 2] 
            

            const a = game[winCombo[0]];
            const b = game[winCombo[1]];
            const c = game[winCombo[2]];
            console.log(a);
            //a, b, c = в них содержится либо "X", либо "O".
            if ([a, b, c].includes("")) {
                continue;
              }
        
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
        if(currentValue === "X" || currentValue === "O") {
            return
        }
        const newValues = [...game];
        // console.log('newValues',newValues);
        newValues[cellIndex] = currentPlayer;
        // console.log('newValues[cellIndex]', newValues[cellIndex]);
        setGame(newValues);
        changePlayer()
        


    }
    return ( 
        <div className=" mt-5">
            <h1 className="text-center mb-10 text-3xl" >Board Goes Here</h1>
            <div className="grid grid-cols-3 gap-3 mx-auto w-max">
                {
                    game.map((player, index) => (
                        <CardItem onClick={handleClick} player={player} index={index} key={index}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default PlateGame;