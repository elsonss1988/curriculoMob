import React from 'react';
import {StyleSheet, View, Image, Text, Alert,TouchableOpacity} from 'react-native';
import foto from './assets/foto.png';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

const App=() => {
  function handleRedeSocial(rede_social){
    switch(rede_social){
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/eng-elson/')
      break
      case 'github':
        Alert.alert('Meu Github','https://www.github.com/elsonss1988')
      break
      case 'facebook':
        Alert.alert('Meu Facebook','https://www.linkedin.com/in/eng-elson/')
      break
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_header}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}>Elson Santos</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_socias}>
            <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
            <Icon name='github'    size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('facebook')}>
            <Icon name='facebook'  size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
            <Icon name='linkedin'  size={30}/>
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Experiência Profissional">
        <Text style={style.card_content_text}> Digital Solvers</Text> 
          <Text style={style.card_content_text}> Teleperformance</Text>       
          <Text style={style.card_content_text}> Follow-UPgit</Text>  
        </Card>
        <Card titulo="Formação Academica">
        <Text style={style.card_content_text}> Engenharia da Computação</Text> 
          <Text style={style.card_content_text}> Univesp</Text>       
          <Text style={style.card_content_text}> 08/2021</Text>  
        </Card>       
      </View>
    </>
  );
};

const style=StyleSheet.create({
  container_header:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
  },  
    page:{
      backgroundColor:'#E7E7E7',
      flex:1,
  },
  foto:{
    width:200,
    height:200,
    borderRadius:125,
  },
  nome:{
    fontSize:32,
    fontWeight:'bold',
    marginTop:10,
  },
  funcao:{
    color:'#939393',
    marginBottom:10,
  },
  redes_socias:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginTop:10,
  },
  card_content_text:{
    color:'#939393',
    marginBottom:5,
  }

});
export default App;
