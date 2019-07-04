import React from 'react';
import {Text,View,Image,StatusBar,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {connect}from 'react-redux';
import {loginUser} from '../actions';


 class Login extends React.Component{

    state={
        enail:'',
        password:''
    }

    static navigationOptions={
        header:null
    }

    onEmailChange=(text)=>{
        this.setState({email:text})
    }

    onPasswordChange=(text)=>{
        this.setState({password:text});
    }

    onLoginPressed=()=>{
        this.props.navigation.navigate('App');
        //this.props.loginUser({email:this.state.email,password:this.state.password,navigation:''});
    }

    //sample added to merge
    
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" hidden/>
                <View style={styles.logoStyle}>
                    <Image  style={{width:200,height:100}} source={require('./images/book8.png')}/>
                    
                </View>
                    <View style={styles.formStyle}>
                        <View style={styles.inputStyle}>
                            <TextInput style={{color:'white'}}
                                value={this.state.email}
                                onChangeText={this.onEmailChange} 
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder="Email"
                                placeholderTextColor = "#aaa"
                                selectionColor="#ddd"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onFocus={()=>this.setState({borderWidth:1,backgroundColor:'#e8a87c'})}
                                onSubmitEditing={()=> this.password.focus()}
                                />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput style={{color:'white'}}
                                value={this.state.password} 
                                onChangeText={this.onPasswordChange}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder="Password"
                                secureTextEntry={true}
                                placeholderTextColor = "#aaa"
                                returnKeyType="done"
                                ref={(input) => this.password = input}
                                />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this.onLoginPressed}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>    
                    </View>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    const {user}= state.auth;
    return{user};
}

export default connect(mapStateToProps,{loginUser})(Login)


const styles={
    container:{
        flex:1,
        flexGrow:1,
        backgroundColor:'#116466',
        justifyContent:'center',
        alignItems:'center'
    },
    logoStyle:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    formStyle:{
        flex:1,
        position:'relative',
        marginBottom:20
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    inputStyle:{
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10  
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
         borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13
      }
}