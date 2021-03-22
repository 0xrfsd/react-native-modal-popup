import React, { useState } from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import Modal from './Modal'

import Inicio from './assets/t.png'

const App = () => {
  const [modal, setModal] = useState(false)

  return(
      <ImageBackground source={Inicio} style={{ justifyContent: 'center', height: '100%', width: '100%', borderRadius: 20 }}>
      <Text style={{ fontSize: 40, marginTop: '10%', textAlign: 'left', color: '#fff', marginLeft: 10 }}>Wellness ®</Text>
      <Text style={{ fontSize: 22, marginTop: '1%', textAlign: 'left', color: '#fff', marginLeft: 10 }}>Muito mais que acomodações Experiências!</Text>

    <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text style={{ fontSize: 20 }}>Iniciar uma experiência única</Text>
      </TouchableOpacity>

      <Modal 
        show={modal}
        close={() => setModal(false)}
      />
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 290,
    marginTop: 20,
    marginLeft: 10
  }
})

export default App;