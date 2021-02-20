import React from 'react'
import styled from 'styled-components'
import { Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import FarmsContainer from './components/FarmsContainer'


const Farms: React.FC = () => {
  return (
    
     <Box className="mt-4">  <FarmsContainer /> </Box> 
     
  )
}

const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
    display: flex;
  align-items: start;
  justify-content: center;
    
`
export default Farms
