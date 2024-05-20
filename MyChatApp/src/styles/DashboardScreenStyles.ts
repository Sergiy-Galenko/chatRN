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
    },
    searchContainerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        borderColor: '#ccc',
        borderWidth: 1,
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
        color: '#4B0082',
        marginBottom: 10,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#6A5ACD',
        textAlign: 'center',
        marginBottom: 20,
    },
    writeButton: {
        marginTop: 20,
        backgroundColor: '#42a6f5',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginBottom: 20,
    },
    writeButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
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
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#42a6f5',
        borderRadius: 25,
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
