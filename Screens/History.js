import { View, Text,Button ,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { HStack, VStack } from 'native-base'
import { Dimensions } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const History = (data) => {
 
  const a=data.route.params.data
  

  const [userData, setUserData] = useState(null);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

    const isFocused = useIsFocused();  
  

 useEffect(() => {
 
  const fetchData = async () => {
    try {
      const response = await fetch('https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers');
      
      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const data = await response.json();
    
      const userWithUserId = data.filter(user => user.user_id === a.id);
      
      if (userWithUserId) {
        setUserData(userWithUserId);
      } else {
        console.log('User not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  fetchData();

if(isFocused){
  fetchData();
}
  
 
   
 }, [isFocused])
 

  const renderItem = ({ item }) => {
    
    return (
      <VStack space={3} style={{backgroundColor:'rgb(53, 128, 192)',width:windowWidth-60,height:windowHeight-600,alignSelf:'center',marginTop:30,padding:10,alignItems:'center',borderRadius:20}}>
        <View style={{flexDirection: 'row',width:windowWidth-80}}>
        <Text style={{fontSize:20,color:'black',fontWeight:600}}> sent transaction to : </Text>
        <Text style={{fontSize:20,color:'white',fontWeight:600}}>{item.to}</Text>
        </View>
        <View style={{flexDirection: 'row',width:windowWidth-80}}>
          <Text style={{fontSize:20,color:'black',fontWeight:600}}>sent amount : </Text>
          <Text style={{fontSize:20,color:'white',fontWeight:600}}>{item.sent_amount}</Text>
        </View>
        <View style={{flexDirection: 'row',width:windowWidth-80}}>
          <Text style={{fontSize:20,color:'black',fontWeight:600}}>Amount received : </Text>
          <Text style={{fontSize:20,color:'white',fontWeight:600}}>{item.received_amount}</Text>
        </View>
        <View style={{flexDirection: 'row',width:windowWidth-80}}>
        <Text style={{fontSize:20,color:'black',fontWeight:600}}>This transaction was done on {item.createdAt}</Text>
        </View>
      </VStack>
  );
  }

  return (
    <>
    {userData ? (
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    ):(<View style={{width:windowWidth,height:windowHeight,alignSelf:'center'}}><Text>No Transactions Yet!!</Text></View>)}
    </>
    
  
  )
}

export default History