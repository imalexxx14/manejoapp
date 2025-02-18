import { Text, View } from "react-native";
import { Redirect } from "expo-router";

export default function Index() {
  return(
    <view
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
<Text>Edit app/Index.tsx to edit this screen.</Text>

    </view>
  );
  return <Redirect href="/tabs/home" />;
}
