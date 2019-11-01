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

class Plants extends React.Component {

    _lavande = () => {
        Communications.web('https://www.rustica.fr/articles-jardin/cultiver-lavande,521.html')
    }  

    _kumquat = () => {
        Communications.web('https://www.rustica.fr/articles-jardin/kumquat,3313.html')
    } 

    _citronnier = () => {
        Communications.web('https://www.rustica.fr/articles-jardin/citronnier,3312.html')
    } 
    
    render() {
        return (
                <View>
                    <View style={styles.header}>
                    <Text style= {styles.header_text}>MES PLANTES</Text>
                    </View>

                    <View style={styles.main_container}>
                        <Image style={styles.image1}
                        source={require('../../../assets/images/lavande.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                            <TouchableOpacity onPress={this._lavande}>
                            <Text style={styles.title1}>LAVANDE</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.description_text} numberOfLines={3}>Plantation : printemps ou automne - 
                                Floraison : juillet à septembre. Les fleurs séchées de lavande, qui embaument les armoires et éloignent les mites, 
                                sont utilisées pour produire une essence très parfumée.</Text>
                            </View>
                        </View>
                    </View>
                    
                    </View>

                    <View style={styles.main_container}>
                        <Image style={styles.image1}
                        source={require('../../../assets/images/kumquat.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                            <TouchableOpacity onPress={this._kumquat}>
                            <Text style={styles.title1}>KUMQUAT</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.description_text} numberOfLines={3}>C'est un arbre fruitier de la famille des Rutaceae, 
                                originaire d'Extrême-Orient. Ses fruits sont également dénommés kumquats.</Text>
                            </View>
                        </View>
                    </View>
                    
                    </View>

                    <View style={styles.main_container}>
                        <Image style={styles.image1}
                        source={require('../../../assets/images/citronnier.jpeg')}/>
                    <View style={styles.content_container}>        
                        <View style={styles.view_header}>
                            <TouchableOpacity onPress={this._citronnier}>
                            <Text style={styles.title1}>CITRONNIER</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.description_container}>
                            <View style={styles.description} >
                                <Text style={styles.description_text} numberOfLines={3}>Le citronnier, Citrus ×limon, 
                                est une espèce de petits arbres de la famille des Rutacées, 
                                cultivée dans les régions méditerranéennes et subtropicales pour son fruit le citron, 
                                dont le jus est utilisé principalement comme condiment. </Text>
                            </View>
                        </View>
                    </View>
                    
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
    main_container: {
        height: 160,
        flexDirection: 'row'  
    }, 
    image1: {
        width: 120,
        height: 120,
        margin: 5,
        borderRadius: 10
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    view_header: {
        flex: 4,
        flexDirection: 'row',
        marginLeft: 50
    },
    title1: {
       fontSize: 15,
       color: 'black',
       fontWeight: 'bold'
    },
    
    description_container: {
        flex: 7
    },
    description_text: {
        fontSize: 10,
        fontStyle: 'italic'
    }

})



export default Plants;