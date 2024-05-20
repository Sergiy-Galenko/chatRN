import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '../styles/MusicPlayerScreenStyles';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';

const MusicPlayerScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [musicFiles, setMusicFiles] = useState([]);
    const [myMusicFiles, setMyMusicFiles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCommunityMusic, setIsCommunityMusic] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMusicFiles();
    }, []);

    const fetchMusicFiles = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'We need permission to access your media library.');
            return;
        }
        const media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first: 100, // Fetch first 100 audio files
        });
        setMusicFiles(media.assets);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filteredFiles = (isCommunityMusic ? musicFiles : myMusicFiles).filter(file => 
            file.filename.toLowerCase().includes(query.toLowerCase())
        );
        if (isCommunityMusic) {
            setMusicFiles(filteredFiles);
        } else {
            setMyMusicFiles(filteredFiles);
        }
    };

    const handleMenuPress = (menu: string) => {
        if (menu === 'chat') {
            navigation.navigate('Dashboard');
        } else {
            console.log(`Menu ${menu} pressed`);
        }
    };

    const pickMusicFile = async () => {
        setLoading(true);
        let result = await DocumentPicker.getDocumentAsync({
            type: 'audio/*',
            copyToCacheDirectory: true,
        });

        if (result.type === 'success') {
            const newMusicFile = {
                id: result.uri,
                filename: result.name,
                uri: result.uri,
            };
            setMyMusicFiles(prevFiles => [...prevFiles, newMusicFile]);
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Music Player</Text>

            <View style={styles.searchContainer}>
                <Image source={require('../img/lupa.png')} style={styles.searchIcon} />
                <TextInput 
                    style={styles.searchBar}
                    placeholder="Search Music"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.switchButton, isCommunityMusic && styles.activeButton]}
                    onPress={() => {
                        setIsCommunityMusic(true);
                        setSearchQuery('');
                        fetchMusicFiles(); // Reset community music list on switch
                    }}
                >
                    <Text style={[styles.switchButtonText, isCommunityMusic && styles.activeButtonText]}>Ком'юніті музика</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.switchButton, !isCommunityMusic && styles.activeButton]}
                    onPress={() => {
                        setIsCommunityMusic(false);
                        setSearchQuery('');
                    }}
                >
                    <Text style={[styles.switchButtonText, !isCommunityMusic && styles.activeButtonText]}>Моя музика</Text>
                </TouchableOpacity>
            </View>

            {!isCommunityMusic && (
                <>
                    <TouchableOpacity style={styles.findButton} onPress={pickMusicFile}>
                        <Text style={styles.findButtonText}>Знайти пісню із файлів</Text>
                    </TouchableOpacity>
                    {loading && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text style={styles.loadingText}>Завантаження...</Text>
                        </View>
                    )}
                </>
            )}

            <FlatList
                data={isCommunityMusic ? musicFiles : myMusicFiles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.musicItem}>
                        <Text style={styles.musicTitle}>{item.filename}</Text>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => handleMenuPress('chat')}>
                    <Image source={require('../img/chat.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('search')}>
                    <Image source={require('../img/lupa.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('discover')}>
                    <Image source={require('../img/lupa.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('settings')}>
                    <Image source={require('../img/settings.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuPress('player')}>
                    <Image source={require('../img/player.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Player</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MusicPlayerScreen;
