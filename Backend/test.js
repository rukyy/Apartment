// let address = document.getElementById('address')
// let briefdes = document.getElementById("briefdes")
// let dimension = document.getElementById('dimension')
let button = document.getElementById('button')
let form = document.getElementById('form')
const formData = new FormData()


const submit = ()=>{
    // e.preventDefault()
    let files = document.querySelectorAll("[type=text]")
    let images = document.querySelector("[type=file]").files

    // for(i=0; i<files.length; i++){
    //     let file = files[i].value
    //     formData.append("file",file)
    //     // console.log(formData)
    // }
    for(i=0; i<images.length; i++){
        let file = images[i]
        formData.append("file",file)
        // console.log(formData)
    }
    // console.log(formData.getAll("file"))

    fetch("http://localhost:7000/photos",
    {
        method:"POST",
        body:formData
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        // console.log(data)
    })
}


// button.addEventListener('click',submit())

