import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import login from '../screens/login'
import HomeScreen from './HomeScreen';
import MyHeader from '../components/MyHeader'

export default class Exchange extends Component {
  constructor(){
    super()
    this.state={
        userName:firebase.auth().currentUser.email,
        name:'',
        description:'',
    }
  }
  addItem=(name, description)=>{
      var userName = this.state.userName;
      db.collection("exchange_requests").add({
          "username":userName,
          "item_name":this.state.name,
          "description":this.state.description,
      });
      this.setState({
          name:'',
          description:'',
      })
      return Alert.alert(
          'Item ready to exchange',
          '',
          [{text:'OK', 
          onPress:()=>{
          this.props.navigation.navigate('HomeScreen')
      }}
]
);
  }
  render(){
    return(
      <View style={{flex:1}}>
      <MyHeader title="Add Item"/>
      <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Item Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              name: text
            })
          }}
          value={this.state.name}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={[styles.formTextInput,{height:100}]}
          placeholder ={"Description"}
          onChangeText={(text)=>{
            this.setState({
              description: text
            })
          }}
          value={this.state.description}

        />
        <TouchableOpacity
          style={[styles.button,{marginTop:10}]}
          onPress = {()=>{this.addItem(this.state.name, this.state.description)}}
          >
          <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

})