import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

const GumFlex = styled(Flex)`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const GumImage = styled.img`
	width: 80%;
`

const GumAnimation = () => {

  return (
    <GumFlex justifyContent="center" alignItems="center" flexDirection="column">
      <GumImage src='./images/mouth/BubbleGum-Mouth.gif' />
    </GumFlex>
  )
}

export default GumAnimation
