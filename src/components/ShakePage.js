import React ,{ useEffect,  useState }from 'react';
import { Text, View } from 'react-native';

import { DeviceMotion } from 'expo-sensors';

function ShakePage() {
  //mes fake data pour le moment ca sera un objet plus tard
  const [data, setData] = useState("mes data");
  // un state pour afficher mes data dans le render
  const [showData, setShowData] = useState(false);
  const [motionData, setMotionData] = useState()
  
  useEffect(() => {
    addEventOnMotion();
    return() => {
      removeEvent();
    }
  }, [])

  function addEventOnMotion() {
    _setInterval();
    DeviceMotion.addListener((deviceMotionData) => {
      setMotionData(deviceMotionData)
    });
  }

  function _setInterval() {
    DeviceMotion.setUpdateInterval(100);
  };

  function removeEvent() {
    DeviceMotion.removeAllListeners();
  }
  //si la vitesse depasse 5 (ca fera aussi -5 en décélérerant) execute ca
  if (motionData?.acceleration.x > 5) {
    console.log("acceleration ok");
    //Si je mets un setState ici ca plante "too many render"
    //setShowData(!showData)
  }
  
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Acceleration axe X</Text>
      {motionData && <Text>{motionData?.acceleration.x}</Text>}
      {showData && <Text>{data}</Text>}
      <Text>Rotation : </Text>
      {motionData && <Text>{motionData?.rotation.alpha}</Text>}
      {motionData && <Text>{motionData?.rotation.beta}</Text>}
      {motionData && <Text>{motionData?.rotation.gamma}</Text>}
    </View>
  );
}

export default ShakePage;