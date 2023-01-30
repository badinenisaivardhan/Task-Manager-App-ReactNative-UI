import { View, Text, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


export default function Menu() {
    const MarginCourt = 15
  return (
    <View style={{marginTop:0}}>
        <View style={{width:width,height:80,backgroundColor:'white',borderWidth:1,borderColor:'white'}}>
       <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'center',alignItems:'center',marginTop:20,width:width}}>
            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:MarginCourt,marginRight:MarginCourt}}>
                    <TouchableOpacity>
                        <Octicons style={{alignSelf:'center',alignContent:'center'}} name="home" size={32} color="#000051" />
                        <View style={{width:10,height:10,borderRadius:10/2,backgroundColor:'#000051',marginTop:5,alignSelf:'center'}}></View>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:MarginCourt,marginRight:MarginCourt}}>  
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="calendar-month-outline" size={30} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{marginTop:20,alignSelf:'center',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#ef6eac','#e74593','#e22580']}
                        style={{width:90,height:90,borderRadius:90/2,shadowColor:'pink',shadowOpacity:20,shadowRadius:50,marginTop:-100,borderColor:'white',borderWidth:10,alignItems:'center'}}
                    >
                    <Text style={{fontSize:50,color:'white',alignSelf:'center'}}>+</Text>
                    </LinearGradient>
                </TouchableOpacity>
                 </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:MarginCourt,marginRight:MarginCourt}}>  
                    <TouchableOpacity>
                        <Octicons name="bell" size={30} color="grey" />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:MarginCourt,marginRight:MarginCourt}}>  
                    <TouchableOpacity>
                        <Octicons name="gear" size={30} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
       </View>
    </View>
    </View>
  
  )
}