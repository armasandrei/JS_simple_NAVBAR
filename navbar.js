const items = [ //Array> String
    "Lorem",
    "Earum",
    "Tenetur",
    "Voluptas",
    "Itaque",
    "In",
    "Omnis",
    "Cumque",
    "Animi",
]
const TOTAL = 9
const BTN_WIDTH = 50
let dropOpen = false
let eWidth = 0

function adapt() {
    for(let n=TOTAL; n>=1; n--){
        estimateWidth(n)
        if (eWidth <= innerWidth) {
        showItems(n)
        break
    
    } 

    }
      

}

function estimateWidth( n ){
    let text =``
    let pad = 0
    for (let i = 0; i < n; i++){
        text += items[i]
        pad += 2 * 10    //l+r padding
    }

 eWidth = 11.5 * text.length + pad + BTN_WIDTH    // 13 character width
// console.log(eWidth,innerWidth)


}

function showItems ( n ) {
 
    navbar.innerHTML = `` 
    for (let i=0; i < n/* HW1: add Another condition overflow */; i++) {
    navbar.innerHTML += `<a href="">${items[i]}</a>`
    }

    let remaining = TOTAL - n
    if (remaining > 0){
        navbar.innerHTML += `<button onclick="showRemainingItems(${remaining})">
                              <span>${remaining}</span>=</button>`
    }
}
function showRemainingItems ( n ) {
      // toggle = checkbox principle
    if(dropOpen){
        navbarDrop.innerHTML = `` //close - clear
          dropOpen = false
    } else {
        for (let i = TOTAL - n; i < TOTAL/* HW1: add Another condition overflow */; i++) {
            navbar.innerHTML += `<a href="">${items[i]}</a>`
            }
          dropOpen = true
    }
 
   
    
}