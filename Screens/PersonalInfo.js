import { View, Text,Image } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import { Dimensions } from 'react-native'

const PersonalInfo = (userInfo) => {
  const a=userInfo.route.params.userInfo;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  return (
    <VStack style={{marginTop:10,height:windowHeight,justifyContent:'center',width:windowWidth/1.3}} space={10}>
      <VStack space={3} style={{marginLeft:15}}>
        <Text style={{fontSize:22}}>Your Image</Text>
        <Image source={{uri:a.photo}} style={{width:windowWidth-300,height:windowHeight-700}} />
      </VStack>
      <VStack space={3} style={{marginLeft:15}}>
        <Text style={{fontSize:22}}>User Id</Text>
        <Text style={{fontSize:22,borderColor:'black',padding:3,backgroundColor:'rgb(53, 128, 192)',color:'white',fontWeight:700}}>{a.id}</Text>
      </VStack>
      <VStack space={3} style={{marginLeft:15}}>
        <Text style={{fontSize:22}}>Given name</Text>
        <Text style={{fontSize:22,borderColor:'black',padding:3,backgroundColor:'rgb(53, 128, 192)',color:'white',fontWeight:700}}>{a.givenName}</Text>
      </VStack>
      <VStack space={3} style={{marginLeft:15}}>
        <Text style={{fontSize:22}}>Family name</Text>
        <Text style={{fontSize:22,borderColor:'black',padding:3,backgroundColor:'rgb(53, 128, 192)',color:'white',fontWeight:700}}>{a.familyName}</Text>
      </VStack>
      <VStack space={3} style={{marginLeft:15}}>
        <Text style={{fontSize:22}}>Email Id</Text>
        <Text style={{fontSize:22,borderColor:'black',padding:3,backgroundColor:'rgb(53, 128, 192)',color:'white',fontWeight:700}}>{a.email}</Text>
      </VStack>

    </VStack>
  )
}

export default PersonalInfo