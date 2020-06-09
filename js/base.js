//简单换肤
let dates = ['#aed9e0', '#bdb2ff', '#ffcad4','#dde7c7'];
let btn = document.querySelector('.skin-color').querySelectorAll('button');
let searchInput = document.querySelector('#search-input');
let searchChange = document.querySelector('#search-change');
let form = document.querySelector("form");
let input = document.querySelector("#search-input");
let colorClick = document.querySelector('.learn-more');
let demoB =document.querySelector('.dialog');

for (let i = 0; i < btn.length; i++)  //用var没办法保存
 {

    btn[i].addEventListener('click', function () {
        document.body.style.background = dates[i];
        demoB.style.backgroundColor=dates[i];
    });
 };
 let flag=0;
 colorClick.addEventListener('click',function(){
    
    if(flag==0){
        demoB.style.width='300px';
        demoB.style.height='200px';
        demoB.style.marginLeft='-150px';
        demoB.style.marginTop='-100px';
      flag=1;
    }
    else{
     demoB.style.width='0px';
        demoB.style.height='0px';
        demoB.style.marginLeft='0px';
        demoB.style.marginTop='0px';
        flag=0;
    }
 });
 let closeUp=document.querySelector('.show-up');
 closeUp.addEventListener('click',function(){
    demoB.style.width='0px';
    demoB.style.height='0px';
    demoB.style.marginLeft='0px';
    demoB.style.marginTop='0px';
     alert('您设置了温澜初始页颜色');


 });

//搜索框
// searchInput.addEventListener('click',function(){
//    searchChange.style.display='block';
// });

searchInput.addEventListener('focus',function(){
    searchInput.style.width ='560px';
    searchChange.style.display='block';
  
   
    
});
searchInput.addEventListener('blur',fn);
 function fn() {
    searchInput.style.width='200px';
    if(this.placeholder=='Search'){
        searchChange.style.display='none';
        this.value='';
    }else if(this.value!=''){ 
        searchChange.style.display='block';
    }
 }

let change = [
    "https://www.baidu.com/s?wd",
    "https://cn.bing.com/search?q",
    "http://www.google.com/search?source",
];
let btnChange = document.querySelector("#search-change").querySelectorAll("button");
let names = ["wd", "q", "q"];

for (let i = 0; i < btnChange.length; i++) {
    btnChange[i].addEventListener("click", function () {
    searchInput.removeEventListener('blur',fn);
     form.action = change[i];
        input.name = names[i];
    });
};
for (let i = 0; i < btnChange.length; i++) {
    btnChange[i].addEventListener("mousedown", function (e) {
        e.preventDefault();  //阻止默认事件

    
    });
};
//获取时间
NowTime(); //实时刷新
window.onload = function () {
    setInterval('NowTime()', 1000);
};

function NowTime() 
{        
    let time = new Date();
    //获取时分秒
    let h = time.getHours();
    let m = time.getMinutes();
  
   
    h = check(h);
    m = check(m);
    document.querySelector('#Time').innerHTML=+h+ ":"+m  ;
};
function check(i) {
        var num;
        i < 10 ? num = '0' + i : num = i;
  return num;
    };
let wallChange =document.querySelector('.wall-change');
let wallChangeBox =document.querySelector('.wall-change-box');
let wallFlag=0;
wallChange.addEventListener('click',function(){
    if(wallFlag==0){
    wallChangeBox.style.right ='0px';
    wallFlag=1;
    }else{
        wallChangeBox.style.right ='-300px';
        wallFlag=0;
        
    }
    

})

//自定义背景
let img =document.querySelector('.wall-change-box').querySelectorAll('img');
let bd = document.querySelector('body');
for(let i = 0 ;i < img.length;i++){
    img[i].addEventListener('click',function(){
        document.body.style.backgroundImage="url("+ this.src+")";
    })

}
//网上代码，原生js，我还不会
function shangc(e) {
					
						let files = document.getElementById("inputimgurl").files[0];
							console.log("是");
						
						let reader = new FileReader();
						let imgFile;
						reader.readAsDataURL(files);
						reader.onload =  e => {
						    imgFile = e.target.result;
						    let arr = imgFile.split(",");
						    // arr[1] 就是图片的 Base64编码字符串
						    console.log(arr[1]); 
					
						    document.body.style.backgroundImage='url('+'data:image/png;base64,'+arr[1]+')';
						};
					}

