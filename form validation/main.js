const form=document.querySelector('.form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const password2=document.querySelector('#password2');

// Show input error message
errorMessage=(input,message)=>{
    formControl=input.parentElement;
    formControl.className='form-control error';
    const error=formControl.querySelector('small');
    error.innerText=message;
}

// Show success outline
successMessage=(input)=>{
    formControl=input.parentElement;
    formControl.className='form-control success';

}

// Check length
checkLength=(input,min,max)=>{
    if(input.value.length < min){
        errorMessage(input,`${getFieldName(input)} should be at least ${min} characters`);
    }else if(input.value.length >max ){
        errorMessage(input,`${getFieldName(input)} should be not more than ${max} characters`);
    }else{
        successMessage(input);
    }
}

// Check Email
checkEmail=(input)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
        successMessage(input);
    }else{
        errorMessage(input,`${getFieldName(input)} is not valid`);
    }
}

// Check Password
checkPassword=(input1,input2)=>{
    if(input1.value===input2.value){
        successMessage(input2)
    }else{
        errorMessage(input2,"Password didnot match");
    }
}

// Get field name
getFieldName=(input)=>{
    // turn first character to uppercase and concatenate 
    // by slicing first character
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Submit Event
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const inputArray=[username,email,password,password2]
    inputArray.forEach(item=>{
        if(item.value.trim()===''){
            errorMessage(item,`${getFieldName(item)} is required`)
        }else{
            successMessage(item)
        }
    })

    checkLength(username,3,15);
    checkLength(password,6,15);
    checkEmail(email);
    checkPassword(password,password2);
})