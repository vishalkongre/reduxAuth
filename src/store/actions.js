import AsyncStorage from '@react-native-async-storage/async-storage'


export const Init = () => {
    return async dispatch => {
        let userData = await AsyncStorage.getItem('userData')

        if (userData !== null) {
            const token = JSON.parse(userData).data
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }

    }

}

export const Login = (username, password) => {
    return async dispatch => {
        var token = null
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        fetch('https://app.hr4tally.in/user/android/login.php', {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(async (data) => {
            if (data.success == true) {
                token = data
                await AsyncStorage.setItem("userData", JSON.stringify({ data }));

                // navigation.replace("App");
                console.log('token stored', token);
                dispatch({
                    type: 'LOGIN',
                    payload: token,
                })
            } else {
                alert(data.message);
            }
        })

    }

}

export const Logout = () => {
    return async dispatch => {
        await AsyncStorage.removeItem('userData');
        dispatch({
            type: 'LOGOUT'
        })
    }

}