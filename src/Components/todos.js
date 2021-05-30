function todos(props) {
        return(
            <div className="list_item">
            <ul className="ba">
                <li className='list-cls-1'>{props.value} <button className='btn-cls-1' onClick = {() => {props.sendData(props.id)}}> X </button></li>
            </ul>
            </div>
        )
}

export default todos;