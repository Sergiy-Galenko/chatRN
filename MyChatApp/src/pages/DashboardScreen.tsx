import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '../styles/DashboardScreenStyles';

const DashboardScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });
    }, [navigation]);

    const handleSettings = () => {
        navigation.navigate('Settings');
    };

    const handleWriteTo = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleMenuPress = (menu: string) => {
        if (menu === 'player') {
            navigation.navigate('MusicPlayer');
        } else {
            console.log(`Menu ${menu} pressed`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ваші чати</Text>
            <Text style={styles.subtitle}>This is a simple dashboard screen of the app.</Text>
            
            <View style={styles.searchContainer}>
                <Image source={require('../img/lupa.png')} style={styles.searchIcon} />
                <TextInput 
                    style={styles.searchBar}
                    placeholder="Search"
                    autoFocus={isModalVisible}
                />
            </View>

            <TouchableOpacity style={styles.writeButton} onPress={handleWriteTo}>
                <Text style={styles.writeButtonText}>Кому написати?</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => handleMenuPress('menu1')}>
                    <Image source={require('../img/chat.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('menu2')}>
                    <Image source={require('../img/lupa.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('menu3')}>
                    <Image source={require('../img/lupa.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('menu4')}>
                    <Image source={require('../img/settings.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('player')}>
                    <Image source={require('../img/player.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Player</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.searchContainerModal}>
                        <Image source={require('../img/lupa.png')} style={styles.searchIcon} />
                        <TextInput 
                            style={styles.searchBar}
                            placeholder="Search"
                        />
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default DashboardScreen;
