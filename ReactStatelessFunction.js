import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello, World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;
