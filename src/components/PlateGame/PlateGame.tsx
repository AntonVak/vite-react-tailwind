import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";

const INITIAL_GAME_STATE = ['','','','','','','','','', ];
const PlateGame = () => {
    const [game, setGame] = useState(INITIAL_GAME_STATE);
    const [currentPlayer, setCurrentPlayer] = useState("X");

    useEffect(() => {
        
    }, [game]);

    const changePlayer = () => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        //индекс ячейки 0,1,2,3,
        const cellIndex = Number(event.currentTarget.getAttribute("data-cell-index"));
        const currentValue = game[cellIndex]
        console.log(currentValue);
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