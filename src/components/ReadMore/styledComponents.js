// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const ReactHookHeading = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  font-weight: bold;
  color: #1e293b;
  align-self: center;
  @media screen and (min-width: 767px) {
    font-size: 40px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: #334155;
  align-self: center;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`

export const Image = styled.img`
  height: 30%;
  width: 40%;
  @media screen and (min-width: 767px) {
    height: 40%;
    width: 50%;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 40%;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
`

export const ReadMoreLessDescription = styled.p`
  font-size: 16px;
  font-family: Roboto;
  font-weight: bold;
  color: #334155;
  align-self: center;
  @media screen and (min-width: 767px) {
    font-size: 20px;
  }
`

export const MoreButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #1f81ff;
  color: #ffffff;
  align-self: center;
  outline: 0px;
  border-width: 0px;
`
