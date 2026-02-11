export default function Click(){
    function handleClick(event){
        alert("Button Clicked")
        console.log("BUtton clicked")
        console.log(event);
    } 
    function printBye(){
        alert("Bye!")
        console.log("Bye!")
    }
    return  (
        <div>
            <button onDoubleClick={handleClick}>CLick me!</button>
            <p onMouseOver={printBye}>dont click me</p>
        </div>
    )
}