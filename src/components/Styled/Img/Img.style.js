import styled from 'styled-components'
import ImgDiv from './ImgDiv'
import Img from './Img'

export const ImageDiv = styled(ImgDiv)`
    background: url(${(props) => (props.img ? props.img : '')});
    width: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '200px')};
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
    background-position: center;
    background-size: cover;
`

export const Image = styled(Img)`
    width: ${(props) => (props.width ? props.width : '200px')};
    height: ${(props) => (props.height ? props.height : '200px')};
    border: ${(props) => (props.border ? props.border : 'none')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
`
