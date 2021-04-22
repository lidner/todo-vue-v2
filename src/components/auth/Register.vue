<template>
    <!-- Auth Section -->
    <div class="auth-section">
        <div class="container">
            <div class="form">
                <ul class="tab-group">
                    <li class="tab active"><router-link :to="{ name: 'register' }">Регистрация</router-link></li>
                    <li class="tab"><router-link :to="{ name: 'login' }">Авторизация</router-link></li>
                </ul>
                <div class="tab-content">

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

<script>
import * as THREE from 'three'
import VANTA from '../../assets/externalScripts/vanta.net.min.js'
    export default {
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
            // let tabContent = document.querySelector('.tab-content'),
            //     signUpTab = tabContent.querySelector('#signup'),
            //     loginTab = tabContent.querySelector('#login');
            //     signUpTab.style.display = 'none';
            //     loginTab.style.display = 'block';
        }
    }
</script>

<style lang="scss" scoped>
</style>