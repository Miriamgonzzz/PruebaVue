<template>
    <div class="c-spirit__element">
        <div class="insaid">
            <div class="c-spirit__eyeD"><div class="c-spirit__eyeD__pupila"></div></div>
            <div class="c-spirit__eyeI"><div class="c-spirit__eyeI__pupila"></div></div>
        </div>
        <div class="c-spirit__puddle">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
//   .c-spirit__element {
//     margin: 40px;
//     width:260px ;
//     height:270px;
//     display: inline-block;
//     position: relative;
//     border-radius: 60px;
//     -webkit-clip-path: path(var(--path) );
//     clip-path: path(var(--path) ) ;
//     //clip-path:border-box(var(--border)) ;
//     border-radius: 100px;
//     background: rgb(65, 4, 235);
//     //overflow: hidden;
//     }
.c-spirit__element{
    width: 100%;
    height: 600px;
    background: black;
}
.c-spirit__element::before,
.c-spirit__element::after {
  content: "";
  position: absolute;
  background-color: #ffffff;
  
}

.c-spirit__puddle::before {
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 120px;
  height: 160px;
  border-radius:50% 50% 0 0 / 100% 100% 0 0 ;
}

.c-spirit__puddle::after {
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 40px;
  border-radius: 50%;
}

.c-spirit__puddle::before,
.c-spirit__puddle::after {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
}

.c-spirit__puddle::before {
  animation: wave 2s infinite linear;
}

.c-spirit__puddle::after {
  animation: ripple 3s infinite ease-in-out;
}

    @keyframes wave {
  0% {
    transform: translateX(-50%) translateY(0%);
  }
  50% {
    transform: translateX(-50%) translateY(-10%);
  }
  100% {
    transform: translateX(-50%) translateY(0%);
  }
}

@keyframes ripple {
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.3);
    opacity: 0.7;
  }
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}
    // .insaid{
    //     margin: 0;
    //     position: absolute;
    //     top: 5px;
    //     left: 5px;
    //     right: 10px;
    //     bottom:5px;
    //     background: rgb(20, 208, 233);
    //     -webkit-clip-path: path(var(--path) );
    //     clip-path: path(var(--path) ) ;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     gap: 10px;
    // }
    
//   .c-spirit__eyeD {
//     width:20px;
//     height:60px;
//     border: 1px solid #000000;
//     border-radius: 50%;
//     background: rgb(255, 255, 255);
//   }

//   .c-spirit__eyeD__pupila {
//     width:15px;
//     height:15px;
//     border: 1px solid #000000;
//     border-radius: 50%;
//     background: rgb(0, 0, 0);
//   }
  
//  .c-spirit__eyeI {
//     width:20px;
//     height:60px;
//     border: 1px solid #000000;
//     border-radius:50% ;
//     background: rgb(255, 255, 255);
//   }

//   .c-spirit__eyeI__pupila {
//     width:15px;
//     height:15px;
//     border: 1px solid #000000;
//     border-radius: 50%;
//     background: rgb(0, 0, 0);
//   }
  

</style>