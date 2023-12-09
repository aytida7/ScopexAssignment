import { View, Text ,Image, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { HStack,VStack } from 'native-base';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Profile = (data) => {

  const navigation=useNavigation();
  
  var pat=data.route.params.data;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  

  return (
    <VStack style={{alignItems:'center'}}>
      <VStack style={{alignItems:'center'}} space={20}>
      <VStack space={5} style={{alignItems:'center'}} >
      <Image source={{uri:pat.photo}} style={{height:windowHeight-650,width:windowWidth-250,marginTop:50,borderRadius:100}}/>
      <VStack space={1} style={{alignItems:'center'}}>
      <Text style={{fontSize:25}}>{pat.name}</Text>
      <Text style={{fontSize:17,color:'darkblue'}}>{pat.email}</Text>
      </VStack>
      </VStack>
      <VStack style={{alignItems:'center'}} space={6}>
        <TouchableOpacity onPress={()=>navigation.navigate('PersonalInfo')} style={{width:windowWidth-100,height:windowHeight-790,backgroundColor:'rgb(53, 128, 192)',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <HStack space={4} style={{alignItems:'center'}}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Personal Information</Text>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity style={{width:windowWidth-100,height:windowHeight-790,backgroundColor:'rgb(53, 128, 192)',borderRadius:20,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('Dataprivacy')}>
          <HStack space={4} style={{alignItems:'center'}}>
          <MaterialIcons name="privacy-tip" size={24} color="white" />
          <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Data and Privacy</Text>
          </HStack>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={null} style={{width:windowWidth-100,height:windowHeight-790,backgroundColor:'rgb(53, 128, 192)',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <HStack space={4} style={{alignItems:'center'}}>
          <FontAwesome5 name="hands-helping" size={24} color="white" />
          <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Help</Text>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={null} style={{width:windowWidth-100,height:windowHeight-790,backgroundColor:'rgb(53, 128, 192)',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
          <HStack space={4} style={{alignItems:'center'}}>
          <Ionicons name="people" size={24} color="white" />
          <Text style={{fontSize:20,color:'white',textAlign:'center'}}>About Us</Text>
          </HStack>
        </TouchableOpacity>
        
      </VStack>

      </VStack>

    </VStack>
    
    
  )
}

export default Profile