function lan(){
    const rupees=Number(document.getElementById("input").value)
    const landon=rupees*0.0096
    let result=document.getElementById("result")
    result.innerHTML=landon.toFixed(2) +" Rupees"
}
function nz(){
    const rupees1=Number(document.getElementById("input").value)
    const nz=rupees1*0.0020
    let result=document.getElementById("result")
    result.innerHTML=nz.toFixed(2) +" Rupees"
}
function sl(){
    const rupees2=Number(document.getElementById("input").value)
    const sl=rupees2*3.77 
    let result=document.getElementById("result")
    result.innerHTML=sl.toFixed(2) +" Rupees"
}
function usa(){
    const rupees3=Number(document.getElementById("input").value)
    const usa=rupees3*0.0012 
    const result=document.getElementById("result")
    result.innerHTML=usa.toFixed(2) +" Rupees"
}
function aus(){
    const rupees4=Number(document.getElementById("input").value)
    const aus=rupees4*0.0019
    const result=document.getElementById("result")
    result.innerHTML=aus.toFixed(2) +" Rupees"
}
function tai(){
    const rupees5=Number(document.getElementById("input").value)
    const tai=rupees5*2.33 
    const result=document.getElementById("result")
    result.innerHTML=tai.toFixed(2) +" Rupees"
}