let d = document
let $select = d.getElementById("select"),
    $icon = d.getElementById("icon"),
    $options = d.getElementById("options")
    $txtSelect = d.querySelector("#select h3"),
    $contenOne = d.querySelector("#cont2"),
    $contenTwo = d.querySelector("#cont3"),
    $contenThree = d.querySelector("#cont4")
    
$select.addEventListener("click", (e)=> {
    $select.classList.toggle("acti")
    $icon.classList.toggle("aparecer")
    $options.classList.toggle("aparecer")  
})

d.querySelectorAll(" #options > h3 ").forEach((op) => {
    op.addEventListener("click", (e) => {
        $txtSelect.innerHTML = e.currentTarget.innerHTML
        $select.classList.toggle("acti")
        $icon.classList.toggle("aparecer")
        $options.classList.toggle("aparecer")
        
        
        if($txtSelect.innerHTML == "Primer Periodo"){
            $contenOne.classList.add("grid")
            $contenTwo.classList.remove("grid")
            $contenThree.classList.remove("grid")
        }
        if($txtSelect.innerHTML == "Segundo Periodo"){
            $contenTwo.classList.add("grid")
            $contenOne.classList.remove("grid")
            $contenThree.classList.remove("grid")
        }
        if($txtSelect.innerHTML == "Tercer Periodo"){
            $contenThree.classList.add("grid")
            $contenTwo.classList.remove("grid")
            $contenOne.classList.remove("grid")
        }
    })
})

