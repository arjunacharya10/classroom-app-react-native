import {LOGIN_SUCCESS,LOGIN_FAIL} from './types';
import firebase from 'firebase';


export const loginUser=({email,password,navigation})=>{
    return (dispatch)=>{       
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user=>{
            navigation.navigate('App')
            dispatch({type:LOGIN_SUCCESS,payload:user});
        })
        .catch(err=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>{
                dispatch({type:LOGIN_SUCCESS,payload:user});
                navigation.navigate('App');
            })
            .catch(err=>{
                alert(err);
                dispatch({type:LOGIN_FAIL,payload:''});
            })
        })
    }
}


export const signupUser=({name,email,phone,organization})=>{
    //later
}