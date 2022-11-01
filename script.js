let OurForm=document.getElementById("OurForm")
let OurField=document.getElementById("OurField")
let OurList=document.getElementById("OurList")
OurForm.addEventListener("submit",(e) => {
  e.preventDefault()
  createItem(OurField.value)
})
function createItem(x){
  let A=`<li> ${x}<button onclick="QW(this)">Delete</button></li>`
  OurList.insertAdjacentHTML("beforeend", A)
  OurField.value= ""
  OurField.Focus()
}
function QW(ZX){
  ZX.parentElement.remove()
}
