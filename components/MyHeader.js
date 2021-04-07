import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

class MyHeader extends Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }

  componentDidMount=()=>{
    this.notifacionbadge();
  };

  notifacionbadge=()=>{
    db.collection("all_notifications").where("notification_status","==","unread").onSnapshot((snapshot)=>{
      var un = snapshot.docs.map((doc)=>doc.data());
      this.setState({
        value:un
      }
    );
  }
  );
    };
    BellIconBadge=()=>{
      return(
        <View>
      <Icon name='bell' type='font-awesome' size={25} color='#000000'
      onPress={()=>this.props.navigation.navigate('Notfication')}
      />
      <Badge
      value={this.state.value}
      containerStyle={{position:'absolute',top:-4, right:4}}
      />
      </View>
      );
    };

  render(){
    return(
      <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#000000'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#eaf8fe"
      rightComponent={<this.BellIconBadge {...this.props}/>}
    />
    );
  };
};

export default MyHeader;