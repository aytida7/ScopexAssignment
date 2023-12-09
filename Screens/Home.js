import { StatusBar } from 'expo-status-bar';
import { View, Text, Button,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { VStack } from 'native-base';
import { Dimensions } from 'react-native';


const Home = (data) => {
  const a=data.route.params.data;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users');
        
        if (!response.ok) {
          throw new Error('Network request failed');
        }
  
        const data = await response.json();
  
        
        const emailToCheck = a.email;
        
        const userWithEmail = data.find(user => user.email === emailToCheck);
        console.log("rrr", userWithEmail);
        
        if (!userWithEmail) {
          const postResponse = await fetch('https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              createdAt: new Date(),
              name: a.name, 
              avatar: a.photo, 
              email_verified: false,
              kyc: true,
              email: a.email
            })
          });
  
          if (!postResponse.ok) {
            throw new Error('Failed to create a new user');
          }
  
          const result = await postResponse.json();
          console.log(result);
        } else {
          console.log('User found');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);
  
  

  
  const navigation=useNavigation();

  return (
    
    <VStack style={{backgroundColor:'black',height:windowHeight,alignItems:'center'}} space={19}>
        <VStack style={{marginTop:50,alignItems:'center'}} space={8}>
          <Text style={{color:'white',fontSize:35,width:windowWidth-100,fontWeight:700}}>Now, send money at real exchange rate!</Text>
          <Text style={{color:'white',fontSize:20}}>Say NO to money transfer fees.</Text>
        </VStack>
        <VStack>
          <Image source={require('../assets/globerevolvegif.gif')} style={{height:windowHeight-550}}/>
        </VStack>
        <Button title='Send Money Now' onPress={()=>navigation.navigate('Countryselect')} /> 

    </VStack>
      
      
      
    
  )
}

export default Home


