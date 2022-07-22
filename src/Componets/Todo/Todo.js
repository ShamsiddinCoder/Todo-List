import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {addCustomersAction} from '../Redux/AddCustomers';
import {choosCustomerAction} from '../Redux/ChoosCustomer';

import {
    Todos,
    TodoName,
    TodoAction,
    AddTodo,
    Input,
    SelectTodo,
    Button
}
from './TodoStyled';

export default function Todo() {
    const dispatch = useDispatch();
    const selecState = useSelector(states => states.add);
    const [title, setTitle] = useState('');
    const addCustomer = () => {
        let a = false;
        selecState.map(titles => {
            a = a || titles.name === title
        });

        if(title === ''){
            alert('Iltimos formani to\'ldiring');
        }else {
            if(a){
                alert(`Iltimos formani tekshirib qaytadan to'ldiring`);
            }else {
                dispatch(addCustomersAction(title));
            }
        }
        setTitle('');
    }

  return (
    <Todos>
        <TodoName>Todo Lost</TodoName>
        <TodoAction>
            <AddTodo>
                <Input 
                    type="text" 
                    placeholder="Add Names" 
                    onChange={(names) => setTitle(titl => titl = names.target.value)}
                    value={title}
                />
                <SelectTodo onChange={(value) => dispatch(choosCustomerAction(value.target.value))}>
                    <option value='all'>All</option>
                    <option value='complate'>Complate</option>
                    <option value='uncomplate'>Uncomplate</option>
                </SelectTodo>
            </AddTodo>
            <Button onClick={() => addCustomer(title)}>Add</Button>
        </TodoAction>
    </Todos>
  )
}
