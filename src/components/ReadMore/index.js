// Write your code here

import {useState} from 'react'
import {
  MainContainer,
  ReactHookHeading,
  Description,
  Image,
  DescriptionContainer,
  ReadMoreLessDescription,
  MoreButton,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [isReadMore, setReadMore] = useState(true)

  const descriptionText = isReadMore
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  const buttonText = isReadMore ? 'Read More' : 'Read Less'

  const onClickButton = () => setReadMore(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <ReactHookHeading>React Hooks</ReactHookHeading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <DescriptionContainer>
        <ReadMoreLessDescription>{descriptionText}</ReadMoreLessDescription>
        <MoreButton onClick={onClickButton}>{buttonText}</MoreButton>
      </DescriptionContainer>
    </MainContainer>
  )
}
export default ReadMore
