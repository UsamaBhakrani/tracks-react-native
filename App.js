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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Resolve"
        component={ResolveAuthScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signin"
        component={SigninScreen}
      />
    </Stack.Navigator>
  );
}

function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TrackList"
        component={TrackListScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TrackDetail"
        component={TrackDetailScreen}
      />
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
      <Tab.Screen
        options={{ headerShown: false }}
        name="CreateTrack"
        component={TrackCreateScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
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
      </LocationProvider>
    </NavigationContainer>
  );
}
