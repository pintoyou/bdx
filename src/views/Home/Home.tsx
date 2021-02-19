import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
// import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import CustomCountDown from './components/CustomCountDown'
import Icon_Tip from '../../assets/img/pro-tip-icon.svg'
import { START_REWARD_AT_BLOCK } from '../../sushi/lib/constants'
import BscxLogo from '../../assets/img/logo-icon.svg'
import FarmCards from '../Farms/components/FarmCards'
import TotalLockValue from './components/TotalLockValue'

const Home: React.FC = () => {
  var block = 99999999999
  const launchBlock = START_REWARD_AT_BLOCK
  const [atDate, setDate] = useState<any>()

  return (
    <Page>
        <SpacerRes>
            <Spacer size="lg" />
            <StyledLogo>
                <img className="d-md-none" src={BscxLogo} height="150" style={{ marginTop: -4 }} />
            </StyledLogo>
        </SpacerRes>
        <Spacer size="lg" />
        <div style={{fontWeight: 'bold', fontSize: 22, color: '#393136'}}>
            Game Price: <span style={{color: '#FCC9C5', fontSize: 30}}>$<TotalLockValue /></span>
        </div>
        {block < launchBlock && atDate && <>
            <Spacer size="sm" />
            <CustomCountDown date={atDate}/>
            <Spacer size="md" />
          
            <Spacer size="lg" />
            </>
        }
        {block >= launchBlock && <>
            <Spacer size="lg" />
            <Container>
                <Balances />
            </Container>
            <Spacer size="md" />
          
            {/*<Spacer size="lg" />*/}
            </>
        }
      
        
    </Page>
  )
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
export default Home
