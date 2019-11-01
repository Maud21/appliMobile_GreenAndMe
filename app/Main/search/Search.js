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

class Search extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style= {styles.header_text}>RECHERCHER</Text>
                </View>
                <View style={styles.text_photo}>
                <Text style={styles.text1}>Identifiez une plante grâce à votre appareil photo</Text>
                <Text style={styles.text2}>A vous de jouer !</Text>
                </View>
                <View style= {styles.container_photo}>
                <Text style={styles.photo}>Ma photo</Text>
                </View>
                <View>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={this.onPress}
                >
                <Text style={styles.textInputButton}>GO</Text>
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
    text_photo: {
        textAlign: 'center'
    },
    text1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2: {
        textAlign: 'center',
        fontSize: 18,
        color: '#056418',
        fontWeight: 'bold'
    },
    container_photo: {
        borderRadius: 4,
        borderWidth: 0.5,
        margin: 25,
        padding: 100,
        borderColor: 'black',
    },
    photo: {
        margin: 6
    },
    textInputButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#056418',
        marginLeft: 150,
        marginRight: 150,

    }


})

export default Search;