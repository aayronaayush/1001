let parts = {}

//select 
for(let i=0;i<21;i++)
{
    let newProp = `n${i}`
    parts[newProp] = document.querySelector(`#n${i}`)
}

let keys = Object.keys(parts)

for (let i=1;i<21;i++)
{
    parts[keys[i]].style.display = "none"
    // parts[keys[i]].classList.add("fade-in")
    // parts[keys[i]].classList.add("is-paused")
}


// access button A and next button
// parts[`n${i}`].childNodes[1].childNodes[1]

// access button B
// parts[`n${i}`].childNodes[1].childNodes[3]

// parts.n0.childNodes[1].childNodes[1].addEventListener("click",()=>
// {
//     console.log("clicked")
// })

// N0 two buttons
document.querySelector("#n0").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n0").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n1").style.display = "block" //show the next item
})

document.querySelector("#n0").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n0").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n2").style.display = "block"
    
})

// N1 two buttons
document.querySelector("#n1").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n1").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n2").style.display = "block" //show the next item
})

document.querySelector("#n1").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n1").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n6").style.display = "block"
})

// N2 one button
document.querySelector("#n2").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n2").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n3").style.display = "block" //show the next item
})

// N3 two buttons
document.querySelector("#n3").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n3").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n4").style.display = "block" //show the next item
})

document.querySelector("#n3").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n3").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n5").style.display = "block"
})

// N4
document.querySelector("#n4").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n4").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N5
document.querySelector("#n5").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n5").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N6
document.querySelector("#n6").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n6").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n7").style.display = "block" //show the next item
})

document.querySelector("#n6").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n6").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n9").style.display = "block"
})

// N7
document.querySelector("#n7").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n7").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n8").style.display = "block" //show the next item
})

// N8
document.querySelector("#n8").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n8").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N9
document.querySelector("#n9").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n9").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n10").style.display = "block" //show the next item
})

document.querySelector("#n9").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n9").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n11").style.display = "block"
})

// N10
document.querySelector("#n10").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n10").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N11
document.querySelector("#n11").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n11").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N12
document.querySelector("#n12").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n12").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n13").style.display = "block" //show the next item
})

// N13
document.querySelector("#n13").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n13").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n14").style.display = "block" //show the next item
})

document.querySelector("#n13").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n13").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n17").style.display = "block"
})

// N14
document.querySelector("#n14").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n14").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n15").style.display = "block" //show the next item
})

document.querySelector("#n14").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n14").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n16").style.display = "block"
})

// N15
document.querySelector("#n15").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n15").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N16
document.querySelector("#n16").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n16").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block" //show the next item
})

// N17
document.querySelector("#n17").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n17").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n18").style.display = "block" //show the next item
})

document.querySelector("#n17").childNodes[1].childNodes[3].addEventListener("click",()=>
{
    document.querySelector("#n17").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n19").style.display = "block"
})

// N18
document.querySelector("#n18").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n18").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block"
})

// N19
document.querySelector("#n19").childNodes[1].childNodes[1].addEventListener("click",()=>
{
    document.querySelector("#n19").childNodes[1].style.display = "none" //hide the buttons
    document.querySelector("#n20").style.display = "block"
})

// N20

