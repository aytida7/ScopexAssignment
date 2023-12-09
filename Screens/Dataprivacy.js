import { View, Text } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'

const Dataprivacy = () => {
  return (
    <View style={{backgroundColor:'black'}}>
    <VStack style={{margin:30,alignSelf:'center',justifyContent:'center',height:'100%'}} space={10}>
        <VStack space={5} >
            <Text style={{fontSize:40,fontWeight:700,color:'rgb(53, 128, 192)',alignSelf:'center'}}>Data</Text>
            <Text style={{fontSize:20,color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint et dolore iste sequi magnam eligendi tempore obcaecati suscipit possimus dolores nostrum vel molestias, laborum repellat rem quidem! Cumque, delectus cum. Necessitatibus aut id totam aperiam voluptatibus fuga. Quia dicta deserunt rerum consequatur voluptatum doloremque accusamus saepe sunt quos commodi!</Text>
        </VStack>
        <VStack space={5} >
            <Text style={{fontSize:40,fontWeight:700,color:'rgb(53, 128, 192)',alignSelf:'center'}}>Privacy</Text>
            <Text style={{fontSize:20,color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint et dolore iste sequi magnam eligendi tempore obcaecati suscipit possimus dolores nostrum vel molestias, laborum repellat rem quidem! Cumque, delectus cum. Necessitatibus aut id totam aperiam voluptatibus fuga. Quia dicta deserunt rerum consequatur voluptatum doloremque accusamus saepe sunt quos commodi!</Text>
        </VStack>
    </VStack>
    </View>
  )
}

export default Dataprivacy