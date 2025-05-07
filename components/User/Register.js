"use client"

import { useState } from "react"
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
import { Ionicons } from "@expo/vector-icons"

const Register = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleSignUp = () => {
        // Kiểm tra các trường dữ liệu đơn giản
        if (!name || !email || !password) {
            Alert.alert("Error", "Please fill in all fields")
            return
        }

        // Giả lập đăng ký thành công và chuyển đến màn hình Home
        navigation.navigate("Home", { name, email })
    }

    const handleSocialSignUp = (provider) => {
        // Giả lập đăng ký thành công và chuyển đến màn hình Home
        navigation.navigate("Home", { provider: provider })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sign Up</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Full name</Text>
                        <TextInput style={styles.input} placeholder="Enter your full name" value={name} onChangeText={setName} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Enter your password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.signUpButtonText}>SIGN UP</Text>
                    </TouchableOpacity>

                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.loginLink}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>Sign up with</Text>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.socialButtonsContainer}>
                        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp("Facebook")}>
                            <Image
                                source={{
                                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png",
                                }}
                                style={styles.socialIcon}
                            />
                            <Text style={styles.socialButtonText}>FACEBOOK</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp("Google")}>
                            <Image
                                source={{
                                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
                                }}
                                style={styles.socialIcon}
                            />
                            <Text style={styles.socialButtonText}>GOOGLE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 30,
    },
    header: {
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
    },
    passwordContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        alignItems: "center",
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
    },
    signUpButton: {
        backgroundColor: "#FF6347",
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    signUpButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    loginText: {
        color: "#666",
    },
    loginLink: {
        color: "#FF6347",
        fontWeight: "500",
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#ddd",
    },
    dividerText: {
        paddingHorizontal: 10,
        color: "#666",
    },
    socialButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 15,
        width: "48%",
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    socialButtonText: {
        fontWeight: "500",
        fontSize: 14,
    },
})

export default Register
