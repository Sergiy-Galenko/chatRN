import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        marginVertical: 20,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 15, // Зміщення вниз на 15px
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#42a6f5',
        marginBottom: 10,
        marginTop: 35, // Зміщення вниз на 15px
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    switchButton: {
        flex: 1,
        padding: 10,
        borderRadius: 25,
        marginHorizontal: 5,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    switchButtonText: {
        fontSize: 16,
        color: '#000',
    },
    activeButton: {
        backgroundColor: '#42a6f5',
    },
    activeButtonText: {
        color: '#fff',
    },
    musicItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    musicTitle: {
        fontSize: 16,
        color: '#000',
    },
    findButton: {
        marginTop: 20,
        backgroundColor: '#42a6f5',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginBottom: 20,
    },
    findButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loadingContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 16,
        color: '#000',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Напівпрозорий чорний колір для футера
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    menuText: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
    },
});
