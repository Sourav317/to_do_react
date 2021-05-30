function todos(props) {
        return(
            <ul>
                <li>{props.value} <button onClick = {() => {props.sendData(props.id)}}> X </button></li>
            </ul>
        )
}

export default todos;