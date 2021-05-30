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
    render(){
        return(
            <div className ='Container'>
                <h1 className="heading">Today's Plan</h1>
                <div className='input-section'>
                    <div className='input-cls-3'>
                        <input type='text' className='input-cls-4' placeholder='Enter your Todo'
                         value ={this.state.text} onChange={this.ChangeHandler} required />
                    </div>
                    <button className='adding-btn'>ADD</button>
                </div>
                <div className='todos-section'>
                    <ul>
                        <Todos />
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoForm
