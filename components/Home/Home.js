import { useContext, useReducer } from "react";
import { MyDispatchContext, MyUserContext } from "../../configs/MyContexts";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
} from "react-native"
const Home = ({ navigation }) => {
    const user = useContext(MyUserContext);

    const handleNav = () => {
        navigation.navigate("chat");
    }

    const handleNavPt = () => {
        navigation.navigate("pt-profiles");
    }


    return (
        <View>

            <Text>Xin chào, {user.email}, {user.role}</Text>
            <TouchableOpacity
                onPress={handleNav}
                style={{
                    backgroundColor: '#007bff',
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#fff', fontSize: 16 }}>Chuyen sang trang chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleNavPt}
                style={{
                    backgroundColor: '#007bff',
                    padding: 10,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: '#fff', fontSize: 16 }}>Chuyen sang trang pt</Text>
            </TouchableOpacity>






        </View>
    );
};

export default Home;