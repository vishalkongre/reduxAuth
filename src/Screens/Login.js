import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Login } from '../store/actions'

const LoginScreen = ({ navigation }) => {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')
    const dispatch = useDispatch()
    const handleLogin = () => {
        Keyboard.dismiss()
        dispatch(Login(username, pass))
    }
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Welcome To WebVillee</Text>
            </View>
            <View style={styles.form}>
                <Text>Please Login To Continue</Text>
                <View style={styles.formItem}>
                    <TextInput
                        style={{ width: "90%", padding: 1, }}
                        placeholder="Email Address"
                        value={username}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={(text) => setusername(text)}
                    />
                </View>
                <View style={styles.formItem}>
                    <TextInput
                        style={{ width: "90%", padding: 1, }}
                        placeholder="Password"
                        value={pass}
                        onChangeText={(text) => setpass(text)}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text
                        style={{ color: "white", fontSize: 16, fontFamily: "b612" }}
                    >
                        Log In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'

    },
    heading: {
        marginVertical: 10
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    formItem: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 7,
        paddingVertical: 5,
        width: "70%",
        marginVertical: 10,
    },
    form: {
        marginVertical: '20%',
        alignItems: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: "#099FFF",
        borderRadius: 7,
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 20,
        paddingHorizontal: "28%",
    },

})