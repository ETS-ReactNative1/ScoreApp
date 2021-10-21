import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function FindPage() {

    const [barCode, setBarcode] = useState();
    const [data, setData] = useState();
    const [message, setMessage] = useState();


    function findData(barCode) {
        console.log(barCode);
        getInfo(barCode);
        setBarcode("")
        
    }

    const getInfo = async (barCode) => {
      fetch(`https://world.openfoodfacts.org/api/v0/product/${barCode}.json`)
         .then((res) => {
           res.json()
           .then((reponse) => {
             console.log(reponse.status);
             if (reponse.status === 1) {
               setMessage()
               setData(reponse)
             } else {
               setData()
               setMessage("Aucune données trouvées pour ce Code Barre")
               setTimeout(function(){ setMessage()}, 3000);
             }
           })
         })
         .catch((err) => console.log(err))
     }

     function PrintNutriScore(score) {
       console.log(score);
       switch (score) {
        case "a":
           return(<Image style={{width: 200, height: 200}} source={require('../img/scoreA.png')} resizeMode="contain"/>)
        case "b":
          return(<Image style={{width: 200, height: 200}} source={require('../img/scoreB.png')} resizeMode="contain"/>)
        case "c":
          return(<Image style={{width: 200, height: 200}} source={require('../img/scoreC.png')} resizeMode="contain"/>)
        case "d":
          return(<Image style={{width: 200, height: 200}} source={require('../img/scoreD.png')} resizeMode="contain"/>)
        case "d":
          return(<Image style={{width: 200, height: 200}} source={require('../img/scoreD.png')} resizeMode="contain"/>)
         default:
           break;
       }
     }

  return (
    <View style={styles.container}>
        <View style={styles.find_top}>
            <Text style={styles.title}>Entrez un code barre :</Text>
            <TextInput 
                style={styles.input}
                value={barCode}
                onChangeText={setBarcode}
                placeholder="ex : 3245413125316"
                keyboardType="numeric"
            />
            <Pressable style={styles.button_find}
                onPress={()=> findData(barCode)}>
                <Text /* style={styles.button_find} */>Rechercher</Text>
            </Pressable>
        </View>
        
        {data && 
          <ScrollView style={styles.scroll}>
            <View style={styles.articles}>
                <Text style={styles.name_product}>{data.product.product_name_fr}</Text>
                <Image
                style={ styles.image_product}
                source={{uri : `${data.product.image_url}`}}
                resizeMode="contain"
                />
                {PrintNutriScore(data.product.nutrition_grade_fr)}
            </View>
          </ScrollView>
        }
        {message && 
          <Text style={styles.message}>{message}</Text>
        }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db6ac',
    alignItems:"center"
  },
  find_top:{
    width: "100%",
    alignItems:"center",
  },
  title:{
    fontSize: 20,
    marginTop:20,
    marginBottom:20,
  },
  input:{
      borderWidth: 2,
      height:40,
      width:"75%",
      backgroundColor:"white",
      textAlign:"center",
      marginBottom:20,
  },
  button_find:{
      backgroundColor: "white",
      width:"50%",
      height:40,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 20,
      borderColor: "#00867d",
      borderWidth:2,
  },
  scroll:{
    flex:1,
    width:"100%",
  },
  articles:{
      backgroundColor: "white",
      width:"80%",
      marginTop:20,
      marginLeft:"auto",
      marginRight:"auto",
      borderRadius:20,
      borderWidth:2,
      borderTopLeftRadius: 20,
      borderColor: "#82e9de",
      alignItems: "center",
      marginBottom:50
  },
  name_product:{
    width:"100%",
    fontSize:20,
    textAlign:"center",
    backgroundColor: "#82e9de",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image_product:{
    marginTop:20,
    height:300,
    width:300
  },
  message:{
    marginTop:20,
    fontSize:20,
    width:"80%",
    textAlign:"center"
  }
});

export default FindPage;
//#4db6ac
//#82e9de
//#00867d

/* console.log(data?.code);
       console.log(data?.product.image_url);
       console.log(data?.product.ingredients_text_fr);
       console.log(data?.product.nutrition_grade_fr);
       console.log(data?.product.product_name_fr);
       console.log(data?.product.generic_name_fr);
       console.log(data?.product.ecoscore_data.grade_fr); */