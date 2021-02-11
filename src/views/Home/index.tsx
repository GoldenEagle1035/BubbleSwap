import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import Lorem from './components/Lorem'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import GumAnimation from './components/GumAnimation'
import Footer from './components/Footer'
import UserBanner from './components/UserBanner'

const Flex = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledHeroSection = styled(PageSection)`
  padding: 0;
  background-color: transparent;
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
        <Flex>
          <Lorem />
          <GumAnimation />
        </Flex>
        <Footer />
      </StyledHeroSection>
    </>
  )
}

export default Home
