import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen
                options={{ headerShadowVisible: false, headerTitle: "" }}
            />
        </SafeAreaView>
    );
};

export default Home;
