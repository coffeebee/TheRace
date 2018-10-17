//Arrays
var light = new Array();
light[0] = 'stop.jpg';
light[1] = 'go.jpg';   
var teamI = new Array();
teamI[0] = `<img src='tony.jpg' alt='Tony' class='teams' onclick='changeI(0)'>`;
teamI[1] = `<img src='spiderman.jpg' alt='Spiderman' class='teams' onclick='changeI(1)'>`;
teamI[2] = `<img src='vision.jpg' alt='Vision' class='teams' onclick='changeI(2)'>`;
var teamC = new Array();
teamC[0] = `<img src='cap.jpg' alt='Murka' class='teams' onclick='changeC(0)'>`;
teamC[1] = `<img src='bucky.jpg' alt='Bucky Barnes' class='teams' onclick='changeC(1)'>`;   
teamC[2] = `<img src='hawkeye.jpg' alt='Hawkeye' class='teams' onclick='changeC(2)'>`;

var ironPic = teamI[0];
var capPic = teamC[0];
var timer;     

//initial display 
var stop = document.getElementById('light').innerHTML = `<img src='${light[0]}' id='stop' class='sign' alt='stop' onclick='changeLight(1)'>`;            
document.getElementById('teamIron').innerHTML = ironPic; 
document.getElementById('teamCap').innerHTML = capPic;

//change light functions                
function changeLight(i){
    if(i==1){                 
        document.getElementById('light').innerHTML = `<img src='${light[i]}' id='go' class='sign' alt='go' onclick='changeLight(0)'>`;    
        race();
    }
    else{
        pause();
        document.getElementById('light').innerHTML = stop;
    }       
}
//change team pic
function changeC(i){
    i +=1;    
    if(i == teamC.length){
        i =0;
    }
    capPic = teamC[i];
    document.getElementById('teamCap').innerHTML = capPic;    
}
function changeI(i){
    i +=1;    
    if(i == teamI.length){
        i =0;
    }
    ironPic = teamI[i];
    document.getElementById('teamIron').innerHTML = ironPic;      
}    
//Begin!!!
function race(){    
    timer = setInterval(move, 20);
}
function move(){ 
    //2 teams movements    
    var ironMove = parseInt(document.getElementById('teamIron').offsetLeft);       
    ironMove += Math.ceil(Math.random() * 8);
    var capMove = parseInt(document.getElementById('teamCap').offsetLeft);       
    capMove += Math.ceil(Math.random() * 8);
    //edge = finish line
    var edge = window.innerWidth -200;
    if(ironMove <edge && capMove <edge){
        document.getElementById('teamIron').style.left = ironMove+'px';        
        document.getElementById('teamCap').style.left = capMove+'px';
    }
    else{        
        clearInterval(timer);
        document.getElementById('light').innerHTML = stop;
        winner();        
    }    
}
var winnersI = new Array();
winnersI[0] = `<img src='tonywins.gif' id='wins' alt='Tony Wins' onclick='resetPage()'>`;
winnersI[1] = `<img src='spidermanwins.gif' id='wins' alt='Spiderman Wins' onclick='resetPage()'>`;
winnersI[2] = `<img src='visionwins.gif' id='wins' alt='Vision Wins' onclick='resetPage()'>`;
var winnersC = new Array();
winnersC[0] = `<img src='capwins.gif' id='wins' alt='Cap Wins' onclick='resetPage()'>`;
winnersC[1] = `<img src='buckywins.gif' id='wins' alt='Bucky Wins' onclick='resetPage()'>`;
winnersC[2] = `<img src='hawkeyewins.gif' id='wins' alt='Hawkeye Wins' onclick='resetPage()'>`;
function winner(){
    var tCap = document.getElementById('teamCap').style.left;
    var tIron = document.getElementById('teamIron').style.left;
    if(tIron > tCap){
        for(var i =0; i<teamI.length; i++){
            if(teamI[i] == ironPic){
                document.getElementById('winner').innerHTML = winnersI[i];
            }
        }        
    }
    else if(tCap > tIron){
        for(var i =0; i<teamI.length; i++){
            if(teamC[i] == capPic){
                document.getElementById('winner').innerHTML = winnersC[i];
            }
        }
    }
    else{
        document.getElementById('winner').innerHTML = `<img src='thanos.gif' id='wins' alt='Captain Wins' onclick='resetPage()'>`;
    }
}
function pause(){
    timer = clearInterval(timer);
}
function resetPage(){
    document.getElementById('teamIron').style.left =0;
    document.getElementById('teamCap').style.left =0;    
    document.getElementById('winner').innerHTML = "";      
}

 