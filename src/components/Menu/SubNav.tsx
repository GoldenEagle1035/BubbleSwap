import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  padding: 48px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px 0;
  }
`

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

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <Flex>
        <LogoImg src='./images/Logo/BubbleSwap.png' />
        {/*<StyledNav>
          <ButtonMenu activeIndex={getActiveIndex(location.pathname)} scale="sm" variant="subtle">
            <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
              {t('Swap')}
            </ButtonMenuItem>
            <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
              {t('Liquidity')}
            </ButtonMenuItem>
          </ButtonMenu>
        </StyledNav>*/}
      </Flex>
    </StyledNav>
  )
}

export default Nav
