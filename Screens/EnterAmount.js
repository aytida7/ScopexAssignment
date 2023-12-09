import { View, Text,TextInput ,Button,KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useState,useEffect } from 'react'
import {  HStack, Input, VStack,useToast } from 'native-base'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EnterAmount = ({route}) => {

    const navigation=useNavigation();

    const {currency1,currency2}=route.params;
    const [rate, setRate] = useState(0);
    const [currencysym1, setCurrencysym1] = useState("");
    const [currencysym2, setCurrencysym2] = useState("");

    const [number,onChangeNumber]=useState('');

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const toast = useToast();
    
    

    
    
    
    useEffect(() => {

      const currencySendName=(currency1,currency2)=>{
        
        switch(currency1) {
            case '1':
              setRate(55.2)
              setCurrencysym1("SGD")
              break;
            case '2':
              setRate(29.3)
              setCurrencysym1("Dollar")
              break;
            case '3':
              setRate(65.2)
              setCurrencysym1("INR")
              break;
            case '4':
              setRate(34.43)
              setCurrencysym1("PKR")
              break;
            case '5':
              setRate(37.9)
              setCurrencysym1("LKR")
              break;
            case '6':
              setRate(15.4)
              setCurrencysym1("GBP")
              break;
            case '7':
              setRate(20.8)
              setCurrencysym1("CNY")
              break;
            default:
              setRate(10.2)
              setCurrencysym1("None")
          }


          switch(currency2) {
            case '1':
              
              setCurrencysym2("SGD")
              break;
            case '2':
              
              setCurrencysym2("Dollar")
              break;
            case '3':
              
              setCurrencysym2("INR")
              break;
            case '4':
              
              setCurrencysym2("PKR")
              break;
            case '5':
              
              setCurrencysym2("LKR")
              break;
            case '6':
              
              setCurrencysym2("GBP")
              break;
            case '7':
              
              setCurrencysym2("CNY")
              break;
            default:
              
              setCurrencysym2("None")
          }







    }

    currencySendName(currency1,currency2);
       
      }, [currency1])


    const conti=()=>{
      if(number){
        navigation.navigate('Details',{sendAmt:number,rcvAmt:number*55,rate:55})
      }else{
        toast.show({
          render: () => {
            return <View><Text style={{color:'red',fontSize:20,fontWeight:600}}>Enter Amount!!</Text></View>;
          }
        });
    
      }
    }

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{flex:1}}>
    <View style={{backgroundColor:'black',height:windowHeight}}>
     <VStack space={20} style={{alignItems:'center'}}> 
    <VStack style={{marginTop:100,alignSelf:'center',borderWidth:1,borderColor:'black',padding:20,borderRadius:15,backgroundColor:'white'}}>
        <VStack space={8}>
        <VStack space={5}>
        <VStack space={3}>
        <HStack space={3}>
        <Text style={{color:'blue',fontWeight:800,fontSize:20}}>You Send</Text>
        <Text style={{color:'purple',fontWeight:800,fontSize:20}}>(in {currencysym1})</Text>
        </HStack>
        <HStack>
        <TextInput
        style={{width:windowWidth-80,height:windowHeight-800,borderWidth:0.5,borderColor:'black',fontSize:20}}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Amount"
        keyboardType="numeric"
      />
      {/* <Text>{sendCurrency}</Text> */}
      </HStack>
      </VStack>
      <VStack space={3}>
        <HStack space={3}>
        <Text style={{color:'blue',fontWeight:800,fontSize:20}}>They receive</Text>
        <Text style={{color:'purple',fontWeight:800,fontSize:20}}>(in {currencysym2})</Text>
        </HStack>
        <View style={{width:windowWidth-80,height:windowHeight-800,borderWidth:0.5,borderColor:'black',fontSize:20}}>
            <Text style={{fontSize:20}}>{number*rate}</Text>
        </View>
      </VStack>
      </VStack>
      <VStack space={4} style={{width:windowWidth-80}}>
        <HStack space={20}>
            <Text style={{fontSize:18}}>Exchange Rate</Text>
            <Text style={{fontWeight:800,color:'red',fontSize:18}}>1 {currencysym1} = {rate} {currencysym2}</Text>
        </HStack>
        <HStack space={20}>
            <Text style={{fontSize:18}}>Fee                    </Text>
            <Text style={{fontWeight:800,color:'blue',fontSize:18}}>No Transfer Fee</Text>
        </HStack>
        <Button title='Continue' onPress={conti}/>
      </VStack>
      </VStack>
    </VStack>
    
    <Text style={{color:'white',fontSize:40,fontWeight:700}}>Scopex Transfer</Text>
    </VStack>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default EnterAmount