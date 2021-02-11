import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const SocialWrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const SocialLink = styled(Link)`
  margin: 0 20px;
`

const FooterLink = styled(Link)`
  text-decoration: none !important;
  font-family: 'Chewy', cursive;
`

const FooterText = styled(Text)`
  color: #FD80B1;
  font-family: 'Chewy', cursive;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const FooterImg = styled.img`
  width: 50px;
`

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <SocialWrapper>
        <SocialLink href='https://t.me/DoubleBubbleToken'><FooterImg src='/images/menuicons/telegram-icon.png' /></SocialLink>
        <SocialLink href='https://twitter.com/doublebubblebsc'><FooterImg src='/images/menuicons/Twitter-icon.png' /></SocialLink>
      </SocialWrapper>
      <Wrapper>
        <FooterLink external href="https://docs.pancakeswap.finance/">
          <FooterText>
            {t('www.doublebubble.finance')}
          </FooterText>
        </FooterLink>
      </Wrapper>
    </>
  )
}

export default Footer