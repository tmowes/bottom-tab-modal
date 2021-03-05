import React from 'react'

import * as S from './styles'
import { HomeProps } from './types'

const Home = (props: HomeProps) => {
  const { any } = props
  return (
    <S.Container>
      <S.Title>Home</S.Title>
    </S.Container>
  )
}

export default Home
