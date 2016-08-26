window.onload=function(){
   var inow = 4;
   var  json = {

    	"title" : [
    	    "消息1",
    	    "消息2",
    	    "消息3",
    	    "消息4",
    	    "消息5",
    	    "消息6",
    	    "消息7",
    	    "消息8",
    	    "消息9",
    	    "消息10",
    	    "消息11",
    	    "消息12",
    	    "消息13",
    	    "消息14",
    	    "消息15",
    	    "消息16",
    	    "消息17",
    	    "消息18",
    	    "消息19",
    	    "消息20",
    	    "消息21",
    	    "消息22",
    	    "消息23",
    	    "消息24",
    	    "消息25",
    	    "消息26",
    	    "消息27",
    	    "消息28",
    	    "消息29",
    	    "消息30"
    	]
    };

    	page({
		id :'div1',
		nowNum :1,
		allNum :Math.ceil(json.title.length/5),
		callBack : function(now,all){

 	    var num = now*5 < json.title.length ? 5 : json.title.length - (now-1)*5;
		    var oul = document.getElementById('ull');
		    var ali = oul.getElementsByTagName('li');
 		    if(oul.innerHTML == ''){
  		    	for( var i = 0; i < num; i++){
                     var oli = document.createElement('li');
                     oli.innerHTML =json.title[(now-1)*5+i];
                     oul.appendChild(oli);
  		    	}
 		    }
 		    else{
 		    	for(var i = 0; i < num; i++){
                  ali[i].innerHTML='';
                  ali[i].innerHTML =json.title[(now-1)*5+i];
                }
		}
	}
	
	});
}

function page(opt){
	var obj = document.getElementById(opt.id);
	
	var nowNum = opt.nowNum || 1;
	var allNum = opt.allNum || 5;
	var callBack = opt.callBack || function(){};
	
	if( nowNum>=4 && allNum>=6 ){
	
		var oA = document.createElement('a');
		oA.href = '#1';
		oA.innerHTML = '首页';
		oA.style.backgroundColor = "#10B46D";
		obj.appendChild(oA);
	
	}
	
	if(nowNum>=2){
		var oA = document.createElement('a');
		oA.href = '#' + (nowNum - 1);
		oA.innerHTML = '上一页';
		oA.style.backgroundColor = "#10B46D";
		obj.appendChild(oA);
	}
	
	if(allNum<=5){
		for(var i=1;i<=allNum;i++){
			var oA = document.createElement('a');
			oA.href = '#' + i;
			if(nowNum == i){
				oA.innerHTML = i;
				oA.style.backgroundColor = "#DB631E";
			}
			else{
				oA.innerHTML = i;
				oA.style.backgroundColor = "#10B46D";
			}
			obj.appendChild(oA);
		}	
	}
	else{
	
		for(var i=1;i<=5;i++){
			var oA = document.createElement('a');
			
			
			if(nowNum == 1 || nowNum == 2){
				
				oA.href = '#' + i;
				if(nowNum == i){
					oA.innerHTML = i;
					oA.style.backgroundColor = "#DB631E";
				}
				else{
					oA.innerHTML =  i ;
					oA.style.backgroundColor = "#10B46D";
				}
				
			}
			else if( (allNum - nowNum) == 0 || (allNum - nowNum) == 1 ){
			
				oA.href = '#' + (allNum - 5 + i);
				
				if((allNum - nowNum) == 0 && i==5){
					oA.innerHTML = (allNum - 5 + i);
					oA.style.backgroundColor = "#DB631E";
				}
				else if((allNum - nowNum) == 1 && i==4){
					oA.innerHTML = (allNum - 5 + i);
					oA.style.backgroundColor = "#DB631E";
				}
				else{
					oA.innerHTML = (allNum - 5 + i);
					oA.style.backgroundColor = "#10B46D";
				}
			
			}
			else{
				oA.href = '#' + (nowNum - 3 + i);
				
				if(i==3){
					oA.innerHTML = (nowNum - 3 + i);
					oA.style.backgroundColor = "#DB631E";
				}
				else{
					oA.innerHTML = (nowNum - 3 + i) ;
					oA.style.backgroundColor = "#10B46D";
				}
			}
			obj.appendChild(oA);
			
		}
	
	}
	
	if( (allNum - nowNum) >= 1 ){
		var oA = document.createElement('a');
		oA.href = '#' + (nowNum + 1);
		oA.innerHTML = '下一页';
		oA.style.backgroundColor = "#10B46D";
		obj.appendChild(oA);
	}
	
	if( (allNum - nowNum) >= 3 && allNum>=6 ){
	
		var oA = document.createElement('a');
		oA.href = '#' + allNum;
		oA.innerHTML = '尾页';
		oA.style.backgroundColor = "#10B46D";
		obj.appendChild(oA);
	
	}
	
	callBack(nowNum,allNum);
	
	var aA = obj.getElementsByTagName('a');
	
	for(var i=0;i<aA.length;i++){
		aA[i].onclick = function(){
			
			var nowNum = parseInt(this.getAttribute('href').substring(1));
			obj.innerHTML ='';
  			page({
			
				id : opt.id,
				nowNum : nowNum,
				allNum : allNum,
				callBack : callBack
			
			});
 			return false;
			
		};
	}

 } 