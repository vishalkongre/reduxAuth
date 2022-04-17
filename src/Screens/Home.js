import { StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from '../store/actions'

const Home = ({ navigation }) => {
    const [usrData, setusrData] = useState()
    const dispatch = useDispatch()
    const a = [1, 2, 3]
    const b = [4, 5, 6]
    const token = useSelector(state => state.Reducers.authToken);

    console.log(token);
    const handleLogout = async () => {
        dispatch(Logout())
    }
    if (token) {
        return (
            <View style={[styles.container, { backgroundColor: Platform.OS === 'ios' ? 'red' : 'green' }]}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Welcome {token.firstname} {token.lastname}</Text>
                    <Text style={{ color: 'white' }}>email : {token.email}</Text>
                    <Text style={{ color: 'white' }}>employee Id : {token.employee_id}</Text>
                    <Image source={{ uri: `${token.photo}/man-with-laptop-thinking-trans.png` }} style={{ height: 200, width: 200 }} />
                    <Text style={{ color: 'white' }}>output : {a + ',' + b}</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogout}
                >
                    <Text
                        style={{ color: "white", fontSize: 16, fontFamily: "b612" }}
                    >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (<View>
            <Text>No data found</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogout}
            >
                <Text
                    style={{ color: "white", fontSize: 16, fontFamily: "b612" }}
                >
                    Logout
                </Text>
            </TouchableOpacity>
        </View>)
    }

}

export default Home

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