//  let state = false;

//  document.getElementById("skipL").addEventListener('click', function() {
//         chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
//             state = true;
//             document.getElementsByTagName("h3")[0].innerText = "State: Activated";
//             document.getElementsByTagName("h3")[0].style.color = "green";

//             chrome.tabs.sendMessage(activeTabs[0].id, { sentState: state });
            
//         });
//     });


//   document.getElementById("stop").addEventListener('click', function() {
//         chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            
// 	        state = false;
//             document.getElementsByTagName("h3")[0].innerText = "State: Deactivated";
//             document.getElementsByTagName("h3")[0].style.color = "red";

//             chrome.tabs.sendMessage(activeTabs[0].id, { sentState: state });
            
//         });
//     });
    

