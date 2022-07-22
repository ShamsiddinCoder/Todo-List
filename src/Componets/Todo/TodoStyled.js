import styled from "styled-components";

export const Todos = styled.div`
    width: 700px;
    height: 200px;
    background: #fff;
    border-radius: .6rem;
    box-shadow: 0px 6px 4px rgba(0,0,0,.18);
    padding: 1rem;
    text-align: center;
    margin: 40px auto;
`

export const TodoName = styled.h1`
    color: #000;
    font-family: sans-serif;
    font-size: 1.6rem;
    margin: 10px 0;
`

export const TodoAction = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

export const AddTodo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 70%;
    border: none;
    outline: none;
    padding: .9rem;
    font-size: 1.4rem;
    border: solid 1px #ccc;
    border-radius: .6rem 0 0 .6rem;
`

export const SelectTodo = styled.select`
    width: 30%;
    padding: 1rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
    border: solid 1px #ccc;
    border-radius: 0 .6rem .6rem 0;
    cursor: pointer;
    font-weight: bold;
`

export const Button = styled.button`
    width: 100%;
    padding: .8rem;
    color: #fff;
    background: #246df3cc;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 1.4rem;
    border: none;
    outline: none;
    border-radius: .6rem;
    box-shadow: 0px 6px 4px rgba(0,0,0,.18);
`