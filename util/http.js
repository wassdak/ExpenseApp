import axios from "axios";
const BACKEND_URL =  'https://react-native-course-bb170-default-rtdb.firebaseio.com'

export async function storeExpense(expenseData){
    const response = await axios.post(
        BACKEND_URL + '/expense.json', 
        expenseData);
        const id = response.data.name;
}

export async function fetchExpenses(expenseData){
    const response = await axios.get( 
        BACKEND_URL + '/expense.json');
        const expenses = [];
        console.log(response.data);
        
        for (const key in response.data){
            const expenseObj ={
                id:key,
                amount: response.data[key].amount,
                date: new Date(response.data[key].data),
                description: response.data[key].description
            };
            expenses.push(expenseObj)
        }
        return expenses;
}

export function updateExpense(id, expenseData){
   return axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData)
}

export function deleteExpense(id){
    return axios.delete(BACKEND_URL+ `/expense/${id}.json`)
}