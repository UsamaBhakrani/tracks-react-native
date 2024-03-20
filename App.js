import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SigninScreen,
  SignupScreen,
  AccountScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen,
} from "./src/screens";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}

function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}
function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="TrackListFlow"
        component={TrackListFlow}
      />
      <Tab.Screen name="CreateTrack" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginFlow"
            component={LoginFlow}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainFlow"
            component={MainFlow}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
