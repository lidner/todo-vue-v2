<template>
    <!-- Auth Section -->
    <div class="auth-section">
        <div class="container">
            <div class="form">
                <ul class="tab-group">
                    <li class="tab"><router-link :to="{ name: 'register' }">Регистрация</router-link></li>
                    <li class="tab active"><router-link :to="{ name: 'login' }">Авторизация</router-link></li>
                </ul>
                <div class="tab-content">

                    <!-- <div id="signup"></div> -->

                    <div id="signup">
                        <h1>Регистрация</h1>
                        <form action="#" method="post">
                            <div class="top-row">
                                <div class="field-wrap">
                                    <label>
                                        Имя<span class="req">*</span>
                                    </label>
                                    <input type="text" required autocomplete="off" />
                                </div>
                                <div class="field-wrap">
                                    <label>
                                        Фамилия<span class="req">*</span>
                                    </label>
                                    <input type="text" required autocomplete="off" />
                                </div>
                            </div>
                            <div class="field-wrap">
                                <label>
                                    Email<span class="req">*</span>
                                </label>
                                <input type="email" required autocomplete="off" />
                            </div>
                            <div class="field-wrap">
                                <label>
                                    Пароль<span class="req">*</span>
                                </label>
                                <input type="password" required autocomplete="off" />
                            </div>
                            <button type="submit" class="button button-block">Зарегистрироваться</button>
                        </form>
                    </div>

                    <div id="login">
                        <h1>Авторизация</h1>
                        <form action="#" method="post" @submit.prevent="login">
                            <div class="field-wrap">
                                <label>
                                    Логин<span class="req">*</span>
                                </label>
                                <input type="text" required v-model="username" />
                            </div>
                            <div class="field-wrap">
                                <label>
                                    Пароль<span class="req">*</span>
                                </label>
                                <input type="password" required autocomplete="off" v-model="password" />
                            </div>
                            <!-- <p class="forgot"><a href="#">Forgot Password?</a></p> -->
                            <button class="button button-block">Войти</button>
                        </form>
                    </div>

                </div><!-- tab-content -->
            </div> <!-- /form -->
        </div> <!-- container -->
    </div>
    <!-- Auth Section END -->
</template>

<script async>
import * as THREE from 'three'
import VANTA from '../../assets/externalScripts/vanta.net.min.js'
    export default {
        data() {
            return {
                username: '941228350440',
                // username: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password,
                })
                    .then(response => {
                        this.$router.push({ name: 'about' })
                    })
            }
        },
        mounted() {
            this.vantaEffect = VANTA({
                el: ".auth-section",
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
            let form = document.querySelector('.form');
            let formInputs = form.querySelectorAll('input');
            const animateElement = (e) => {
                let label = e.target.previousElementSibling;
                if (e.type === 'keyup') {
                    if (e.target.value === '') {
                        label.classList.remove('active', 'highlight');
                    } else {
                        label.classList.add('active', 'highlight');
                    }
                } else if (e.type === 'blur') {
                    if (e.target.value === '') {
                        label.classList.remove('active', 'highlight');
                    } else {
                        label.classList.add('active', 'highlight');
                    }
                } else if (e.type === 'focus') {
                    if (e.target.value === '') {
                        label.classList.remove('highlight');
                    } else if (e.target.value !== '') {
                        label.classList.add('highlight');
                    }
                }
            };
            formInputs.forEach(item => {
                item.addEventListener('keyup', animateElement);
                item.addEventListener('blur', animateElement);
                item.addEventListener('focus', animateElement);
            });
            // Handling Tab Content
            // let tabGroup = document.querySelector('.tab-group'),
            //     tabLinks = document.querySelectorAll('.tab'),
            //     tabContent = document.querySelector('.tab-content'),
            //     signUpTab = tabContent.querySelector('#signup'),
            //     loginTab = tabContent.querySelector('#login');
            let tabContent = document.querySelector('.tab-content'),
                signUpTab = tabContent.querySelector('#signup'),
                loginTab = tabContent.querySelector('#login');
                signUpTab.style.display = 'none';
                loginTab.style.display = 'block';
            // const switchAuthTab = (e) => {
            //     e.preventDefault();
            //     // Handling active tab, removing active class from siblings
            //     tabLinks.forEach(function (tab) {
            //         tab.classList.remove('active')
            //     });
            //     // Add active class to pressed tab
            //     e.currentTarget.classList.add('active');
            //     let target = e.target.getAttribute('href');
            //     // let target = '#signup'
            //     if (target == '#signup') {
            //         loginTab.style.display = 'none';
            //         signUpTab.style.display = 'block';
            //     } else {
            //         signUpTab.style.display = 'none';
            //         loginTab.style.display = 'block';
            //     }
            // };
            // tabLinks.forEach(item => {
            //     item.addEventListener('click', switchAuthTab);
            // });
        },
        beforeDestroy() {
            if (this.vantaEffect) {
                this.vantaEffect.destroy()
            }
        }
    }
</script>

<style>
/* Login */
.auth-section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.auth-section .form {
    background: rgba(19, 35, 47, .9);
    padding: 40px;
    min-width: 600px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
}
.auth-section .tab-group {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
}
.auth-section .tab-group:after {
    content: "";
    display: table;
    clear: both;
}
.auth-section .tab-group li a {
    display: block;
    text-decoration: none;
    padding: 15px;
    background: rgba(160, 179, 176, .25);
    color: #a0b3b0;
    font-size: 20px;
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.5s ease;
}
.auth-section .tab-group li a:hover {
    background: #179b77;
    color: #fff;
}
.auth-section .tab-group .active a {
    background: #1ab188;
    color: #fff;
}
.auth-section .tab-content>div:last-child {
    display: none;
}
.auth-section h1 {
    text-align: center;
    color: #fff;
    font-weight: 300;
    margin: 0 0 40px;
}
.auth-section label {
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    color: rgba(255, 255, 255, .5);
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 22px;
}
.auth-section label .req {
    margin: 2px;
    color: #1ab188;
}
.auth-section label.active {
    transform: translateY(50px);
    left: 2px;
    font-size: 14px;
}
.auth-section label.active .req {
    opacity: 0;
}
.auth-section label.highlight {
    color: #fff;
}
.auth-section input,
.auth-section textarea {
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid #a0b3b0;
    color: #fff;
    border-radius: 0;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.auth-section input:focus,
.auth-section textarea:focus {
    outline: 0;
    border-color: #1ab188;
}
.auth-section textarea {
    border: 2px solid #a0b3b0;
    resize: vertical;
}
.auth-section .field-wrap {
    position: relative;
    margin-bottom: 40px;
}
.auth-section .top-row:after {
    content: "";
    display: table;
    clear: both;
}
.auth-section .top-row>div {
    float: left;
    width: 48%;
    margin-right: 4%;
}
.auth-section .top-row>div:last-child {
    margin: 0;
}
.auth-section .button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #1ab188;
    color: #fff;
    transition: all 0.5s ease;
    -webkit-appearance: none;
}
.auth-section .button:hover,
.auth-section .button:focus {
    background: #179b77;
}
.auth-section .button-block {
    display: block;
    width: 100%;
}
.auth-section .forgot {
    margin-top: -20px;
    text-align: right;
}
</style>