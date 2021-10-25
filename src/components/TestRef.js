import React, { useState , useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView,  ImageBackground,TouchableOpacity, TouchableHighlight, RefreshControl} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';





function FindPage() {

    

   

  return (
        <ScrollView style={styles.body}>
            <Text>Page de test</Text>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  body:{
      flex:1,
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