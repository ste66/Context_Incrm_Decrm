import React, { Component } from 'react'
import MyConsumer from './Context'

export class ShowApi extends Component {

  changeItem = (dispatch) => {
    /* fetch('https://jsonplaceholder.typicode.com/posts/') */
    fetch('https://gist.githubusercontent.com/nanotaboada/6396437/raw/a572b6cd69f8847e75249e0d177b324417eeee1c/books.json')
    .then(res => res.json())
    .then(data=>{dispatch({type:'ADD_ITEMS', payload: data.books})})
  
  }
  render() {
    return (
      <MyConsumer>
        {
          value => {
            return(
      <div className="App">
        <div>
        {value.items.map(item=>{
          return(
              <div >
                 <div style={{backgroundColor:"yellow",color:"red"}}><h5>TITLE: {item.title}</h5></div>
                 <div>AUTHOR: {item.author}</div>
              </div>

   
          )
        })}

        </div>
        <button onClick={()=>{this.changeItem(value.dispatch)}}>Show my Data</button>
      </div>

            )
          }
        }
      </MyConsumer>
    )
  }
}

export default ShowApi


