import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
}

export default function ListOrphanages() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate('OrphanageDetails', { id });
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
                { orphanages.map(orphanage => {
                    return (
                        <View style={styles.list}>
                            <Text style={styles.orphanage}>{ orphanage.name } </Text>
                            <RectButton style={styles.iconButton} >
                                <Feather 
                                    name="info"
                                    size={32}
                                    color="#5C8599"
                                    onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
                                />
                            </RectButton>
                        </View>
                    )
                })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    list: {
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 30,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    orphanage: {
        color: '#5C8599',
        margin: 30,
        fontSize: 32,

        flexDirection: 'row',
        textAlign: 'center',
    },

    iconButton: {
        margin: 20,
        padding: 30,

        justifyContent: 'center',
    }
})