import React from 'react';
import {Text,View} from 'react-native';


const Calloutcomp=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontFamily:'roboto',fontWeight:'700',fontSize:20}}>Title</Text>
                                    <Text>Date</Text>
                                    <View style={{flex:1,flexDirection:'row'}}>
                                        <Text style={{paddingRight:10}}>From</Text>
                                        <Text style={{paddingLeft:10}}>To</Text>
                                    </View>
                                    <Text>Interest</Text>
        </View>
    )
};

export default Calloutcomp;