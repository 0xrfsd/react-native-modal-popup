import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: false })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: false }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >

<TouchableOpacity style={{  }} onPress={close}>
        <Text style={{ color: '#333', marginLeft: '80%', marginTop: 20 }}>Fechar</Text>
        </TouchableOpacity>

            <Text style={{ fontSize: 36, color: '#333', textAlign: 'center', marginTop: 20 }}>Wellness ®</Text>
            <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>Desfrute de experiências incríveis conosco.</Text>
            <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>🌿🏡✨</Text>

            <TouchableOpacity style={styles.btn} onPress={close}>
        <Text style={{ color: '#fff' }}>Ja possui conta? <Text style={{ fontWeight: 'bold'}}>Entrar agora</Text> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1} onPress={close}>
        <Text style={{ color: '#fff' }}>Ainda não possui conta? <Text style={{ fontWeight: 'bold'}}>Criar agora</Text> </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    height: '60%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn1: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  }
})

export default Modal