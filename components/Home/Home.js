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
const Home = () => {
    const user = useContext(MyUserContext);

    return (
        <View>
            {user ? (
                <Text>Xin chào, {user.email}, {user.role}</Text>

            ) : (
                <Text>Hãy đăng nhập.</Text>
            )}
        </View>
    );
};

export default Home;