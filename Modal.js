import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Dimensions, KeyboardAvoidingView, Keyboard, Alert } from 'react-native'

const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: false }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: false }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: false })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: false }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: false }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: false })
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    const [isRoot, setIsRoot] = useState(true);
    const [isLogin, setIsLogin] = useState(null);
    const [isRegister, setIsRegister] = useState(null);
    const [keyboardUp, setKeyboardUp] = useState(null);

    const Root = () => {
        return (
            <>
                <Text style={{ fontSize: 36, color: '#333', textAlign: 'center', marginTop: 20 }}>Wellness ®</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>Desfrute de experiências incríveis conosco.</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>🌿🏡✨</Text>

                <TouchableOpacity style={styles.btn} onPress={() => {
                    setIsRoot(false);
                    setIsLogin(true)
                }}>
                    <Text style={{ color: '#fff' }}>Ja possui conta? <Text style={{ fontWeight: 'bold' }}>Entrar agora</Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn1} onPress={() => {
                    setIsRoot(false);
                    setIsRegister(true);
                }}>
                    <Text style={{ color: '#fff' }}>Ainda não possui conta? <Text style={{ fontWeight: 'bold' }}>Criar agora</Text> </Text>
                </TouchableOpacity>
            </>
        )
    }

    const Login = () => {
        return (
            <View>
                <Text style={{ fontSize: 36, color: '#333', textAlign: 'center', marginTop: 20 }}>Wellness ®</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>Desfrute de experiências incríveis conosco.</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>🌿🏡✨</Text>
                <TextInput
                    onBlur={Keyboard.dismiss}
                    style={{ width: '90%', margin: '5%', borderBottomColor: '#333', borderRadius: 10, color: '#333' }}
                    placeholder="Nome"
                    autoCapitalize="none"
                />
                <TextInput
                    onBlur={Keyboard.dismiss}
                    secureTextEntry={true}
                    style={{ width: '90%', margin: '5%', borderRadius: 10, color: '#333' }}
                    placeholder="Senha"
                />
                <TouchableOpacity style={styles.btn} onPress={() => { }}>
                    <Text style={{ color: '#fff' }}>Entrar <Text style={{ fontWeight: 'bold' }}>Entrar agora</Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn1} onPress={() => {
                    setIsLogin(false);
                    setIsRegister(true);
                }}>
                    <Text style={{ color: '#fff' }}>Ainda não possui conta? <Text style={{ fontWeight: 'bold' }}>Criar agora</Text> </Text>
                </TouchableOpacity>
            </View>
        )
    }

    const Register = () => {
        return (
            <>
                <Text style={{ fontSize: 36, color: '#333', textAlign: 'center', marginTop: 20 }}>Wellness ®</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10 }}>Desfrute de experiências incríveis conosco.</Text>
                <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginTop: 10, marginBottom: 10 }}>🌿🏡✨</Text>
                <TextInput
                    onBlur={Keyboard.dismiss}
                    style={{ width: '90%', margin: '5%', borderBottomColor: '#333', borderRadius: 10, color: '#333' }}
                    placeholder="Nome"
                    autoCapitalize="none"
                />
                <TextInput
                    onBlur={Keyboard.dismiss}
                    secureTextEntry={true}
                    style={{ width: '90%', margin: '5%', borderRadius: 10, color: '#333' }}
                    placeholder="Senha"
                />
                <TextInput
                    onBlur={Keyboard.dismiss}
                    secureTextEntry={true}
                    style={{ width: '90%', margin: '5%', borderRadius: 10, color: '#333' }}
                    placeholder="Senha"
                />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    Keyboard.dismiss
                }}>
                    <Text style={{ color: '#fff' }}>Register <Text style={{ fontWeight: 'bold' }}>Cadastre-se agora</Text> </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn1} onPress={() => {
                    setIsRegister(false);
                    setIsLogin(true);
                }}>
                    <Text style={{ color: '#fff' }}>Já possui conta? <Text style={{ fontWeight: 'bold' }}>Entrar agora</Text> </Text>
                </TouchableOpacity>
            </>
        )
    }

    const Key = () => {
        return(
            <KeyboardAvoidingView
            style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
              <TouchableWithoutFeedback style={{ marginTop: '30%', height: '70%' }} onPress={Keyboard.dismiss}>
                <View>
                {
                        isRoot
                            ? <Root />
                            : isLogin ? <Login /> : <Register />
                    }
                </View>
                </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
        )
    }

    return (
<Animated.View
                style={[styles.container, {
                    opacity: state.opacity,
                    transform: [
                        { translateY: state.container }
                    ]
                }]}
            >
    
                <TouchableOpacity style={{ height: '100%', width: '100%' }} onPress={() => {
                    setIsRoot(true);
                    close();
                }}>
                </TouchableOpacity>
                <Animated.View
                    style={[styles.modal, {
                        transform: [
                            { translateY: state.modal }
                        ]
                    }]}
                >
    
                    <Key />
    
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
        height: 'auto',
        maxHeight: 500,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
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