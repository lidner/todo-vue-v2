<template>
    <div>
        <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <a href="" class="side-nav-link side-nav-link-logo">
                    <img class="logo-nav" src=""  alt="">
                </a>
            </li>
            <div class="navbar-user">
                <img class="navbar-user-img" src="" alt="">
                <p class="navbar-user-info fullname"></p>
                <address class="navbar-user-info"></address>
            </div>

            <li class="nav-item">
                <a href="" class="side-nav-link">
                    <i class="fas fa-home fa-menu"></i>
                    <span class="link-text">Главная</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="" class="side-nav-link">
                    <i class="fas fa-list-alt fa-menu"></i>
                    <span class="link-text">Реестр товаров</span>
                </a>
            </li>
            
            <li class="nav-item">
                <a href="" class="side-nav-link">
                    <i class="far fa fa-shopping-basket fa-menu"></i>
                    <span class="link-text">Корзина</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="side-nav-link" data-modal-target="#modalContacts" style="cursor: pointer">
                    <i class="fas fa-sort-alpha-down fa-menu"></i>
                    <span class="link-text">Контакты</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="" class="side-nav-link">
                    <i class="fas fa-graduation-cap fa-menu resized-i"></i>
                    <span class="link-text">Обучение</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="side-nav-link" data-modal-target="#modal">
                    <i class="far fa-question-circle fa-menu"></i>
                    <span class="link-text">Помощь</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="" class="side-nav-link">
                    <i class="fas fa-sign-out-alt fa-menu"></i>
                    <span class="link-text">Выйти</span>
                </a>
            </li>


        </ul>
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
/* Sidenav */
.navbar {
    display: block;
    width: 5rem;
    height: 100%;
    position: fixed;
    background-color: white;
    transition: width 500ms ease;
    overflow: auto;
    z-index: 100;
}

.navbar::-webkit-scrollbar {
    display: none;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.logo-nav {
    width: 100px;
    display: none;
    margin-left: 1rem;
    display: inline;
    position: absolute;
    left: -999px;
    transition: 500ms;
}

/* Navbar user */
.navbar-user {
    text-align: center;
}

.navbar-user-img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
}

.navbar-user-info {
    opacity: 0;
    text-align: center;
}

.navbar-user-info.fullname {
    font-weight: bold;
}


.nav-item {
    width: 100%;
}

/* Set last link to bottom of sidenav */
.nav-item:last-child {
    margin-top: auto;
}

.side-nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: #575757;
    text-decoration: none !important;
    /* filter: grayscale(100%) opacity(0.7); */
    filter: grayscale(0);
    transition: 600ms;
}

.side-nav-link.side-nav-link-logo {
    display: flex;
    align-items: center;
    height: 5rem;
    /* color: #fff; */
    text-decoration: none;
    filter: grayscale(0%) opacity(1);
    transition: 600ms;
}

.side-nav-link .badge {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px 10px;
    border-radius: 50%;
    color: #1bc47d;
}

.side-nav-link:hover {
    filter: grayscale(0%) opacity(1);
    /* background: #03E9F4; */
    color: #5769F8;
}

.side-nav-link:hover .badge {
    color: #5769F8;
}

.link-text {
    display: none;
    margin-left: 1rem;
}

.side-nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
}

.side-nav-link i::before {
    font-size: 2rem;
    margin: 0 2.5rem;
}

.resized-i::before {
    font-size: 28px !important;
}

.side-nav-link span {
    margin-left: 3.5rem;
}

.fa-primary {
    color: #03E9F4;
}

.fa-secondary {
    color: #03E9F4;
}

.fas::before {
    width: 50px;
}

.fa-primary,
.fa-secondary {
    transition: 500ms;
}

.fa-menu {
    width: 50px;
}

.logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    /* background: #34495e; */
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
}

.logo svg {
    transform: rotate(0deg);
    transition: 500ms;
}

.logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: 500ms;
}

.navbar:hover .logo svg {
    transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
    .navbar {
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }

    .logo {
        display: none;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .side-nav-link {
        justify-content: center;
    }

    main {
        margin: 0;
    }
}

/* Large screens */
@media only screen and (min-width: 600px) {
    .navbar {
        top: 0;
        width: 8rem;
        height: 100%;
    }

    .navbar:hover {
        width: 23rem;
    }

    .navbar:hover .link-text,
    .navbar:hover .logo-nav {
        display: inline;
    }

    .navbar:hover .navbar-user-info {
        opacity: 1;
    }

    /* .navbar:hover .logo svg {
        margin-left: 11rem;
    } */

    .navbar:hover .logo-nav {
        left: 0px;
    }
}
</style>