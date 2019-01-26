// document.getElementById('next').onclick = function (){
//    function getValue(idname){
//     let result = document.getElementById(idname).value;
//     alert(result);
// }
//  getValue();
// };

// const next = document.getElementById('next');
// $('#next').on("click",function (){
//     alert("aaa");
// });



function getValue(idname){
  // value値を取得する
  var result = document.getElementById(idname).value;

  // Alertで表示する
  alert("value値は「" + result + "」です");

setValue();

}


function setValue(){
    var obj = document.getElementById(idname);
    obj.value = result;
    alert(result);
}




    


// var config = {
//     apiKey: "AIzaSyC1i-wI2ta_iY7duNQQIlbIksR_uSU6cLY",
//     authDomain: "chat-2-bab27.firebaseapp.com",
//     databaseURL: "https://chat-2-bab27.firebaseio.com",
//     projectId: "chat-2-bab27",
//     storageBucket: "chat-2-bab27.appspot.com",
//     messagingSenderId: "464479930272"
//   };
//   firebase.initializeApp(config);

// //  MSG送受信準備
// const newPostRef = firebase.database().ref();

// //  Submit:MSG送信
// // $("#send").on("click",function(){
// //     newPostRef.push({
// //         username:$("#username").val(),
// //         text: $("#text").val(),
// //         time: time()
// //     });
// //     $("#text").val("");
// // });

// $("#send").on("click",function(){
//     newPostRef.push({
//         username:$("#username").val(),
//         text: $("#text").val(),
//         time: time()
//     });
//     $("#text").val("");
//     alert('aaaa');
// });

// //  enterキーによる送信
// $("#text").on("keydown",function(e){
//     if(e.keyCode == 13){
//         newPostRef.push({
//         username:$("#username").val(),
//         text: $("#text").val(),
//         time: time()
//     });
//     $("#text").val("");
//     }
    
// });


// // MSGデータ受信
// newPostRef.on("child_added",function(data){
//     const v = data.val();
//     const k = data.key;
//     let str = "";
//     // 追記
//     str += '<div id ="'+k+'" class="msg_main">'
//     str += '<div class="msg_left">';
//     str += '<div class=""><img src="imgs/buke.png" alt="" class="icon '+v.username+' " width="30"></div>';
//     str += '<div class="msg">';
//     str += '<div class="name">'+ v.username + '</div>';
//     str += '<div class="text">' + v.text +'</div>';
//     str += '</div>';
//     str += '</div>';
//     str += '<div class="msg_right">';
//     str += '<div class="time">'+ v.time +'</div>';
//     str += '</div>';
//     str += '</div>';
//     // 
//     $('#output').prepend(str);
// });


// //  時間を取得する関数
// function time(){
//     let date = new Date();
//     let mm = date.getMonth() + 1; 
//     let dd = date.getDate();  
//     let hh = ("0"+date.getHours()).slice(-2);
//     let min = ("0"+date.getMinutes()).slice(-2);
//     // let sec = ("0"+date.getSeconds()).slice(-2);
//     // let time = + mm + "/" + dd + "" + hh + ":" + min;
//     // let time = + hh + ":" + min + ":" + sec;
//     let time = + mm + '/' + dd + '\t' + hh + ':' + min;
//     return time;
// }
