import React, { Component } from 'react'

// ? CREATE YOUR CONTEXT : ===============================

const MyContext = React.createContext();

// ? REDUCER FUNCTION : =================================

const reducer =(state,action)=>{

    switch(action.type){
      
            case 'ADD_ITEMS': 
                return(
                    {items: action.payload}
                );
                
            default: return state;
    }

}


// ? PROVIDER COMPONENT: ================================

export class MyProvider extends Component {

    state={
        items:[],
        user: {
            avatar:/* "/home/alper/Documents/pictures/profilepic4.jpg" */
              'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b',
            name: 'Someone',
            followers: 1234,
            following: 123
            
          },
        dispatch: action =>{
            this.setState(state=> reducer(state,action))
        }
    }

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

// ? CONSUMER PART : ====================================

const MyConsumer = MyContext.Consumer;

export default MyConsumer;


