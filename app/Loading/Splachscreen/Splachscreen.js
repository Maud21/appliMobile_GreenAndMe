import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';


class Splachscreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('App');
        }, 1000)
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
                <View style={styles.splachscreen_container}>
                <Image style={styles.image1}
                source={require('../../../assets/images/mes_plantes.jpeg')}/>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35, marginTop: 10, color: '#056418'}}>Green And Me</Text>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create ({
    splachscreen_container: {
        alignItems: 'center',
        marginTop: 150
    },
    
    image1: {
        width: 100,
        height: 100,
        
    }
})

export default Splachscreen;