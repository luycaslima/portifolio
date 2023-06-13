export default function RotatingSquares() {
    return (
        <div className="relative z-1">
            <img className="absolute" src="big_orange_square.svg" alt="" />
            <img className="absolute animate-reverse-spin" src="small_orange_square.svg" alt="" />
        </div>
    )
}