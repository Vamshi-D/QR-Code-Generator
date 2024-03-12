let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let url = document.querySelector("#url").value
    let qr = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${"url"}`
    console.log(url.value)
    let img = document.querySelector("#image")
    console.dir(img)
    img.src=qr
})