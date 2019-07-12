import React,{Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component    {
    render(){
        return(
           <div>
               <p> { this.props.todo.title}</p>
    
           </div> 
        )
    }
}
//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default Todoitem