import React ,{ useEffect,  useState }from 'react';
import { Text, View } from 'react-native';

import { DeviceMotion } from 'expo-sensors';

function ShakePage() {
  const [DM , setDM] = useState(null);
  const [data, setData] = useState("Article")
  
  DeviceMotion.setUpdateInterval(10)

  useEffect(()=> {
      DeviceMotion.addListener(motion => {
        setDM(motion)
      })
     
      
  },[])


  if (DM) {
    if (DM.acceleration.x >= 30) {
      console.log("---");
      console.log("ca bouge30");
      console.log("---");
      DeviceMotion.removeAllListeners();
    }
  }
  

  

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>
        Try editing me! 2🎉
      </Text>
      {data && <Text>{data}</Text>}
      {DM && <Text>{DM.acceleration.x}</Text>}
    </View>
  );
}

export default ShakePage;