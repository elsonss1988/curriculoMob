import React from 'react';
import {View,Text} from 'react-native';
import style from './style';
const Card=()=>{
    return(
        <View style={style.card_container}>
        <View  style={style.card}>
          <View style={style.card_header}>            
            <Text> Formação Academica </Text>
          </View>
          <View style={style.card_content}>  
          <Text style={style.card_content_text}> Engenharia da Computação</Text> 
          <Text style={style.card_content_text}> Univesp</Text>       
          <Text style={style.card_content_text}> 08/2021</Text>             
          </View>
        </View>
      </View> 

    )
}

export default Card