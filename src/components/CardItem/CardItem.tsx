

type Props= {
    player?: string;
    index: number;
    onClick(event: React.MouseEvent<HTMLDivElement>): void
}

const CardItem = ({player, onClick, index}: Props) => {
    const scale = player ? "scale-100" : "scale-0";
    const textColor = player === "X" ? "text-neutral-400" : "text-lime-400";
    const hoverStyle = "transition duration-500 hover:scale-105 transform";

    return ( 
        <div 
        data-cell-index = {index}
        className={`h-24 w-24 border-solid border-4 border-slate-300 font-bold text-center text-7xl flex justify-center items-center cursor-pointer ${hoverStyle}`}
        {...{onClick}}>
            <span className={`transform transition-all duration-150 ease-out ${scale} ${textColor}`}>{player}</span>
        </div>
     );
}
 
export default CardItem;