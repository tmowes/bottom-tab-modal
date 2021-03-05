import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import * as P from '../pages'
import { AppRoutesProps } from './types'

const { Navigator, Screen } = createStackNavigator<AppRoutesProps>()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#15161E' },
      }}
    >
      <Screen name="Reflectly" component={P.Reflectly} />
    </Navigator>
  </>
)

export default AppRoutes
