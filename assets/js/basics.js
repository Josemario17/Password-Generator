

const inputTypeRange = document.querySelector("input[type = range]"),
    listInputCheckedType = document.querySelectorAll("input[name = 't-check']")
    
let listRangeValues = Array('0', '25' , '50', '75', '100'), 
    sizeList = listRangeValues.length, sizeListInpts = listInputCheckedType.length

inputTypeRange.onchange = () =>{
    let newValue = inputTypeRange.value
    for(let element = 0; element < sizeListInpts; element ++){
        listInputCheckedType[element].checked = false
    }
    for(let interations = 1; interations < sizeList; interations ++){
        if(newValue === listRangeValues[interations]){
            for(let secondInterations = 0; secondInterations < interations; secondInterations ++){
                listInputCheckedType[secondInterations].checked = true
            }
        }
    }
}
