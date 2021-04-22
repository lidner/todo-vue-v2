<template>
    <div>
        <!-- First Section -->
    <div class="first-section" ref='vantaRef'>
        <div class="container">
            <h1>Metall</h1>
            <p>Сервис по реализации металла</p>
            <div class="auth-block">
                <!-- <a class="auth-btn login" href="login.html">Войти</a> -->
                <router-link class="auth-btn login" :to="{ name: 'login' }">Войти</router-link>
                <!-- <a class="auth-btn register">Регистрация</a> -->
            </div>
        </div>
    </div>
    <!-- First Section END -->
    <!-- Second Section -->
    <div class="second-section">
        <div class="container">
            <div class="section-title">
                <h3>Преимущества</h3>
            </div>
            <ul class="advantages">
                <li class="advantages-item">
                    <div class="circle">
                        <span class="counter">1</span>
                    </div>
                    <div class="advantage-img">
                        <img src="@/assets/auction.png" alt="">
                    </div>
                    <div class="advantage-content">
                        <h3 class="advantage-content-heading">Аукцион</h3>
                        <p class="advatage-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga eveniet sunt rem itaque beatae eius sapiente ab dicta impedit.</p>
                    </div>
                </li>
                <li class="advantages-item">
                    <div class="circle">
                        <span class="counter">2</span>
                    </div>
                    <div class="advantage-img">
                        <img src="@/assets/auction.png" alt="">
                    </div>
                    <div class="advantage-content">
                        <h3 class="advantage-content-heading">Аукцион</h3>
                        <p class="advatage-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Architecto fuga eveniet sunt rem itaque beatae eius sapiente ab dicta impedit.</p>
                    </div>
                </li>
                <li class="advantages-item">
                    <div class="circle">
                        <span class="counter">3</span>
                    </div>
                    <div class="advantage-img">
                        <img src="@/assets/auction.png" alt="">
                    </div>
                    <div class="advantage-content">
                        <h3 class="advantage-content-heading">Аукцион</h3>
                        <p class="advatage-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Architecto fuga eveniet sunt rem itaque beatae eius sapiente ab dicta impedit.</p>
                    </div>
                </li>
                <li class="advantages-item">
                    <div class="circle">
                        <span class="counter">4</span>
                    </div>
                    <div class="advantage-img">
                        <img src="@/assets/auction.png" alt="">
                    </div>
                    <div class="advantage-content">
                        <h3 class="advantage-content-heading">Аукцион</h3>
                        <p class="advatage-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Architecto fuga eveniet sunt rem itaque beatae eius sapiente ab dicta impedit.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- Second Section END -->
    <!-- Third Section -->

    <!-- Third Section -->
    <div class="third-section">
        <div class="container">
            <!-- <div class="section-title">
                <h3>Контакты</h3>
            </div> -->
            <div class="contact">
                <div class="contact-about">
                    <h4>Metall</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut itaque esse commodi dolorum qui doloremque laborum et optio quis suscipit.</p>
                </div>
                <div class="quick-link">
                    <h4>Дополнительные ссылки</h4>
                    <ul>
                        <li>
                            <a href="">Аукцион</a>
                        </li>
                        <li>
                            <a href="">Политика конфидециальности</a>
                        </li>
                        <li>
                            <a href="">Партнерство</a>
                        </li>
                        <li>
                            <a href="">О нас</a>
                        </li>
                    </ul>
                </div>
                <!-- <hr> -->
                <p>© 2021 ProDev</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import * as THREE from 'three'
import VANTA from '../../assets/externalScripts/vanta.net.min.js'
    export default {
        mounted() {
            this.vantaEffect = VANTA({
                el: ".first-section",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xf2f2f2,
                backgroundColor: 0x727272,
                THREE
            })
        },
        beforeDestroy() {
            if (this.vantaEffect) {
                this.vantaEffect.destroy()
            }
        }
    }
</script>

<style scoped>
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;500;600&display=swap');


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito',
    sans-serif;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

@media (min-width: 992px) {
    .container {
        width: 970px;
    }
}

@media (min-width: 1200px) {
    .container {
        width: 1170px;
    }
}

@media (min-width: 2000px) {
    .container {
        width: 1500px;
    }
}


[class*="col-"] {
    float: left;
    padding: 15px;
    /* border: 1px solid red; */
}

.col-1 {
    width: 8.33%;
}

.col-2 {
    width: 16.66%;
}

.col-3 {
    width: 25%;
}

.col-4 {
    width: 33.33%;
}

.col-5 {
    width: 41.66%;
}

.col-6 {
    width: 50%;
}

.col-7 {
    width: 58.33%;
}

.col-8 {
    width: 66.66%;
}

.col-9 {
    width: 75%;
}

.col-10 {
    width: 83.33%;
}

.col-11 {
    width: 91.66%;
}

.col-12 {
    width: 100%;
}



/* First Section */
.first-section {
    width: 100%;
    height: 100vh;
    /* background: red; */
    display: flex;
    align-items: center;
}

.first-section :is(h1, p) {
    color: white;
}

.first-section h1 {
    font-size: 72px;
    margin-bottom: 15px;
    letter-spacing: -2px;
    font-family: 'Josefin Sans',
    sans-serif;
}

.first-section p {
    font-size: 1.5em;
    line-height: 1.25;
    font-weight: 100;
}

.auth-block {
    padding: 2rem 0;
}

.auth-btn {
    padding: 1rem 2rem;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    color: #000;
    font-size: 1.2rem;
    text-decoration: none;
    background: white;
}

/* .auth-btn:hover {
    background: transparent;
    color: #000;
} */

/* First Section End */

/* Second Section */
.second-section {
    width: 100%;
    /* height: 100vh; */
    background: #f1f3fe;
}

.section-title {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
}

.section-title h3 {
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
}

/* .section-title h3::before,
.section-title h3::after {
    content: '';
    border-top: 6px double;
} */



.advantages {
    list-style-type: none;
    padding-left: 0;
    margin: auto;
}

.advantages-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-bottom: 2rem;
    /* position: relative; */
    text-align: left;
}

.advantages-item:first-of-type::after {
    top: 50%;
}

.advantages-item:last-of-type::after {
    bottom: 50%;
}

.advantages-item::after {
    bottom: 0;
    content: " ";
    left: calc(3rem - 1px);
    position: absolute;
    top: 0;
    width: 2px;
    background: #fff;
}

.circle {
    align-items: center;
    background: #fff;
    border-radius: 100%;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 15%),
        0 0 7px #fff;
    display: flex;
    height: 6rem;
    justify-content: center;
    margin: 1.5rem auto 2rem;
    min-width: 6rem;
    position: relative;

    flex-grow: 1;
    height: 6rem;
    margin-right: 2rem;
    min-width: 6rem;
    z-index: 1;
}

.circle::before {
    height: 70%;
    width: 70%;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 3px rgb(0 0 0 / 15%);
    content: " ";
    /* height: 70%; */
    position: absolute;
    /* width: 70%; */
}

.circle .counter {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
    z-index: 3;
}

.advantage-img {
    flex-grow: 1;
    margin: .5rem 4rem 0;
}

.advantage-img img {
    width: 240px;
}

.advantages-content {
    flex-grow: 2;
}


/* Second Section END */



/* Third Section */

.third-section {
    background-color: #26272b;
}

.contact {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 2rem 0;
    color: #737373;
}

.contact h4 {
    color:#fff;
    font-size:16px;
    text-transform:uppercase;
    margin-top:5px;
    letter-spacing:2px
}

.quick-link a {
    text-decoration: none;
    color: #737373;
}

.quick-link a:hover {
    color: #fff;
}

/* Third Section END */
</style>