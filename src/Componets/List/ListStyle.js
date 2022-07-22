import styled from "styled-components";

export const ListUl = styled.ul`
    width: 90%;
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    list-style: none;
    margin: 10px auto;
    border-radius: .6rem;
`
export const ListLi = styled.li`
    font-size: 1.2rem;
    font-family: sans-serif;
    color: #000;   
`

export const ListBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
        font-size: 1.6rem;
        cursor: pointer;
        margin-left: .6rem;

        &:nth-child(1){
            background: #144ded;
            padding: .4rem;
            color: #fff;
            border-radius: 50%;
        }

        &:nth-child(2){
            background: crimson;
            padding: .4rem;
            color: #fff;
            border-radius: 50%;
        }
    }
`