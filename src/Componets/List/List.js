import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {chengeCustomersAction} from '../Redux/AddCustomers';
import {removeCustomersAction} from '../Redux/AddCustomers';
import {
    ListUl,
    ListLi,
    ListBtns
}
from './ListStyle';

export default function List({name, id, checked}) {
  const dispatch = useDispatch();

  return (
    <ListUl style={{
      opacity: checked ? '.7' : '1'
    }}>
        <ListLi style={{
          textDecoration: checked ? 'line-through' : ''
        }}>{name}</ListLi>
        <ListBtns>
            <i 
              onClick={() => dispatch(chengeCustomersAction(id))}
              className='bx bx-check'
            ></i>
            <i 
              onClick={() => dispatch(removeCustomersAction(id))}
              className='bx bxs-trash'
            ></i>
        </ListBtns>
    </ListUl>
  )
}
