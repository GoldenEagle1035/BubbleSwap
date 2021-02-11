import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Heading, Link, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const LogoImg = styled.img`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 30%;
  }
`

const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <>
      <Flex>
        <LogoImg src='./images/Logo/BubbleDashboard.png' />
      </Flex>
    </>
  )
}

export default Hero
