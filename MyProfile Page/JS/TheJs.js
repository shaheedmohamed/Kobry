    // The NavBar And Landing Page 
{
    // The Header
    let TheHeader = document.getElementsByTagName("header")[0];
    let TheBottomNavBar = document.getElementsByClassName("BottomNavBar")[0];
    setTimeout(() => {
        TheHeader.style = " animation: TheHeaderEdit .4s linear  ; opacity:1;";
    }, 0);

    // T25yr El Bottom Nav Bar 34an bysl m4akl lma y7sal El animation Bta3 El NavBar Top
    // We Y7sal Animation Bardo
    setTimeout(() => {
        TheBottomNavBar.style.visibility = "visible"
        TheBottomNavBar.style.transition = "all .3s linear"
        TheBottomNavBar.style.animation = "TheBottomNavAni .5s linear"
    },500);
    // TheSeachBarActive 
    let TheSearchBarActiveComponts = [...document.getElementsByClassName("ActiveOnClick")];
    let ExitMark = document.getElementsByClassName("ssss")[0];
    let TheUl = document.getElementsByClassName("TheMainUl")[0];
    let TheNavBar = document.getElementsByTagName("nav")[0];
    // El Zorar Bta3 El 2dsa OW El KAlam BS Fy El Screan El Small 
    let TheBTNInSmallScreanTOSearch = document.getElementsByClassName("TheSearchInputInSmallScreanEdit")[0]
    TheSearchBarActiveComponts.forEach(Element => {
        Element.addEventListener("click", () => {
            TheSearchBarActiveComponts[2].focus();
            TheSearchBarActiveComponts[0].style.transition = " all .2s linear";
            TheSearchBarActiveComponts[0].style.border = "2px solid black";
            TheSearchBarActiveComponts[0].style.width = "320px";
            ExitMark.style.display = "block ";
        })
        // Lma Tdos 3ala El Zorar El So8yar Y7sal da 
        TheBTNInSmallScreanTOSearch.addEventListener("click", () => {
            TheUl.style.display = "none"
            TheBTNInSmallScreanTOSearch.style.display = "none"
            TheInputParent.style.display = "flex"
            TheNavBar.style.padding = "13.5px 0px"
        })
    })
    // When I Click X in First Input In Small Screan Will Do That
    ExitMark.addEventListener("click", () => {
        TheSearchBarActiveComponts[2].blur();
        TheSearchBarActiveComponts[0].style.transition = " all .1s linear";
        TheSearchBarActiveComponts[0].style.border = "0px solid black";
        TheSearchBarActiveComponts[0].style.width = "290px";
        ExitMark.style.display = "none";
        TheSearchBarActiveComponts[2].value = "";
    })

    // The Input In SMAll Screan Coustmize 
    let TheCompontsOnClick = [...document.getElementsByClassName("InputSmallScreanCompnts")];
    let TheInputParent = document.getElementsByClassName("InputPartSmallScreen")[0];
    let CloseBTNINSMAllINput = document.getElementsByClassName("TheDelIconInSmallScreen")[0];
    // When I Foucs in Input
    TheCompontsOnClick.forEach(Element => {
        Element.addEventListener("click", () => {
            TheCompontsOnClick[2].focus();
            TheInputParent.style.transition = " all .2s linear";
            TheInputParent.style.border = "2px solid black";
            TheInputParent.style.width = "75%";
            CloseBTNINSMAllINput.style.display = "block ";
        })
    })
    // When I blur or Get out From Input
    function GetOutFromInput() {
        TheBTNInSmallScreanTOSearch.style.display = "flex"
        TheInputParent.style.display = "none"
        TheUl.style.display = "flex"
        TheNavBar.style.padding = "0px"
    }
    TheCompontsOnClick[2].addEventListener("blur", () => {
        GetOutFromInput()
    })
    CloseBTNINSMAllINput.addEventListener("click", () => {
        GetOutFromInput()
    })
    // The CheckBox Edit
    //  TheSide Navbar
    let TheSideNavBarParent = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
    let TheBTNHampergerMenuOPEN = document.getElementsByClassName("TheHAmpMenu")[0];
    let TheBTNHampergerMenuClose = document.getElementsByClassName("CloseTheHamp")[0];
    TheBTNHampergerMenuOPEN.addEventListener("click", () => {
        TheSideNavBarParent.style.display = "block"
        TheSideNavBarParent.classList.add("TheRightPartInSmallScreanHamprgerMenuAnimationIn");
    })
    TheBTNHampergerMenuClose.addEventListener("click", () => {
        // TheSideNavBarParent.setAttribute("class","TheRightPartInSmallScreanHamprgerMenu TheRightPartInSmallScreanHamprgerMenuAnimationOUT")

        TheSideNavBarParent.style.display = "none"
    })
}
// Add icon
let AddParntsLinks = document.getElementsByClassName("AddParntsLinks")[0];
function AddIconFun(TheNameOfWebsite,TheNameOfUser,TheURLOfUSer) {
    let TheBigParntDiv = document.createElement("div");
    TheBigParntDiv.classList.add("TheBigParntDiv")
    // The Icon Of Browser and The Name of The Browser
    let TheParntOfIconAndName = document.createElement("div");
    TheParntOfIconAndName.classList.add("TheParntOfIconAndName")
    TheParntOfIconAndName.innerHTML = `<i class="fa-brands fa-chrome"></i> @${TheNameOfWebsite}`
    // The Parent of The Icon Username and Icon
    let theParntOfUser = document.createElement("div");
    theParntOfUser.style = "display: flex; gap: 10px;";
    // The Icon Of Trash Parnt
    let TheTrashIcon = document.createElement("i");
    TheTrashIcon.setAttribute("class","fa-solid fa-trash")
    let TheTrashParent = document.createElement("div");
    TheTrashParent.classList.add("TheIicon");
    TheTrashIcon.style = "cursor: pointer;"
    TheTrashParent.appendChild(TheTrashIcon);
    // The Name Of User
    let TheUserName = document.createElement("a");
    TheUserName.classList.add("TheURLofLink");
    TheUserName.textContent = TheNameOfUser;
    TheUserName.setAttribute("src",TheURLOfUSer)
    TheUserName.setAttribute("alt","_blank")
    // Add Element to The Parent of user
    theParntOfUser.appendChild(TheUserName);
    theParntOfUser.appendChild(TheTrashParent);
    // Add Element to The Big Parnt
    TheBigParntDiv.appendChild(TheParntOfIconAndName);
    TheBigParntDiv.appendChild(theParntOfUser);
    // Add All Element's to The Main Big Parnt
    AddParntsLinks.appendChild(TheBigParntDiv)
    let TheHrELe = document.createElement("hr");
    AddParntsLinks.appendChild(TheHrELe);
    TheTrashParent.addEventListener("click",() => {
        AddParntsLinks.removeChild(TheBigParntDiv);
        AddParntsLinks.removeChild(TheHrELe);
    })
}
let TheAddBTN = document.getElementsByClassName("AddBTNNewLink")[0];
let TheNameOfWebsite = document.getElementsByClassName("TheWebsiteName")[0];
let TheURLOfWebsite = document.getElementsByClassName("TheLinkName")[0];
let TheUseRNameofWebsite = document.getElementsByClassName("TheUserNameLink")[0];
TheAddBTN.addEventListener("click", () => {
    console.log(TheNameOfWebsite.value,TheUseRNameofWebsite.value,TheURLOfWebsite.value)
    AddIconFun(TheNameOfWebsite.value,TheUseRNameofWebsite.value,TheURLOfWebsite.value);
})
// Go Edit Profile
let TheInputPasswordBTN = document.getElementById("inputPassword6");
let GoEditBTN = document.getElementsByClassName("GoEditProfileBTN")[0];
window.localStorage.setItem("ThePassword",123)
GoEditBTN.addEventListener("click",() => {
    if(TheInputPasswordBTN.value === window.localStorage.getItem("ThePassword")){
        console.log(TheInputPasswordBTN.value);
        document.location.href = "TheProfileEditPage/TheProFilePageEdit.html"
        ErrorB.style.display = "none"
        TheInputPasswordBTN.value = "";
    }else{
        ErrorB.style.display = "inline-block"
    }
})
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
let TheImageProfile = document.getElementsByClassName("ProfileImage")[0];
SaveChangeBTN.addEventListener("click",() => {
    TheImageProfile.src = TheURLOfTheImage;
})

// Change The Profile Info
window.addEventListener("load",() => {
    let AllUserInfo = JSON.parse(localStorage.getItem('TheUserAllInfo'))
    let AllElementChangable = document.getElementsByClassName("TheChangeLocatStorageInfo");
    // console.log(AllUserInfo)
    AllElementChangable[0].textContent = AllUserInfo.UserName.UserNameInput;
    AllElementChangable[1].textContent = AllUserInfo.OrganizationName;
    AllElementChangable[2].textContent = AllUserInfo.UserName.UserNameInput;
    AllElementChangable[3].textContent = AllUserInfo.OrganizationName;
    AllElementChangable[4].textContent = AllUserInfo.Email;
    AllElementChangable[5].textContent = AllUserInfo.PhoneNumber;
    AllElementChangable[6].textContent = AllUserInfo.Birthday;
})
let TheSideNavBarParnt = document.getElementsByClassName("TheRightPartInSmallScreanHamprgerMenu")[0];
let TheHampmenuBTN = document.getElementsByClassName("mesdnu")[0];
let RuleOne = false;
TheHampmenuBTN.addEventListener("click",() =>{
    if(RuleOne === false){
        TheSideNavBarParnt.style.display = "block"
        TheSideNavBarParnt.style.animation = "TheSideNavIn 0.3s linear  "; 
        RuleOne=true;
    }else{
        TheSideNavBarParnt.style.animation = "TheSideNavOut 0.3s linear  "; 
        setTimeout(() => {
            TheSideNavBarParnt.style.display = "none"
        },290);
        RuleOne=false;
    }
})
window.onresize = () =>{
    location.reload();
}