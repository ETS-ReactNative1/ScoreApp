import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Product({data}) {

    function PrintNutriScore(score) {
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
           return(<Image style={{width: 200, height: 200}} source={require('../img/scoreE.png')} resizeMode="contain"/>)
          default:
            break;
        }
      }
      function PrintEcoScore(score) {
       switch (score) {
        case "a":
           return(<Image style={{width: 200, height: 200}} source={require('../img/ecoA.png')} resizeMode="contain"/>)
        case "b":
          return(<Image style={{width: 200, height: 200}} source={require('../img/ecoB.png')} resizeMode="contain"/>)
        case "c":
          return(<Image style={{width: 200, height: 200}} source={require('../img/ecoC.png')} resizeMode="contain"/>)
        case "d":
          return(<Image style={{width: 200, height: 200}} source={require('../img/ecoD.png')} resizeMode="contain"/>)
        case "d":
          return(<Image style={{width: 200, height: 200}} source={require('../img/ecoE.png')} resizeMode="contain"/>)
         default:
           break;
       }
     }

  return (
    
        <View style={styles.articles}>
                <Text style={styles.name_product}>{data.product.product_name_fr}</Text>
                <Image
                style={ styles.image_product}
                source={{uri : `${data.product.image_url}`}}
                resizeMode="contain"
                />
                {PrintNutriScore(data.product.nutrition_grade_fr)}
                {PrintEcoScore(data.product.ecoscore_data.grade_fr)}
                <Text style={styles.ingredients}>{data.product.ingredients_text_fr}</Text>
            </View>
    
  );
}

const styles = StyleSheet.create({
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
    ingredients:{
      textAlign: "justify",
      padding: 20
    }
  
});

export default Product;
