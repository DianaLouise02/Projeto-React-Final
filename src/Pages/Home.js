import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Card from '../Components/Card';


export default function Home() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card
                    title="Temporadas"
                    imageSource={require('../Images/SuitsSeason1.png')}
                    content="141 episódios totais, 9 temporadas"
                    buttonText="Ver todas as Temporadas"
                    onPress={() => navigation.navigate('Temporadas')}
                />

                <Card
                    title="Personagens"
                    imageSource={require('../Images/SuitsCharacters.jpg')}
                    content="Conheça os personagens da série mais famosa de drama jurídico."
                    buttonText="Ver os Personagens"
                    onPress={() => navigation.navigate('Personagens')}
                />

                <Card
                    title="Curiosidades"
                    imageSource={require('../Images/Curiosidades.jpg')}
                    content="Fatos interessantes da série"
                    buttonText="Ver as Curiosidades"
                    onPress={() => navigation.navigate('Curiosidades')}
                />

                <Card
                    title="Redes Sociais"
                    imageSource={require('../Images/RedesSociais.jpg')}
                    content="Redes sociais do elenco"
                    buttonText="Ver"
                    onPress={() => navigation.navigate('RedesSociais')}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({

    container: {
        padding: 20,
        paddingBottom: 10
    },
})

