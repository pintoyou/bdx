import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import Logo from '../../../assets/img/balance.png'

import Button from '../../../components/Button'
import Page from '../../../components/Page'
import PageHeader from '../../../components/PageHeader'
import WalletProviderModal from '../../../components/WalletProviderModal'

import useModal from '../../../hooks/useModal'

import Farm from '../../Farm'

import FarmCards from './FarmCards'


const FarmsContainer: React.FC = () => {
  const { path } = useRouteMatch()
  // const { account } = useWallet()
  // const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  return <>
    <Route exact path={path}>
      <PageHeader
        icon={<img src={Logo} height="185" />}
               
      />
        <Box className="mt-4">
            <StyledHeading></StyledHeading>
            <StyledHeading>Earn GAME tokens by staking LP token</StyledHeading>
      <FarmCards />
      </Box>
    </Route>
    <Route path={`${path}/:farmId`}>
      <Farm />
    </Route>
   
            
           
  </>
  
}

const StyledInfo = styled.h3`
  color: #FCC9C5;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  > img{
    width: 20px;
    margin-right: 3px;
  }
  b {
    color: #FCC9C5;
  }
`
const StyledHeading = styled.h2`
  color: #FCC9C5;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`
const StyledParagraph = styled.p`
  color: #FCC9C5;
  text-align: center;
  margin-top: 10px;
`

const ReadMore = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #f6ea0370;
  background: #ffec0b0d;
  font-size: 14px;
  margin-top: 10px;
`

const StyledLogo = styled.div`
    .d-md-none {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`

const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
   
    align-items: center;
    
`
const SpacerRes = styled.div`
    .sc-iCoHVE {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`
export default FarmsContainer
