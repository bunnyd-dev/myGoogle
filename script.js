let main_cont2=document.querySelector('#textbox')
let query=document.getElementById('textbox').value
function change_bg_color() {
    main_cont2.style.backgroundColor='black'
}
function return_default() {
    main_cont2.style.backgroundColor=' rgb(30, 30, 30)'
}
main_cont2.addEventListener('keydown', (e)=> {
    if (e.key=='Enter') {
        /*window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);*/
        console.log(`https://www.google.com/search?q=${query}`)
        console.log(query)
    }
})