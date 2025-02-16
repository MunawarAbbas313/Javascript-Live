// Get input elements
const inputValue = document.getElementById('inputValue');
const toTypeSelect = document.getElementById('toType');

// Get result display elements 
const inputTypeDisplay = document.getElementById('inputType');
const originalValueDisplay = document.getElementById('originalValue');
const convertedTypeDisplay = document.getElementById('convertedType');
const convertedValueDisplay = document.getElementById('convertedValue');
const explanationDisplay = document.getElementById('explanation');

const convertBtn = document.querySelector('.convert-btn');
const isMEmpty = ()=>{
    if(inputValue.value === ''){
        return true;
    }else{
        return false;
    }
};
convertBtn.addEventListener('click', () => {
    convertTo();
})
   
   function convertTo(){
    if(!isMEmpty()){
    
        let inputVal = inputValue.value;
        let inputType;
        
        // Convert to number if possible
        // Check for boolean values
        if (inputVal.toLowerCase() === 'true' || inputVal.toLowerCase() === 'false') {
            inputVal = inputVal.toLowerCase() === 'true';
            inputType = 'boolean';
            inputTypeDisplay.textContent = inputType;
            originalValueDisplay.textContent = inputVal;
        }
        // Check for null
        else if (inputVal.toLowerCase() === 'null') {
            inputVal = null;
            inputType = 'object';
            inputTypeDisplay.textContent = inputType;
            originalValueDisplay.textContent = inputVal;
        }
        // Check for undefined
        else if (inputVal.toLowerCase() === 'undefined') {
            inputVal = undefined;
            inputType = 'undefined';
            inputTypeDisplay.textContent = inputType;
            originalValueDisplay.textContent = inputVal;
        }
        // Check for numbers
        else if (!isNaN(inputVal) && inputVal !== '') {
            inputVal = Number(inputVal);
            inputType = typeof inputVal;
            inputTypeDisplay.textContent = inputType;
            originalValueDisplay.textContent = inputVal;
        }
        // Default to string
        else {
            inputType = typeof inputVal;
            inputTypeDisplay.textContent = inputType;
            originalValueDisplay.textContent = inputVal;
        }
    
        inputTypeDisplay.textContent = inputType;
        originalValueDisplay.textContent = inputVal;
    }
    else{
        alert('Please enter a value');
    }
       }
    
    switch(toTypeSelect.value){
        case 'string':
            convertedTypeDisplay.textContent = 'string';
            convertedValueDisplay.textContent = String(inputValue.value);
            break;
        case 'number':
            convertedTypeDisplay.textContent = 'number';
            convertedValueDisplay.textContent = Number(inputValue.value);
            break;
        case 'boolean':
            convertedTypeDisplay.textContent = 'boolean';
            convertedValueDisplay.textContent = Boolean(inputValue.value);
            break;
        case 'undefined':
            convertedValueDisplay.textContent = undefined;
            convertedTypeDisplay.textContent = 'undefined';

            break;
        case 'null':
            convertedValueDisplay.textContent = null;
            convertedTypeDisplay.textContent = 'null';
            break;
        default:
            convertedValueDisplay.textContent = inputValue.value;
            convertedTypeDisplay.textContent = 'string';
            break;
            
            
    }

   
