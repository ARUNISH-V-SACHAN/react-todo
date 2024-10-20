import React, {Component} from "react";
import TodoItems from "./todoItems";

export default class TodoList extends Component {
    render (){
        return (
        <div>
            <h4> <TodoItems/></h4>
            hello from todo List
        </div>
   ) }
}