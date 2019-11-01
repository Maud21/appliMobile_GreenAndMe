import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Communications from 'react-native-communications';

import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, Icons } from 'react-native-fontawesome';
import { parseIconFromClassName } from 'react-native-fontawesome';

const validIcon = parseIconFromClassName('fa-home');



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
 
  render() {
    return (
      <View style={styles.main_container}>

        <View style={styles.header}>
          <Text style= {styles.header_text}>MON JARDIN</Text>
        </View>

        <View style={styles.container}>
          <TextInput style={styles.textinput} placeholder="Rechercher une plante"/>
        </View>

        <View style={styles.taches_container}>
            <View style={styles.taches}>
              <TouchableOpacity>
                  <Text style={styles.title1}>Aujourd'hui</Text>
                  <Image 
                    style={styles.logo_image} 
                    source={require('../../../assets/images/calendrier.jpeg')}
                  />
              </TouchableOpacity> 
            </View>
            <View style={styles.taches}>
              <TouchableOpacity>
                  <Text style={styles.title1}>A prévoir</Text>
                  <Image 
                    style={styles.logo_image} 
                    source={require('../../../assets/images/reveil.jpeg')}
                  />
              </TouchableOpacity> 
            </View>
            <View style={styles.taches}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Plants')}>
                <Text style={styles.title1}>Mes plantes</Text>
                <Image 
                  style={styles.logo_image} 
                  source={require('../../../assets/images/mes_plantes.jpeg')}
                />
              </TouchableOpacity> 
            </View>
            <View style={styles.taches}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('MesProjets')}>
                  <Text style={styles.title1}>Mes projets</Text>
                  <Image style={styles.logo_image}
                  source={require('../../../assets/images/projet.jpeg')}/>
              </TouchableOpacity> 
            </View>
        </View>

        

        <View style={styles.container_button}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('Plants')}
          >
            <Text style={styles.textInputButton}>Voir toutes les plantes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create ({
  
  header: {
    backgroundColor: '#056418',
    height: 60,
  },
  header_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 10,
  },
  container_button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 28,
  },
  textInputButton: {
    color: '#056418',
    fontSize: 18,
    fontWeight: 'bold', 
    marginTop: -15,
    padding: 18,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#CCD1D1',
    borderRadius: 5,
    marginLeft: 33,
    marginRight: 33
  },
  logo_image: {
    height: 50,
    width: 50,
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 20
  },
  taches_container: {
    height: 250,
    fontSize: 15
  },
  taches: {
    marginHorizontal: 35,
  },
  title1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 18
  },
  
  meteo_container: {
    height: 50,
    marginTop: 280,
  },
  image_container: {
   marginBottom: 50
  },
  meteo_image: {
    height: 50,
    width: 50,
    marginLeft: 300
  },
  container_button: {
    height: 50,
    marginTop: 70
    
  }
  
});


export default App;


  
//searchBar https://react-native-elements.github.io/react-native-elements/docs/searchbar.html

//<FontAwesome style={{fontSize: 25}} icon={validIcon}></FontAwesome>