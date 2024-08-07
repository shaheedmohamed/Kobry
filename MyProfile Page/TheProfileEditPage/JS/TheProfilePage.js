window.onresize = () =>{
    // location.reload();
    console.log("fjOasdfo")
}
// Change The profile image
let TheFileInput = document.getElementsByClassName("TheInputFile")[0];
let TheInputClickBTN = document.getElementsByClassName("BrowseBTN")[0];
TheInputClickBTN.addEventListener("click",() => {
    TheFileInput.click();

})
let TheImageOutPut = document.getElementsByClassName("TheOutPutImage")[0];
let TheErrorB = document.getElementsByClassName("Error")[0];
let TheDragArea = document.getElementsByClassName("TheDragAreaContent")[0];
let TheImageArea = document.getElementsByClassName("ImageArea")[0];
let TheImageAreaElement = document.getElementsByClassName("TheOutPutImage")[0];
let TheURLOfTheImage;
function ChangeImage() {
    TheURLOfTheImage = URL.createObjectURL( TheFileInput.files[0]);
    TheAllInfoOfImage = TheFileInput.files[0].type;
    if(TheAllInfoOfImage === "image/png" || TheAllInfoOfImage === "image/jpeg" || TheAllInfoOfImage === "image/svg+xml"){
        TheErrorB.style.display = "none"
        // The Drag Area Will Be Romved
        TheDragArea.style.display = "none";
        TheImageArea.style.display = "block";
        TheImageAreaElement.src = TheURLOfTheImage;
    }else{
        TheErrorB.style.display = "block"
    }
}
TheFileInput.addEventListener("change",() => {
    ChangeImage()
})
TheDragArea.addEventListener("dragover",(e) => {
    e.preventDefault();
})
TheDragArea.addEventListener("drop",(e) => {
    e.preventDefault();
    TheFileInput.files = e.dataTransfer.files;
    ChangeImage()();
})

// When Click X
let TheXIcon = document.getElementsByClassName("EditXMark")[0];
TheXIcon.addEventListener("click",() => {
    TheDragArea.style.display = "block";
    TheImageArea.style.display = "none";
})
// When i click Save Change's
let SaveChangeBTN = document.getElementsByClassName("SaveChangeBTN")[0];
let TheImageProfile = document.getElementsByClassName("TheImageProfile")[0];
SaveChangeBTN.addEventListener("click",() => {
    TheImageProfile.src = TheURLOfTheImage;
})
// The Input Side
let AllInputs = document.getElementsByClassName("form-control");
let TheSaveChangesBTN = document.getElementsByClassName("SaveCHnageSBT")[0];
TheSaveChangesBTN.addEventListener("click",() => {
    let theAllInfoObject = {
        UserName : {
            UserNameInput : AllInputs[0].value,
            FirstName : AllInputs[1].value,
            LastName : AllInputs[2].value,
        },
        OrganizationName : AllInputs[3].value,
        Location : AllInputs[4].value,
        Email : AllInputs[5].value,
        PhoneNumber : AllInputs[6].value,
        Birthday : AllInputs[7].value,
        TheImageProFileSrc: TheURLOfTheImage
    }
    window.localStorage.setItem("TheUserAllInfo",JSON.stringify(theAllInfoObject))
})
var user = JSON.parse(localStorage.getItem('TheUserAllInfo'))
// window.localStorage.clear();
window.addEventListener("load",() => {
    AllInputs[0].value = user.UserName.UserNameInput;
    AllInputs[1].value = user.UserName.FirstName;
    AllInputs[2].value = user.UserName.LastName;
    AllInputs[3].value = user.OrganizationName;
    AllInputs[4].value = user.Location;
    AllInputs[5].value = user.Email;
    AllInputs[6].value = user.PhoneNumber;
    AllInputs[7].value = user.Birthday;
})