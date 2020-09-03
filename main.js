

function changeBackground() {

    var color = document.getElementById("name").value.toLowerCase(); 
    document.getElementById("objective").style.color = color;
    document.getElementById("objectiveBody").style.color = color;
    document.getElementById("mission").style.color = color;
    document.getElementById("missionBody").style.color = color;
    document.getElementById("vision").style.color = color;
    document.getElementById("visionBody").style.color = color;
    document.getElementById("visionBody").style.color = color;
    document.getElementById("AboutUs").style.color = color;
    document.getElementById("AboutUsBody").style.color = color;

    const observer = new MutationObserver(mutation => {

      });
    
      observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
        characterData: true
      });
 
    
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);
