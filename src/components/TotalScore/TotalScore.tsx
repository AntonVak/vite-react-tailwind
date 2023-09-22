
interface TotalScoreProps {
    currentPlayer: string; // Здесь указывайте тип currentPlayer, например string
    scores: {
      X: number; // Здесь указывайте тип для X, например number
      O: number; // Здесь указывайте тип для O, например number
    };
  }

const TotalScore = ({currentPlayer, scores}: TotalScoreProps) => {

    // const test = () => {
    //     for(const month in summer) {
    //         if(month !== "") {
    //             // console.log(month);
    //             // console.log(':' + summer[month]);
    //         }
    //     }
    // }

   
    //     for(let i = 1; i<11; i++) {
    //         boolArray[i] = (i%2 ===0) ? true : false;
    //         // console.log('Element' + i + ':' + boolArray[i]);
    //     }
    //     for(let i = 1; i<boolArray.length; i++) {
    //         if(boolArray[i]) {
    //             result += i + '|'
    //         }
            
    //     }
    //     console.log(result);
    
    return ( 
        <div className="ml-10 mt-5">
        <h3 className="text-2xl"> Next player: {currentPlayer} </h3>
        <h4>Player X wins: {scores["X"]} </h4>
        <h4>Player O wins: {scores["O"]} </h4>
       
        </div>
        
     );
}
 
export default TotalScore;