import { H } from '../Styled/Heading/Heading.style'
import { Button, ButtonLink } from '../Styled/Button/Button.style'
import { ImageDiv, Image } from '../Styled/Img/Img.style'

const Home = () => {
    return (
        <div className="Home">
            <H>This is home</H>
            <Button borderRadius="50px">Hello Click</Button>
            <ButtonLink link={'www.google.com'} width={'100px'}>
                Link
            </ButtonLink>
            <ImageDiv
                img={'https://avatars.githubusercontent.com/u/24451343?v=4'}
                border={'5px solid #efefef'}
                borderRadius={'50%'}
            />

            <Image src={'https://avatars.githubusercontent.com/u/24451343?v=4'} />
        </div>
    )
}
export default Home
