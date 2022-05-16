import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/Images/Logo_2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SingInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSingInPressed = () => {
        console.warn("Sign In")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }

    const onSingInFacebook = () => {
        console.warn("Sign In Facebook")
    }

    const onSingInGoogle = () => {
        console.warn("Sign In Google")
    }

    const onSingInApple = () => {
        console.warn("Sign In Apple")
    }

    const onSingUpPressed = () => {
        console.warn("Sign Up")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height * 0.27}]} 
        resizeMode="contain" 
        />

        <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername} 
        />
        <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry
        />

        <CustomButton 
            text="Sign In" 
            onPress={onSingInPressed}
        />

        <CustomButton 
            text="ESQUECESTE A SENHA????" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY" 
            />
        <CustomButton 
            text="Sign In with Facebook" 
            onPress={onSingInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton 
            text="Sign In with Google" 
            onPress={onSingInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
        />
        <CustomButton 
            text="Sign In with Apple" 
            onPress={onSingInApple}
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
        <CustomButton 
            text="Don't have an account? Create one" 
            onPress={onSingUpPressed}
            type="TERTIARY"
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:   {
        alignItems: 'center',
        padding: 20,
    },
    logo:   {
        width: '70%',
        maxWidth: 300,
        height: 200,
    }
})

export default SingInScreen