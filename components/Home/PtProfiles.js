import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import MyStyles from "../../styles/MyStyles";
import { List } from "react-native-paper";
import Apis, { endpoints } from "../../configs/Apis";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const PtProfiles = () => {
    const [loading, setLoading] = useState(false);
    const [PtProfiles, setPtProfiles] = useState([]);
    const nav = useNavigation();

    const loadPtProfiles = async () => {

        try {
            setLoading(true);
            let res = await Apis.get(endpoints['pt-profiles']);

            setPtProfiles(res.data);
        } catch (ex) {
            console.error(ex);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPtProfiles();
    }, []);

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={PtProfiles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.nickname}

                        left={() => (
                            <TouchableOpacity onPress={() => nav.navigate('pt-details', { ptId: item.id })}>
                                <Image
                                    source={{ uri: 'https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg' }}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        marginRight: 10
                                    }}
                                />
                            </TouchableOpacity>
                        )}
                    />
                )}
            />

        </View>









    )








}

export default PtProfiles;