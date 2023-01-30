import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ScrollView } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'; 
import Menu from './Menu';
<Feather name="message-square" size={24} color="black" />
 const width = Dimensions.get('window').width
 const height = Dimensions.get('window').height
export default function Home() {
  return (
    <View>
      <View style={{flexDirection:'row',marginLeft:20,justifyContent:'space-between',marginRight:20}}>
       <TouchableOpacity>
        <View style={{width:50,height:50,borderWidth:1,borderRadius:10,borderColor:'grey',flexDirection:'column',alignContent:'center'}}>
                <View style={{width:30,height:1,borderWidth:2,borderColor:'grey',borderRadius:10,marginTop:18,marginLeft:10}}></View>
                <View style={{width:15,height:1,borderWidth:2,borderColor:'grey',borderRadius:10,marginTop:5,marginLeft:10}}></View>
            </View>
       </TouchableOpacity>
      <View style={{width:50,height:50,borderRadius:10,alignSelf:'center',alignItems:'center',alignContent:'center'}}>
         <Image source={require('../assets/user.png')} style={{height:50,width:50,borderRadius:20,alignSelf:'center',marginTop:0}} />
      </View>
      </View>

      <ScrollView scrollEnabled={true} horizontal={false} showsVerticalScrollIndicator={false}>
        
      <View style={{marginTop:20,marginLeft:20}}>
        <Text style={{fontSize:60,color:'#000051',borderColor:'#3c3c79',fontWeight:'bold'}}>Hello Sai!</Text>
        <Text style={{fontSize:17,color:'darkgrey',fontWeight:'600'}}>Welcome to your task manager.</Text>
      </View>

      <TouchableOpacity>
      <LinearGradient
        // Button Linear Gradient
        colors={['#ef6eac','#e74593','#e22580']}
        style={{width:width-50,height:height/4,borderRadius:20,alignSelf:'center',marginTop:20,shadowColor:'black',shadowRadius:50}}
       >
       <View style={{marginTop:60,flexDirection:'row',alignSelf:'center'}}>
        <View style={{flexDirection:'column'}}> 
        <Text style={{color:'white',fontSize:25,fontWeight:'800'}}> Today's Progress </Text>
        <Text style={{color:'white',fontSize:25,fontWeight:'800'}}> summary </Text>  
        <Text style={{color:'white',fontSize:18,fontWeight:'600',marginTop:20,marginLeft:5}}>1 of 5 completed</Text>
        </View>
        <View>
        <CircularProgress
          radius={55}
          activeStrokeColor={'#ffcb44'}
          value={20}
          valueSuffix={'%'}
          activeStrokeWidth={12}
          progressValueColor={'white'}
        />
        </View>
       </View>
      </LinearGradient>
      </TouchableOpacity>

      <Text style={{fontWeight:'bold',fontSize:20,marginLeft:15,marginTop:15}}>Task Overview</Text>
      <View style={{marginTop:15,marginLeft:15}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{backgroundColor:'#ffeef6',width:80,height:40,alignContent:'center',borderRadius:10,borderWidth:1,borderColor:'#ef6eac'}}>
           <Text style={{color:'#ef6eac',fontWeight:'600',textAlign:'center',marginTop:8,fontSize:18}}>To do</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',width:120,height:40,alignContent:'center',borderRadius:10,borderWidth:1,borderColor:'grey',marginLeft:15,marginRight:15}}>
           <Text style={{color:'grey',fontWeight:'600',textAlign:'center',marginTop:8,fontSize:18}}>In progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',width:120,height:40,alignContent:'center',borderRadius:10,borderWidth:1,borderColor:'grey',marginLeft:0,marginRight:15}}>
           <Text style={{color:'grey',fontWeight:'600',textAlign:'center',marginTop:8,fontSize:18}}>On review</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'white',width:120,height:40,alignContent:'center',borderRadius:10,borderWidth:1,borderColor:'green',marginLeft:0,marginRight:15}}>
           <Text style={{color:'grey',fontWeight:'600',textAlign:'center',marginTop:8,fontSize:18}}>Final done</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <ScrollView horizontal={true}
       showsHorizontalScrollIndicator={false}
       style={{marginLeft:15,marginTop:20}}>
        <TouchableOpacity>
        <View style={{width:width-30,height:height/4,backgroundColor:'#fff2f8',borderRadius:30}}>
          <View style={{alignSelf:'center'}}>
          <Text style={{fontWeight:'800',color:'#000051',fontSize:20,marginTop:30}}>Redesign landing page of </Text>
          <Text style={{fontWeight:'800',color:'#000051',fontSize:20,marginTop:5}}>travello website</Text>
          <Text style={{fontWeight:'bold',color:'darkgrey',fontSize:15,marginTop:10}}>After a long day of tour,guests can retire..</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:15,marginTop:20}}>
            <View style={{flexDirection:'row',marginLeft:40,marginTop:10}}>
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginTop:0}} />
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginLeft:-20}} />
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginLeft:-20}} />
            </View>
            <View style={{flexDirection:'row',marginRight:20}}>
            <Feather style={{alignSelf:'center'}} name="message-square" size={24} color="darkgrey" />
            <Text style={{textAlign:'center',alignSelf:'center',marginLeft:5,color:'darkgrey',fontWeight:'bold'}}>3 Comments</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{width:width-30,height:height/4,backgroundColor:'#f1fef6',borderRadius:30, marginLeft:20,marginRight:20}}>
          <View style={{alignSelf:'center'}}>
          <Text style={{fontWeight:'800',color:'#000051',fontSize:20,marginTop:30}}>Redesign landing page of </Text>
          <Text style={{fontWeight:'800',color:'#000051',fontSize:20,marginTop:5}}>travello website</Text>
          <Text style={{fontWeight:'bold',color:'darkgrey',fontSize:15,marginTop:10}}>After a long day of tour,guests can retire..</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:15,marginTop:20}}>
            <View style={{flexDirection:'row',marginLeft:40,marginTop:10}}>
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginTop:0}} />
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginLeft:-20}} />
            <Image source={{uri:'https://thispersondoesnotexist.com/image'}} style={{height:50,width:50,borderRadius:50/2,alignSelf:'center',marginLeft:-20}} />
            </View>
            <View style={{flexDirection:'row',marginRight:20}}>
            <Feather style={{alignSelf:'center'}} name="message-square" size={24} color="darkgrey" />
            <Text style={{textAlign:'center',alignSelf:'center',marginLeft:5,color:'darkgrey',fontWeight:'bold'}}>3 Comments</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
      </ScrollView>
        <View style={{flex: 1,justifyContent: 'flex-end',}}>
        <Menu />
        </View>
    </View>
    
  )
}