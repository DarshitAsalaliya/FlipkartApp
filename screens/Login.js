import * as React from 'react';
import { Button, View, SafeAreaView } from 'react-native';
import { Avatar, Card, Title, Paragraph, TextInput, Modal, Portal, Provider, List, Divider, Text } from 'react-native-paper';



const Login = ({ navigation }) => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding:20, margin: 20, height:"20%" };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, backgroundColor: '#FFF', position: "relative" }}>

                <Title style={{ fontSize: 16 }}>Log in for the best experience</Title>
                <Text style={{ color: 'gray' }}>Experience the all new Flipkart!</Text>

                <TextInput
                    label="Phone Number"
                    mode="outlined"
                    outlineColor="#2874F0"
                    selectionColor="#2874F0"
                    style={{ height: 45, marginTop: 20 }}

                />

                <Title style={{ fontSize: 15, color: "#2874F0", textAlign: "right" }}>Use Email-ID</Title>

                <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray", marginTop: 10 }}>By continuing, you agree to Flipkart's <Text style={{ color: "#2874F0" }}>Terms of Use</Text> and <Text style={{ color: "#2874F0" }}>Privacy Policy</Text></Text>

                <Provider>
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text>+91 India</Text>
                            <Divider />
                            <Text>+1 USA</Text>
                        </Modal>
                    </Portal>
                </Provider>

                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 5,
                    margin: 12,
                    width: "100%",
                }}>

                    <Button
                        title="Continue"
                        color="lightgray"
                        onPress={() => showModal(true)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;