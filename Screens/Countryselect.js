import { View, Text ,Button} from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import {  VStack,useToast } from 'native-base';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Countryselect = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const navigation=useNavigation();

    const [selectedfrom,setSelectedfrom]=useState("");
    const [selectedto,setSelectedto]=useState("");

    const toast = useToast();

    
    const data = [
        {key:'1', value:'Singapore',rate:'12',currency:'SGD'},
        {key:'2', value:'USA',rate:'3',currency:'Dollar'},
        {key:'3', value:'India',rate:'5',currency:'INR'},
        {key:'4', value:'Pakistan',rate:'215',currency:'PKR'},
        {key:'5', value:'Sri Lanka',rate:'115',currency:'LKR'},
        {key:'6', value:'England',rate:'11',currency:'GBP'},
        {key:'7', value:'China',rate:'33',currency:'CNY'},
    ]

   
    const next=()=>{
      if(selectedfrom && selectedto){
        navigation.navigate('EnterAmount',{currency1:selectedfrom,currency2:selectedto})
      }else{
        toast.show({
          render: () => {
            return <View><Text style={{color:'red',fontSize:25,fontWeight:600}}>Select all fields</Text></View>;
          }
        });
      }
      
    }
    

  return (
    <View style={{alignSelf:'center',width:windowWidth-100,marginTop:100,height:windowHeight-300}}>
    <VStack>
        <VStack space={10}>
            <Text style={{fontSize:30,fontWeight:700}}>Where do you want to send money?</Text>
        <VStack space={8}>
       <VStack space={2}>    
      <Text style={{fontWeight:'800',color:'blue',fontSize:20}}>Sending From</Text>
       <SelectList 
        setSelected={(val) => setSelectedfrom(val)} 
        data={data} 
        save="rate"
       />
       </VStack> 
       <VStack space={2}>
      <Text style={{fontWeight:'800',color:'blue',fontSize:20}}>Sending To</Text>
       <SelectList 
        setSelected={(val) => setSelectedto(val)} 
        data={data} 
        save="currency"
       />
       </VStack>
       </VStack>
       <Button title='Next' onPress={next} color="black"/>
       </VStack>  
    </VStack>
    </View>
  )
}

export default Countryselect