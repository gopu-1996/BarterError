import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      address: '',
      firstname: '',
      lastname: '',
      phone: '',
      confirmpassword: '',
      imv: false,
    }
  }

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  showmodal = ()=>{
    return(
      <Modal 
      animationType='slide'
      transparent={true}
      visible={this.state.imv}>
        <TextInput style={styles.loginBox}
                  placeholder="First Name"
                  maxLength={10}
                  onChangeText={(txt)=>{
                      this.setState({firstname:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="Last Name"
                  maxLength={10}
                  onChangeText={(txt)=>{
                      this.setState({lastname:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="Address (for app)"
                  onChangeText={(txt)=>{
                      this.setState({address:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="Contact Number"
                  keyboardType='number-pad'
                  onChangeText={(txt)=>{
                      this.setState({phone:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="E-Mail ID"
                  keyboardType='email-address'
                  onChangeText={(txt)=>{
                      this.setState({emailId:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(txt)=>{
                      this.setState({password:txt})
                  }
                  }
                  />
                  <TextInput style={styles.loginBox}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={(txt)=>{
                      this.setState({password:txt})
                  }
                  }
                  />
      </Modal>
    )
}


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
   
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)
              this.showmodal()}}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress={
              this.setState({
                imv:false
              })
            }
            >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})