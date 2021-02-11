import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@pancakeswap/uikit'
import Page from '../Layout/Page'
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PageLoader: React.FC = () => {
  return (
	<Wrapper>
		<BounceLoader color="#FD80B1" loading={true} css={override} size={150} />
	  {/*<Spinner />*/}
	</Wrapper>
  )
}

export default PageLoader
