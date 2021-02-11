import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const Wrap = styled.div`
  width: 50%;
  padding: 100px 0;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
  }
`

const Text = styled.p`
  color: #FD80B1;
  font-family: 'Chewy', cursive;
  font-size: 24px;
  line-height: 48px;
  @media (max-width: 768px) {
    text-align: center;
    line-height: 36px;
  }
`

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const ChartButton = styled(Link)`
  color: #FD80B1;
  background-color: #FFF007;
  margin-right: 20px;
  border-radius: 30px;
  height: 48px;
  padding: 0 50px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const BuyButton = styled(Link)`
  color: white;
  margin-right: 20px;
  border-radius: 30px;
  background-color: #FD80B1;
  height: 48px;
  padding: 0 50px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const Lorem = () => {
  const { t } = useTranslation()

  return (
    <Wrap>
      <Text>{t("DoubleBubble - The First BSC Token To Offer BTC & ETH Double-Bubble Dividend Rewards. A duel dividend token deployed on the BSC that rewards holders with the TWO BIGGEST cryptocurrencies available on the market")}<br/>
        {t("Earn BITCOIN and ETH automatically by simply holding the DoubleBubble token, the first of its kind token on the BSC")}</Text>
      <ButtonGroup>
        <ChartButton href="/chart">Chart</ChartButton>
        <BuyButton href="/buy">Buy</BuyButton>
      </ButtonGroup>
    </Wrap>
  )
}

export default Lorem
