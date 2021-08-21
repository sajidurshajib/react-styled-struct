import styled from 'styled-components'
import Btn from './Btn'
import Href from './Href'

export const Button = styled(Btn)`
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '2px')};
    display: ${(props) => (props.display ? props.display : 'inline')};
    min-width: ${(props) => (props.minWidth ? props.minWidth : '20px')};
    width: ${(props) => (props.width ? props.width : 'auto')};
    padding: 10px 20px;
    margin: 10px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    position: relative;
    overflow: hidden;
    transition: 250ms;
    &:hover {
        background-color: var(--primary-dark);
        cursor: pointer;
    }
    &:focus,
    &:visited {
        outline: 0;
        border: none;
    }
`
export const ButtonLink = styled(Href)`
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '2px')};
    display: ${(props) => (props.display ? props.display : 'inline')};
    min-width: ${(props) => (props.minWidth ? props.minWidth : '20px')};
    width: ${(props) => (props.width ? props.width : 'auto')};
    padding: 10px 20px;
    margin: 10px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    position: relative;
    overflow: hidden;
    transition: 250ms;
    text-decoration: none;
    &:hover {
        background-color: var(--primary-dark);
        cursor: pointer;
    }
    s &:focus,
    &:visited {
        outline: 0;
        border: none;
    }
`
