import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({})