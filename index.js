const countdown=document.getElementsByTagName("h1");
setTimeout(function timer1(){
 countdown[0].innerText="9";
  setTimeout(function timer2(){
   countdown[0].innerText="8";
    setTimeout(function timer3(){
      countdown[0].innerText="7";
      setTimeout(function timer4(){
      countdown[0].innerText="6";
        setTimeout(function timer5(){
         countdown[0].innerText="5";
          setTimeout(function timer6(){
            countdown[0].innerText="4";
            setTimeout(function timer7(){
             countdown[0].innerText="3";
              setTimeout(function timer8(){
              countdown[0].innerText="2";
                setTimeout(function timer9(){
                 countdown[0].innerText="1";
                  setTimeout(function timer10(){
                  countdown[0].innerText="0";
                    setTimeout(function timer1(){
                     countdown[0].innerText="Wish You Happy New Year";
                    },1000);
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
    },1000);
   },1000);
},1000);