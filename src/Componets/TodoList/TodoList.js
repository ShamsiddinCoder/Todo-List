import React from 'react';
import List from '../List/List';
import {TodoLists} from './TodoListStyled';
import { useSelector } from 'react-redux';

export default function TodoList() {
    const state = useSelector(state => state.add);
    const choos = useSelector(choosState => choosState.choos);
    localStorage.setItem(`state`, JSON.stringify(state));

    let lits = state.map(keys => {
        if(choos === 'all'){
            return <List 
                    key={keys.id} 
                    name={keys.name} 
                    check={keys.complate}
                    id={keys.id}
                    checked={keys.complate}
                    />
        }else if(choos === 'complate'){
            if(keys.complate === true){
                return <List 
                    key={keys.id} 
                    name={keys.name} 
                    check={keys.complate}
                    id={keys.id}
                    checked={keys.complate}
                    />
            }
        }else if(choos === 'uncomplate'){
            if(keys.complate === false){
                return <List 
                    key={keys.id} 
                    name={keys.name} 
                    check={keys.complate}
                    id={keys.id}
                    checked={keys.complate}
                    />
            }
        }
    });

  return (
    <TodoLists>
        {lits}
    </TodoLists>
  )
}
