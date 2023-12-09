import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect,useState } from 'react';
import {NativeBaseProvider, VStack,useToast} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigate from './Navigation/StackNavigate';
import { Dimensions } from 'react-native';


export default function App() {
  const [userInfo,setUserInfo]=useState("");
  
  const toast = useToast();


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const configureGoogleSignIn=()=>{
    GoogleSignin.configure({
      webClientId:"96572852797-clh1rl4541t4noilsifeu8uo2hs64906.apps.googleusercontent.com",
      androidClientId:"96572852797-kimrmgab2h95kd91qfhpi544i963bih0.apps.googleusercontent.com",
      iosClientId:""
      
    })
  }

  useEffect(()=>{
    configureGoogleSignIn();
  });


  const signIn = async () => {
    
  
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();   
      setUserInfo(userInfo);

      toast.show({
        render: () => {
          return <View><Text style={{color:'white',fontSize:30,fontWeight:600}}>SignedIn Successfully</Text></View>;
        }
      });
      

    } catch (error) {
      console.log(error.message);
    }
  };
  

  
  // const deleteRecipe = async () => {
  //   try {
  //     for (let index = 92; index <= 100; index++) {
  //       const response = await fetch(`https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers/${index}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to delete recipe');
  //     }
  
  //     console.log('Recipe deleted successfully');
        
  //     }
      
  //   } catch (error) {
  //     console.error('Error deleting recipe:', error.message);
  //   }
  // };
  
  
  
  
  return (
    
    <>
      <NativeBaseProvider>
      {userInfo?(<NavigationContainer><StackNavigate userInfo={userInfo.user}/></NavigationContainer>):(
      <VStack style={{alignItems:'center',justifyContent:'center',height:windowHeight,backgroundColor:'black'}} space={50}>
       <Text style={{color:'white',fontSize:30,fontWeight:700}}>Welcome to</Text> 
      <Image source={require('./assets/scopexblack.png')} style={{width:windowWidth-100,height:windowHeight-750,borderRadius:30}}/>  
      <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark} onPress={signIn} style={{borderWidth:5,borderColor:'black'}}/>
      </VStack>
      )}
      {/* <Button onPress={deleteRecipe} title='dlt'/> */}
      </NativeBaseProvider>
    </>
    
  );
}




// try {
//   const response = await fetch("https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users");
//   const result = await response.json();
//   setarr(result);
//   console.log("sdfasdfasf", arr.length);
// } catch (error) {
//   console.log(error);
// }
// var count=0;
// for (let index = 0; index < arr.length; index++) {
//   if(arr[index].email===userInfo.user.email){
//     count=1;
//   }
// }
// console.log("this is coutn",count);

// if(count===0){
// try {
//   const response = await fetch("https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       createdAt: new Date(),
//       name: userInfo.user.name,
//       avatar: userInfo.user.photo,
//       email_verified: false,
//       kyc: true,
//       email: userInfo.user.email
//     })
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const result = await response.json();
//   // Process the result as needed
//   // console.log("headers afd", result);

// } catch (error) {
//   console.error("Error:", error);
// }

// }else{
// console.log("not posted");
// }