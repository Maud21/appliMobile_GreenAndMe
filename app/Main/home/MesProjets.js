import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
    
  } from 'react-native';

class MesProjets extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                <Text style= {styles.header_text}>MES PROJETS</Text>
                </View>
                <Image style={styles.image1}
                source={require('../../../assets/images/jardinier.jpeg')}/>
                <Text style={styles.text}>Vous n'avez pas de projet !</Text>
                <View>
                    <TouchableOpacity >
                        <Text style={styles.nouveau_projet}>Créer un nouveau projet</Text>
                    </TouchableOpacity>
                </View>
         
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    image1: {
        height: 100,
        width: 100,
        marginTop: 50,
        marginLeft: 120
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },
    nouveau_projet: {
        textAlign: 'center',
        marginTop: 50, 
        backgroundColor: '#CCD1D1',
        padding: 10,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        color: '#056418',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default MesProjets;