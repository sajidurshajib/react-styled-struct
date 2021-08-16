import styled from 'styled-components'
import Head from './Head'

export const H = styled(Head)`
    font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: ${props=> props.fontSize ? props.fontSize : '32px'};
    font-weight:400;
`