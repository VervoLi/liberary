import { Component } from "react";
import mod from './mod.png';
export class LibraryCard extends Component{
    state = {
        userInput: " ",
        libraryCard: [ ]
    }

    onChangeEvent(e){
        this.setState ({userInput: e});
        //console.log(e);
    }

     addItem(input){
         if(input===""){
             alert("Please enter an item ")
         }

         else{
             let cardArray=this.state.libraryCard;
             cardArray.push(input);
            this.setState({libraryCard: cardArray,
           userInput: " " });
       // console.log(cardArray);
    }
    }
    deleteItem(){
        let cardArray=this.state.libraryCard;
        cardArray=[]
       this.setState({libraryCard:cardArray})
    }
    crossedWord(event){
        const li=event.target;
        li.classList.toggle("crossed");
    }
    onFormSubmit(e){
        e.preventDefault();
    }
        render(){
            return(
                <div>
                    <form onSubmit={this.onFormSubmit}> 
                <div className="container">
                    <input type="text"placeholdert= "What other book do you want to read?" 
                     onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                     value={this.state.userInput}/>
                </div>
                <div className="container">
                <button onClick={()=>this.addItem(this.state.userInput)}className="add">Add</button>
                </div>
                <ul>
                    {this.state.libraryCard.map((item, index)=>(
                      <li onClick={this.crossedWord} key={index}><img src={mod} width="20px"alt="logo"/>
                      {item}</li>
                    ))
                    }
                </ul>
                <div className="container">
                <button onClick={()=>this.deleteItem()}className="delete">Delete</button>
                </div>
                </form>
                </div>
            );
        }
   
}