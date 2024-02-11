import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

addOnUISdk.ready.then(() => {
    console.log("addOnUISdk is ready for use.");

    document.getElementById("button0").addEventListener("click",async function() {
        let path = "./images/1F600_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });

    document.getElementById("button1").addEventListener("click",async function() {
        let path = "./images/1F601_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });document.getElementById("button2").addEventListener("click",async function() {
        let path = "./images/1F602_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button3").addEventListener("click",async function() {
        let path = "./images/1F603_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button4").addEventListener("click",async function() {
        let path = "./images/1F604_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button5").addEventListener("click",async function() {
        let path = "./images/1F605_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button6").addEventListener("click",async function() {
        let path = "./images/1F606_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button7").addEventListener("click",async function() {
        let path = "./images/1F607_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button8").addEventListener("click",async function() {
        let path = "./images/1F608_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });
    document.getElementById("button9").addEventListener("click",async function() {
        let path = "./images/1F608_color.png";
        fetch(path).then(response => response.blob()).then(blob => {
            addOnUISdk.app.document.addImage(blob);
            console.log("hi");
        })  
    });

});
