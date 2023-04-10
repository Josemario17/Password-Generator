

const inputTypeRange = document.querySelector("input[type = range]"),
    listInputCheckedType = document.querySelectorAll("input[name = 't-check']"), 
    labelListTypeClick = document.querySelectorAll("label"),
    btnGenerator = document.querySelector(".footer__element--btn"),
    inputToShowResult = document.querySelector("input[name='t-textinpt']"),
    copyMeBtn = document.getElementById("copy-me")

    
let listRangeValues = Array('0', '25' , '50', '75', '100'), 
    letters = Array('a','b','c','d','e','f','g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','w','y','z'),
    digits = Array(1,2,3,4,5,6,7,8,9,0),   
    specialCharacters = Array('@','#','$','%','&','/','£','!','?'),
    conjunt = Array(letters, digits, specialCharacters, "+10"),
    listSize = listRangeValues.length, listInptsSize = listInputCheckedType.length, labelListSize = labelListTypeClick.length

inputTypeRange.onchange = () =>{
    let newValue = inputTypeRange.value
    for(let element = 0; element < listInptsSize; element ++){
        listInputCheckedType[element].checked = false
    }

    for(let interations = 1; interations < listSize; interations ++){
        if(newValue === listRangeValues[interations]){
            for(let secondInterations = 0; secondInterations < interations; secondInterations ++){
                listInputCheckedType[secondInterations].checked = true
            }
        }
    }
}


for(let interations = 0; interations < labelListSize; interations++){
    labelListTypeClick[interations].onmouseout = () =>{
        inputTypeRange.value = listRangeValues[countInputCheckeds()]        
    }
}


let countInputCheckeds = () =>{
    let count = 0
    for(let interations = 0; interations < listInptsSize; interations++){
        if(listInputCheckedType[interations].checked === true){
            count += 1
        }
    }
    return count
}


btnGenerator.onclick = () =>{
    let allPass = "", count = 0
    for(let interations = 0; interations < listInptsSize; interations++){
        if(listInputCheckedType[interations].checked === true && listInputCheckedType[3].checked === false){
            for(let count = 0; count < interations + 5; count++){
                if(conjunt[ Math.floor(Math.random() * 4)] != undefined){    
                    allPass += conjunt[ Math.floor(Math.random() * 4)][Math.floor(Math.random() * count)]
                }
            }
        }

        else if(listInputCheckedType[interations].checked === true && listInputCheckedType[3].checked === true){
            for(let count = 0; count < interations + 18; count++){
                if(conjunt[ Math.floor(Math.random() * 4)] != undefined){    
                    allPass += conjunt[ Math.floor(Math.random() * 4)][Math.floor(Math.random() * count)]
                }
            }
        }
    } 
    
    for(let interations = 0; interations < listInptsSize; interations++){
        if(listInputCheckedType[interations].checked === true){    
            inputToShowResult.className = "less-1"
            count += 1
        }
    }

    console.log(count);
    if(count > 1 && count < 3 || count == 3){
        inputToShowResult.className = "middle"
    }

    else if(count > 3){
        inputToShowResult.className = "strong"
    }
    addNewValuesInInput(allPass.split("undefined"));
    
}



let addNewValuesInInput = (content) =>{
    inputToShowResult.value = content
}

copyMeBtn.onclick = () =>{
    navigator.clipboard.writeText(inputToShowResult.value)
    copyMeBtn.textContent = "copiado"
    setTimeout(function(){
        copyMeBtn.textContent = "copy me"
    }, 2000)
}