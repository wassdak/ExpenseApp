import {Text, StyleSheet, View, Alert} from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../util/date';
import { GlobalStyles } from '../constants/styles';

function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}){

    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date:{
            value:  defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangedHandler(inputIdentifier, enteredValue){
        setInputs((curInputs)=> {
            return{
                ...curInputs,
                [inputIdentifier]: {value: enteredValue, isValid: true},
            }
        });
    }

    function submitHandler(){
        const expenseData = {
            amount : +inputs.amount.value, 
            date: new Date(inputs.date.value),
            description : inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            //Alert.alert('Invalid input', 'Please check your input values');
            setInputs((curInputs)=> {
                return{
                    amount: {value: curInputs.amount.value, isValid: amountIsValid},
                    date: {value: curInputs.date.value, isValid: dateIsValid},
                    description: {value: curInputs.description.value, isValid: descriptionIsValid},
                }
            })
            return;
        }
        onSubmit(expenseData);

    }
const formIsInvalid = 
!inputs.amount.isValid || 
!inputs.date.isValid || 
!inputs.description.isValid;
    return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
            <Input 
            label='Amount' 
            invalid = {!inputs.amount.isValid}
            textInputConfig={{
            keyboardType:'decimal-pad',
            onChangeText: inputChangedHandler.bind(this,'amount'),
            value: inputs.amount.value
            }}
            style={styles.rowInput}
            />
            <Input 
            label='Date' 
            invalid = {!inputs.date.isValid}
            textInputConfig={{
            placeholder:'YYYY-MM-DD',
            maxLenght: 10,
            onChangeText: inputChangedHandler.bind(this,'date'),
            value: inputs.date.value
            }}
            style={styles.rowInput}
            />
         </View>
            <Input 
            label = 'Description' 
            invalid = {!inputs.description.isValid}
            textInputConfig = {{       
            multiline: true,
            onChangeText: inputChangedHandler.bind(this,'description'),
            value: inputs.description.value,
            // autocorrect: false // default is true
            // autoCapitalize : 'words/none/characters' //default sentences
            }}/>
           {formIsInvalid && <Text style={styles.errorText}>Invalid values</Text>}
            <View style={styles.buttons}>
                <Button mode='flat' 
                onPress={onCancel} 
                style={styles.button} > 
                Cancel 
                </Button>
                <Button 
                    onPress={submitHandler} 
                    style={styles.button}>
                    {submitButtonLabel}
                </Button>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop:40,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput:{
        flex: 1
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24,
    },
    button:{
        minWidth: 120,
        marginHorizontal:8
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText:{
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
    },
   
})
export default ExpenseForm;