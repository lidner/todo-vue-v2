<template>
  <div id="error-box">
  <div id="circles">
    <div class="circle-box" id="circle1">
      <div class="circle-shadow"></div>
      <div class="circle">
          <div class="semicircle hide top"></div>
          <div class="semicircle bottom"></div>
      </div>
    </div>

    <div class="circle-box" id="circle2">
      <div class="circle">
          <div class="semicircle top"></div>
          <div class="semicircle hide bottom"></div>
      </div>
      <div class="circle-shadow"></div>
    </div>
    
    <div class="guy">
      <div class="body-part head"></div>
      <div class="body-part body"></div>

      <div class="arms left-arm">
        <div class="body-part upper-arm"></div>
        <div class="body-part forearm"></div>
      </div>
      <div class="arms right-arm">
        <div class="body-part upper-arm"></div>
        <div class="body-part forearm"></div>
      </div>

      <div class="legs left-leg">
        <div class="body-part thigh"></div>
        <div class="body-part calf"></div>
      </div>
      <div class="legs right-leg">
        <div class="body-part thigh"></div>
        <div class="body-part calf"></div>
      </div>
    </div>
  </div>
  
  <div id="text">
    <div id="border-top"></div>
    <h1>Упс, должно быть вы открыли несуществующую страницу</h1>

    <p>Несколько советов для исправления данного недоразумения:</p>
    <ul>
      <li>Еще раз перепроверьте адрес, который вы набрали.</li>
      <li>Если же Вы нашли ошибку, которая привела к появлению данной страницы, то просим <a href="http://91.201.215.49/">написать нам</a>. Мы постараемся разобрать Вашу проблему как можно скорее.</li>
      <li>Если же Вы перешли по ссылке, то скорее всего она некорректная.</li>
      <li>Вы всегда можете вернуться на <router-link :to="{ name: 'home' }">главную</router-link>  и попробовать снова.</li>
    </ul>
  </div>
</div>



</template>

<script>
export default {
    name: 'PageNotFound',

}
</script>

<style>
html, body {
	 background-color: #222;
	 color: #fff;
	 font-family: 'Roboto', sans-serif;
	 height: 100vh;
	 overflow: hidden;
}
 #error-box {
	 margin: 120px auto 0 auto;
	 padding: 2em 3em;
	 max-width: 1000px;
	 max-height: 360px;
	 border: 3px solid;
	 border-image: linear-gradient(to bottom, transparent, #666, transparent) 1 100%;
}
 #error-box h1 {
	 font-size: 30px;
	 padding-bottom: 0.8em;
}
 #error-box p {
	 margin-bottom: 1.3em;
}
 #error-box a {
	 text-decoration: none;
	 color: #666;
}
 #error-box ul {
	 padding-left: 1em;
}
 #error-box li {
	 margin: 1em 0;
}
 #error-box:after {
	 content: '';
	 display: block;
	 clear: both;
}
 #circles {
	 float: left;
	 width: 200px;
}
 #circles #circle1 {
	 margin-top: -250px;
}
 #circles #circle2 {
	 margin-top: 250px;
}
 #text {
	 float: right;
	 width: calc(100% - 200px - 6em);
     color: #fff;
}
 .circle-box {
	 position: relative;
	 width: 100%;
	 height: 280px;
	 overflow: hidden;
}
 .circle-box .semicircle.hide, .circle-box .circle-shadow {
	 position: relative;
	 z-index: 100;
}
 .circle-box .circle-shadow {
	 width: 100%;
	 height: calc(100% - 80px);
	 background-color: #222;
}
 .circle-box .circle {
	 overflow: hidden;
	 height: 80px;
	 width: 100%;
}
 .circle-box .circle .semicircle {
	 height: 50%;
}
 .circle-box .circle .semicircle.top, .circle-box .circle .semicircle.bottom {
	 border: 2px solid #666;
}
 .circle-box .circle .semicircle.top {
	 border-top-left-radius: 50% 100%;
	 border-top-right-radius: 50% 100%;
	 border-bottom: none;
}
 .circle-box .circle .semicircle.top.hide {
	 box-shadow: 0 -2000px 0 2000px #222;
}
 .circle-box .circle .semicircle.bottom {
	 border-bottom-left-radius: 50% 100%;
	 border-bottom-right-radius: 50% 100%;
	 border-top: none;
}
 .circle-box .circle .semicircle.bottom.hide {
	 box-shadow: 0 2000px 0 2000px #222;
}
 .guy {
	 position: relative;
	 left: 35%;
	 animation: fall 2s linear infinite;
}
 .guy .body-part {
	 background-color: #666;
	 border-radius: 10px;
}
 .guy .head {
	 width: 25px;
	 height: 25px;
	 border-radius: 50%;
}
 .guy .body {
	 width: 30px;
	 height: 60px;
	 transform: rotate(-20deg);
	 margin-left: 15px;
}
 .guy .arms {
	 animation: upper-arms 1s linear infinite;
	 transform-origin: 7.5px 7.5px;
	 border: 1px solid transparent;
	 position: absolute;
}
 .guy .left-arm {
	 top: 28px;
	 left: 12px;
}
 .guy .right-arm {
	 top: 26px;
	 left: 16px;
	 animation-delay: 0.5s;
}
 .guy .upper-arm {
	 width: 15px;
	 height: 40px;
}
 .guy .forearm {
	 width: 15px;
	 height: 35px;
	 margin-top: -15px;
	 transform-origin: 7.5px 7.5px;
	 animation: forearms 1s linear infinite;
}
 .guy .right-arm .forearm {
	 animation-delay: 0.5s;
}
 .guy .legs {
	 animation: legs 1s linear infinite;
	 transform-origin: 7.5px 7.5px;
	 border: 1px solid transparent;
	 position: absolute;
}
 .guy .left-leg {
	 top: 70px;
	 left: 22px;
}
 .guy .right-leg {
	 top: 66px;
	 left: 35px;
	 animation-delay: 0.5s;
}
 .guy .thigh {
	 width: 15px;
	 height: 45px;
}
 .guy .calf {
	 width: 15px;
	 height: 40px;
	 margin-top: -15px;
	 transform-origin: 7.5px 7.5px;
	 animation: calves 1s linear infinite;
}
 .guy .right-leg .calf {
	 animation-delay: 0.5s;
}
 @keyframes upper-arms {
	 0% {
		 transform: rotate(20deg);
	}
	 50% {
		 transform: rotate(60deg);
	}
	 100% {
		 transform: rotate(20deg);
	}
}
 @keyframes forearms {
	 0% {
		 transform: rotate(30deg);
	}
	 50% {
		 transform: rotate(50deg);
	}
	 100% {
		 transform: rotate(30deg);
	}
}
 @keyframes legs {
	 0% {
		 transform: rotate(-20deg);
	}
	 50% {
		 transform: rotate(15deg);
	}
	 100% {
		 transform: rotate(-20deg);
	}
}
 @keyframes calves {
	 0% {
		 transform: rotate(-90deg);
	}
	 50% {
		 transform: rotate(0deg);
	}
	 100% {
		 transform: rotate(-90deg);
	}
}
 @keyframes fall {
	 0% {
		 top: -800px;
	}
	 100% {
		 top: -200px;
	}
}
 
</style>