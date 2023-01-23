function preview(){
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const mname = document.getElementById('mname').value
    const localg = document.getElementById('lgov').value
    const idno = document.getElementById('idno').value
    const idate = document.getElementById('dateis').value

    const cname = document.getElementById('cardname')
    cname.textContent= lname.toUpperCase()  + ' '+ mname.toUpperCase() + ' ' + fname.toUpperCase()


    const cgov = document.getElementById('cardgov')
    cgov.innerHTML ='Local Govt. : ' + localg.toUpperCase()
    
    const cardid = document.getElementById('cardid')
    cardid.textContent = 'ISY / ' +idno

    const carddate = document.getElementById('carddate')
    carddate.textContent = idate

    

}
function loadImage(event){
    const image = document.getElementById('userimgg')
    image.src = URL.createObjectURL(event.target.files[0])
}
