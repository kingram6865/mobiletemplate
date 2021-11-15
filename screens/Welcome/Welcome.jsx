import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  position: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'    
  }
})

function Welcome({ navigation }) {
  return (
    <View style={ styles.position }>
      <Text>Welcome</Text>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Welcome" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go to Tour" onPress={() => navigation.navigate('Tour')} />
      <Button title="Go to DeviceList" onPress={() => navigation.navigate('DeviceList')} />
      <Button title="Go to DeviceDetail" onPress={() => navigation.navigate('DeviceDetail')} />
      <Button title="Go to Manufacturers" onPress={() => navigation.navigate('Manufacturers')} />
      <Button title="Go to MfgDetail" onPress={() => navigation.navigate('MfgDetail')} />
      <Button title="Go to Purchase" onPress={() => navigation.navigate('Purchase')} />
      <Button title="Go to TipsTricks" onPress={() => navigation.navigate('TipsTricks')} />
      <Button title="Go to Glossary" onPress={() => navigation.navigate('Glossary')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Go to Privacy" onPress={() => navigation.navigate('Privacy')} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  )
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default Welcome
