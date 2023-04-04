var menulist = document.getElementById('menu-list')
var row = document.querySelector('.row')

menulist.style.maxHeight = "0px"
row.style.transform = "translateY(0px)"

function togglemenu(){
if (menulist.style.maxHeight == "0px") {
menulist.style.maxHeight = "130px"
row.style.transform = "translateY(60px)"

} else {
menulist.style.maxHeight = "0px"
row.style.transform = "translateY(0px)"
}

}

