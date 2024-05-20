import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Залишаємо білий фон за замовчуванням
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#42a6f5',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#a2a2a2',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
    color: '#000',
  },
  button: {
    backgroundColor: '#42a6f5', // Змінено колір на блакитний
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleSwitch: {
    marginBottom: 20,
  }
});
