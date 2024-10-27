import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllExpenses from './Screens/AllExpenses';
import { NavigationContainer } from '@react-navigation/native';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RecentExpenses from './Screens/RecentEpenses';
import ManageExpense from './Screens/ManageExpense';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './UI/IconButton';
import ExpenseContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ExpensesOverview(){
  return (
    <Tabs.Navigator screenOptions={({navigation})=>(
      {headerStyle:{backgroundColor: GlobalStyles.colors.primary500}, 
      headerTintColor: 'white', 
      tabBarStyle:{backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight:({tintColor})=>(
        <IconButton icon="add" size={24} color={tintColor}  onPress={()=>{navigation.navigate('ManageExpense')}} />
      ),
      })}
      >
      <Tabs.Screen 
      name='RecentExpenses'
      component={RecentExpenses}  
      options={{
        title:'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color,size}) => <Ionicons name='hourglass' size={size} color={color} />
      }}
      />
      <Tabs.Screen 
        name='AllExpenses' 
        component={AllExpenses}  
        options={{
          title:'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color,size}) => <Ionicons name='calendar' size={size} color={color} />
        }
      }
        
      />
  </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style= 'light' />
    <ExpenseContextProvider> 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:GlobalStyles.colors.primary500}, headerTintColor:'white'}}>
        <Stack.Screen 
        name='ExpensesOverview' 
        component={ExpensesOverview} 
        options={{headerShown: false }} 
        />
      <Stack.Screen 
        name='ManageExpense' 
        component={ManageExpense}
        options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
