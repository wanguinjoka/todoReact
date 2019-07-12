import React,{Component } from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component    {
    getStyle = ()=> {
        return {
            background: '#4B9BB9',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through': 'none'
        }
    }
    
    render(){
        return(
           <div style = {this.getStyle()}>
           
               <p>
                   <input type="checkbox" 
                   onChange ={this.props.markComplete.bind(this,this.props.todo.id)} />{' '}
                    { this.props.todo.title}
                    
                </p>
    
           </div> 
        )
    }
}
//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default Todoitem