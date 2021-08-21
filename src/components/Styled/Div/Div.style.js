import styled from 'styled-components'
import Gdiv from './Gdiv'

export const Grid = styled(Gdiv)`
    margin: ${(props) => (props.margin ? props.margin : '0')};
    display: ${(props) => (props.display ? props.display : 'grid')};
    grid-template-columns: repeat(
        ${(props) => (props.repeat ? props.repeat : '1')},
        minmax(${(props) => (props.minmax ? props.minmax : ',1fr')})
    );
`
