import React from 'react';
import {Text,View,TouchableOpacity,Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackActions } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from 'native-base';
import ImagePicker from 'react-native-image-picker';

const popAction=StackActions.pop({
    n:1
});



export default class Announcement extends React.Component{
    
    state={
        photo:null,
        subject:'',
        body:'',
        class:''
    }

    onSubjectChange=(text)=>{
        this.setState({subject:text});
    }

    onBodyChange=(text)=>{
        this.setState({body:text});
    }


    handleImagePress=()=>{
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
              skipBackup: true
            }
          };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled photo picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = {uri:response.uri};
              this.setState({
                photo: source
              });
            }
          });
    }
    
    
    render(){
        return(
            <View style={{flex:1}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.dispatch(popAction)} style={{flex:1,padding:10}}>
                            <Icon name="ios-close" size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:5}}>
                        <Text style={{textAlign:'center',fontFamily:'roboto',fontSize:24,fontWeight:'500'}}>Make Announcement</Text>
                        <View style={{margin:30,padding:10,flex:1,elevation:1,borderBottomWidth:1,borderBottomColor:'#ddd'}}>
                            <View style={{borderBottomWidth:1,borderColor:'#ddd'}}>
                                <TextInput value={this.state.subject} onChangeText={this.onSubjectChange} placeholder="Subject"/>
                            </View>
                            <View style={{flex:4,borderBottomWidth:1,borderColor:'#ddd'}}>
                                <View style={{flex:2}}>
                                <TextInput onChangeText={this.onBodyChange} placeholder="Body" multiline/>
                                </View>
                                <View style={{alignSelf:'flex-end'}}>
                                    <Text>{this.state.body.length}</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <Picker>
                                    <Picker.Item label="Class 1" value="Class 1"/>
                                    <Picker.Item label="Class 2" value="Class 2"/>
                                    <Picker.Item label="Class 3" value="Class 3"/>
                                    <Picker.Item label="Class 4" value="Class 4"/>
                                </Picker>
                            </View>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View>
                                {this.state.photo?
                                    
                                        <Image source={this.state.photo} style={{width:50,height:50}}/>
                                    
                                    :
                                    <View></View>
                                }
                                </View>
                                <View style={{flex:1,paddingTop:10}}>
                                    <TouchableOpacity onPress={this.handleImagePress} style={{flexDirection:'row',paddingHorizontal:10}}>
                                        <Icon name="ios-attach" size={24}/>
                                        <Text style={{paddingLeft:10}}>Attach image</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={{color:'white'}}>Announce</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles={
    buttonStyle:{
        flex:1,
        backgroundColor: '#007aff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginTop:20,
        borderColor: '#007aff',
        justifyContent:'center',
        alignItems:'center'
    }
}