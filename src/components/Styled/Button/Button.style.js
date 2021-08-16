import styled from "styled-components";
import Btn from "./Btn"

export const Button = styled(Btn)`
    padding: 10px 20px;
    border-radius: 2px;
    background-color: #187bcd;
    color: #fff;
    border: none;
    position: relative;
    overflow: hidden;
    transition: 250ms;
    &:hover{
        background-color: #1167b1;
        cursor: pointer;
    }s
    &:focus, &:visited{
        outline: 0;
        border: none;
    }
`