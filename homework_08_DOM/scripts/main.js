const phone_book = document.getElementById("phoneBookId");
const button = document.getElementById("addPhoneId");
const input_name = document.getElementById('phoneNameId');
const input_number = document.getElementById('phoneNumberId');

const validateName = (name) => /^[А-я]{0,16}$/.test(name);
const validateNumber = (name) => /^\+?[0-9]{0,16}$/.test(name);

const handleInput = (e, validator) => {
    if(!validator(e.target.value))
        e.target.value = e.target.value.slice(0,-1);
}

function addPhone(){
    if(input_name.value === "")
        alert("Введите Имя");
    else
        if(input_number.value === "")
            alert("Введите Номер");
        else{
            const tr = document.createElement("tr");
            const td_first = document.createElement("td");
            const td_second = document.createElement("td");
            const td_clear = document.createElement("td");
            td_first.innerHTML  = input_name.value;
            td_second.innerHTML  = input_number.value;
            td_clear.innerHTML  = "X";
            td_clear.addEventListener('click', removeRow);
            tr.append(td_first);
            tr.append(td_second);
            tr.append(td_clear);
            phone_book.append(tr);
        }
}

function removeRow(e){
    e.target.parentElement.remove();
}

input_name.addEventListener('input', (e) => handleInput(e, validateName));
input_number.addEventListener('input', (e) => handleInput(e, validateNumber));
button.addEventListener('click', addPhone);