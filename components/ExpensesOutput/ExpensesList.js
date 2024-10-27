import { FlatList,Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function RenderExpensiveItem(itemData){
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({expenses}){
return (
<FlatList 
data={expenses} 
renderItem={RenderExpensiveItem}
keyExtractor={(item)=> item.id}/>
)
}

export default ExpensesList;
