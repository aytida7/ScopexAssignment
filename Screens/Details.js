import { View, Text, TextInput,Button,KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState } from "react";
import {  VStack ,useToast} from "native-base";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Details = ({ route }) => {
  const { sendAmt, rcvAmt, rate,userInfo } = route.params;
  const [rcptName, setrcptName] = useState("");
  const [bankdtl, setbankdtl] = useState("");
  const [senderName, setsenderName] = useState("");

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const toast = useToast();

  const navigation=useNavigation();
  

  const submit=async()=>{
    if(bankdtl && senderName && rcptName ){
    fetch(`https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

              createdAt: new Date(),
              sent_amount:sendAmt ,
              received_amount: rcvAmt,
              to:rcptName ,
              rate: rate,
              completed: false,
              pending: false,
              issue: true,
              user_id: userInfo.id,

      })
    })
    .then(res => {
      
      return res.json();
    })
    .then(
      (result) => {
        // console.log(result);
      },
      (error) => {
        // console.log(error);
      }
    )

    toast.show({
      render: () => {
        return <View><Text style={{color:'white',fontSize:20,fontWeight:600}}>Money Sent successfully</Text></View>;
      }
    });

    navigation.navigate('Bottomtab');
  }else{
    toast.show({
      render: () => {
        return <View><Text style={{color:'red',fontSize:20,fontWeight:600}}>Enter all fields</Text></View>;
      }
    });
  }
    
  }

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{flex:1}}>
    <View style={{height:windowHeight,backgroundColor:'black'}}>
    <VStack
      style={{ marginTop: 50, width: windowWidth - 100, alignSelf: "center",height:windowHeight }} space={10}
    >
      <VStack space={10}>
        <VStack space={5}>
          <Text style={{fontSize:50,color:'white'}}>Details</Text>
          <Text style={{fontSize:18,color:'white'}}>
            To Avoid delays your recipient name below should be match name on
            the bank account
          </Text>
        </VStack>
        <VStack space={10}>
          <VStack space={3}>
            <Text style={{fontSize:25,color:'white',fontWeight:600}}>Recipient name</Text>
            <TextInput
              style={{
                width: windowWidth - 80,
                height: windowHeight - 800,
                borderWidth: 1,
                borderColor: "white",
                borderRadius:5,
                fontSize: 20,
                color:'white'
                

              }}
              onChangeText={setrcptName}
              placeholder="e.g. Aditya"
            />
          </VStack>
          <VStack space={3}>
            <Text style={{fontSize:25,color:'white',fontWeight:600}}>Recipient bank details</Text>
            <TextInput
              style={{
                width: windowWidth - 80,
                height: windowHeight - 800,
                borderWidth: 1,
                borderColor: "white",
                fontSize: 20,
                borderRadius:5,
                color:'white'
              }}
              onChangeText={setbankdtl}
              placeholder="e.g. 123456789"
            />
          </VStack>
          <VStack space={3}>
            <Text style={{fontSize:25,color:'white',fontWeight:600}}>Sender Name</Text>
            <TextInput
              style={{
                width: windowWidth - 80,
                height: windowHeight - 800,
                borderWidth: 1,
                borderColor: "white",
                fontSize: 20,
                borderRadius:5,
                color:'white'
              }}
              onChangeText={setsenderName}
              placeholder="e.g. Rakesh"
            />
          </VStack>
        </VStack>
      </VStack>
      <Button title="Submit" onPress={submit}/>
    </VStack>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Details;
