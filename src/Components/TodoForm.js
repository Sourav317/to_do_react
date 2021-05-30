import React,{Component} from 'react'
import Todos from './todos' 

class TodoForm extends Component {

    state = {
        items : [],
        text : ""
    }

    ChangeHandler = (e) =>{
        //will show every letter as u type in input field
        console.log(e.target.value);

        //settinf the value in iniput field to be visible as value ={this.state.text} n text : "" 
        //will make it empty evrytime and u will not be able to see that u type in input field.

        this.setState ({text : e.target.value})
    }

    AddHandler = (e) =>{
        if(this.state.text !== ''){
            //using spread operator to add the input field value to the existing items array
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

            const items =[...this.state.items, this.state.text];
            this.setState({items : items , text : ""});
        }
    }

    DeleteHandler = (id) =>{
        console.log("deleted", id);
        const Olditems = [...this.state.items]
        console.log("Olditems", Olditems);
        const items = Olditems.filter((element, i) => {
            //filtering the deleted id from item and returning the non-matched
            //(that we dont want to delete) todos to new arr
        return i !== id
        })
        console.log("Newitems", items);
        this.setState({ items: items });
    }

    render(){
        return(
            <div className ='Container'>
                <h1 className="heading">Today's Plan</h1>
                <div className='input-section'>
                    <div className='input-cls-3'>
                        <input type='text' className='input-cls-4' placeholder='Enter your Todo'
                         value ={this.state.text} onChange={this.ChangeHandler} required />
                    </div>
                    <button className='adding-btn' onClick={this.AddHandler}>ADD</button>
                </div>
                <div className='todos-section'>
                    <ul>
                    {
                    this.state.items.map((value, i) => {
                      return <Todos key={i} id={i} value={value} sendData = {this.DeleteHandler}/>
                      //passing the deleteHandler as props to todos.js so that we can use this function over there
                    })
                  }
                        {console.log(this.state.items)}
                    </ul>
                </div>
            </div>
        )
            }
}

export default TodoForm
