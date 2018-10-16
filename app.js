const teamIron ={
    name: "Tony's Team",
    pic: `<img src='tony.jpg' alt='Tony' class='teams'>`
};
const teamCap ={
    name: "Cap's Team",
    pic: `<img src='cap.jpg' alt=''Murka' class='teams'>`
};
        
var light = new Array();
light[0] = 'stop.jpg';
light[1] = 'go.jpg';   
var lightDesc = new Array();
lightDesc[0] = 'stop';
lightDesc[1] = 'go';

//display light
document.getElementById('light').innerHTML = `<img src = '${light[0]}' id='stop' class='sign' alt = '${lightDesc[0]}' onclick='change(1)'>`;
                
//change picture functions                
function change(i){
    if(i==1){                 
        document.getElementById('light').innerHTML = `<img src = '${light[i]}' id='go' class='sign' alt = '${lightDesc[i]}' onclick='change(0)'>`;    
        race();
    }
    else{
        reloadPage();
    }       
}  

var ironPic = teamIron.pic;
var capPic = teamCap.pic; 
document.getElementById('teamIron').style.position = 'relative';
document.getElementById('teamCap').style.position = 'relative';

function race(){    
    document.getElementById('teamIron').innerHTML = ironPic 
    document.getElementById('teamCap').innerHTML = capPic;
    setInterval(move, 100);
}

function move(){ 
    var ironMove = parseInt(document.getElementById('teamIron').style.left);       
    ironMove += Math.ceil(Math.random() * 5);
    
    if(ironMove < 600){
        document.getElementById('teamIron').style.left = ironMove+'px';
    }else{
        //winner
    }    
}





function reloadPage(){
    location.reload();
}
