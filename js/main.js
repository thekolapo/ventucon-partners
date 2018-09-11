
var sections = ['home', 'team-section', 'apply-section', 'contact-section', 'portfolio-section', 'profile-section-specialist', 'portfolio-1', 'portfolio-2', 'portfolio-3', 'portfolio-1-more', 'portfolio-2-more', 'portfolio-3-more'];

var currentPortfolioPage = -1;
var currentlyInPortfolioSection = false;
var dontScroll = false;
var inReadMoreSection = false;

var navMenuObj;

var whoseProfileShouldshow;

$( document ).ready(function() {

    // setTimeout(() => {
    //     if(location.href.includes("apply") || location.href.includes("companies") || location.href.includes("company-full-details") || location.href.includes("team") || location.href.includes("contact")){
    //         // document.getElementsByClassName("logo").item(0).style.backgroundImage = "url('img/logo-2.png')";

    //         if(screen.width < 480){
    //             $("#nav").css("background", "white");
    //         }
    //     } 

    // }, 50);

    // if(location.href.includes("companies.html")){
    //     $('html, body').style("overflow", "hidden");
    //     // alert(1);
    // }

    if(location.href.includes("apply") || location.href.includes("companies") || location.href.includes("company-full-details") || location.href.includes("team") || location.href.includes("contact")){
        // document.getElementsByClassName("logo").item(0).style.backgroundImage = "url('img/logo-2.png')";

        if(screen.width < 480){
            $("#nav").css("background", "white");
        }
    } 
    
 
});

// window.addEventListener("wheel", function(e){
//     if(!currentlyInPortfolioSection || dontScroll || inReadMoreSection){
//         return;
//     }

//     dontScroll = true;

//     if(e.wheelDeltaY < -15){
//         currentPortfolioPage+=1;
//         if(currentPortfolioPage > 3){
//             currentPortfolioPage = 1;
//         }

//         goToSection("portfolio-" + currentPortfolioPage);
//     }
//     else if(e.wheelDelta > 15){
//         currentPortfolioPage-=1;
//         if(currentPortfolioPage <= 0){
//             currentPortfolioPage = 3;
//         }
//         goToSection("portfolio-" + currentPortfolioPage);
//     }

//     setTimeout(() => {
//         dontScroll = false;
//     }, 500);

// }, false)


// document.onkeyup = function detectKey(e){
//     if(!currentlyInPortfolioSection || dontScroll || inReadMoreSection){
//         return;
//     }

//     dontScroll = true;

//     e = window.event ? window.event : e;
  
//     if (e.keyCode == '38') {
//         //up arrow
//         currentPortfolioPage-=1;
//         if(currentPortfolioPage <= 0){
//             currentPortfolioPage = 3;
//         }
//         goToSection("portfolio-" + currentPortfolioPage);
//     }
//     else if(e.keyCode == '40'){
//       //down arrow
//       currentPortfolioPage+=1;
//         if(currentPortfolioPage > 3){
//             currentPortfolioPage = 1;
//         }
//         goToSection("portfolio-" + currentPortfolioPage);
//     }

//     setTimeout(() => {
//         dontScroll = false;
//     }, 700);
  
// };

//Touch start
// var ts;

// $(document.body).on("touchstart", function(event) {
//   ts = event.originalEvent.touches[0].clientY;
// });

// $(document.body).on("touchmove", function(event) {

//     if(!currentlyInPortfolioSection || dontScroll || inReadMoreSection){
//         return;
//     }

//     dontScroll = true;
  
//   var te = event.originalEvent.touches[0].clientY;
//   if ( (ts - te) > 40) {
//     //up swipe
//     currentPortfolioPage-=1;
//     if(currentPortfolioPage <= 0){
//         currentPortfolioPage = 3;
//     }
//     goToSection("portfolio-" + currentPortfolioPage);
//   }
//   else if( (ts-te) < -40){
//       //down swipe
//       currentPortfolioPage+=1;
//       if(currentPortfolioPage > 3){
//           currentPortfolioPage = 1;
//       }
//       goToSection("portfolio-" + currentPortfolioPage);
//   }

//   setTimeout(() => {
//     dontScroll = false;
//   }, 700);

//   event.preventDefault();
//   event.stopPropagation();
// });


window.onload = (() => {
    // self.location = "https://www.example.com";
    var profileIDS = ['profile-nini', 'profile-akin', 'profile-teme', 'profile-abdul', 'profile-charles', 'profile-debola'];
    for(var i = 0; i<profileIDS.length; i++){
        document.getElementById(profileIDS[i]).style.display = 'none';
    }
    document.getElementById('team-profiles').style.display = 'block';
    document.getElementById(localStorage.getItem("profileName")).style.display = 'block';
 })

window.onhashchange = (() => {
    if(inReadMoreSection){
        goToSection("portfolio-" + currentPortfolioPage);
        inReadMoreSection = false;
    }
})

function onMenuClick(x) {
    navMenuObj = x;
    x.classList.toggle("change");
    // goToSection("menu-overlay");
    toggleNav();
}

function goToSection(section){

    if(section != "home"){
        document.getElementsByClassName("logo").item(0).style.backgroundImage = "url('img/logo-2.png')";
    }
    else{
        document.getElementsByClassName("logo").item(0).style.backgroundImage = "url('img/logo-1.png')";
    }

    if(section == "menu-overlay"){

        var height =  document.getElementById("menu-overlay").style.height;
       
        document.getElementById("menu-overlay").style.height = (height == "100%")? "0%":"100%";
        // $('#menu').style.width = "100%";
    }
    else if(section == "portfolio-section"){
        document.getElementById("screen-change-overlay").style.opacity = "1";
        document.getElementById("screen-change-overlay").style.width = "100%";
        
        setTimeout(() => {
            for(x in sections){
                if(sections[x] != section){
                    document.getElementById(sections[x]).style.display = 'none';
                } 
                else{
                    document.getElementById(section).style.display = 'block';
                }
            }
            document.getElementById("portfolio-1").style.display = 'block';
            document.getElementById("screen-change-overlay").style.opacity = "0";
        }, 1000);

        setTimeout(() => {
            document.getElementById("screen-change-overlay").style.width = "0%";
        }, 1500);

        currentlyInPortfolioSection = true;
        inReadMoreSection = false;
        currentPortfolioPage = 1;
    }
    else if(section == "portfolio-more-details"){
        document.getElementById("screen-change-overlay").style.opacity = "1";
        document.getElementById("screen-change-overlay").style.width = "100%";
        $("body").css("overflow", "auto");

        setTimeout(() => {
            for(x in sections){
                document.getElementById(sections[x]).style.display = 'none';
            }

            document.getElementById("portfolio-section").style.display = 'block';
            document.getElementById("portfolio-"+currentPortfolioPage+"-more").style.display = 'block';
            document.getElementById("screen-change-overlay").style.opacity = "0";
        }, 1000);

        setTimeout(() => {
            document.getElementById("screen-change-overlay").style.width = "0%";
            inReadMoreSection = true;
        }, 1500);
    }
    else if(section == "home" || section == "nav-home" || section == "apply-section" || section == "contact-section" || section == "team-section" || section == "companies"){
        $("body").css("overflow", "auto");
        document.getElementById("screen-change-overlay").style.opacity = "1";
        document.getElementById("screen-change-overlay").style.width = "100%";
        document.getElementById("menu-overlay").style.height = "0%";

        currentlyInPortfolioSection = false;

        if(section == "nav-home"){
            section = "home";
        }
        else{
            navMenuObj.classList.toggle("change");
        }
    
        setTimeout(() => {
            for(x in sections){
                document.getElementById(sections[x]).style.display = 'none';
            }

            if(section == "companies"){
                $("body").css("overflow", "hidden");
                currentlyInPortfolioSection = true;
                inReadMoreSection = false;
                currentPortfolioPage = 1;
                section = "portfolio-section";
                document.getElementById("portfolio-1").style.display = 'block';
            }
            document.getElementById(section).style.display = 'block';
            document.getElementById("screen-change-overlay").style.opacity = "0";
        }, 1000);

        setTimeout(() => {
            document.getElementById("screen-change-overlay").style.width = "0%";
        }, 1500);

    }

    else {
        document.getElementById("screen-change-overlay").style.opacity = "1";
        document.getElementById("screen-change-overlay").style.width = "100%";
        setTimeout(() => {
            for(x in sections){
                if(sections[x] != section){
                    document.getElementById(sections[x]).style.display = 'none';
                } 
                else{
                    document.getElementById(section).style.display = 'block';
                }
            }
            document.getElementById("portfolio-section").style.display = 'block';
            document.getElementById("screen-change-overlay").style.opacity = "0";
        }, 1000);

        setTimeout(() => {
            document.getElementById("screen-change-overlay").style.width = "0%";
        }, 1500);

        // currentPortfolioPage+=1;

        // if(currentPortfolioPage == 3){
        //     currentPortfolioPage = 0;
        // }
       
        // currentlyInPortfolioSection = true;
        // currentPortfolioPage = 2;
        
    }

}

function showSubsection(section){
    document.getElementById("profile-early").style.display = "none";
    document.getElementById("profile-growth").style.display = "none";
    document.getElementById("about-section").style.display = "none";

    document.getElementById(section).style.display = "block";
}

function toggleNav(){
    var height =  document.getElementById("menu-overlay").style.height;
    document.getElementById("menu-overlay").style.height = (height == "100%")? "0%":"100%";
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    // win.focus();
}

function goToTeamProfile(name){
    whoseProfileShouldshow = name;
    localStorage.setItem("profileName", whoseProfileShouldshow);
    location.href = "team-profile.html";
}

function goToPage(page){
    location.href = page;
}




