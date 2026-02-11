function handleFormSubmit(event){
        event.preventDefault();
        console.log("hii")
}
export default function Form(){
    return(
        <form>
            <input type="text" placeholder="write something"/>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
} 