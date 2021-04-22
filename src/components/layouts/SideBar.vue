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
                <a href="/docs/basket/" class="side-nav-link">
                    <i class="fas fa-folder-plus fa-menu"></i>
                    <span class="link-text">
                        Формирование заявки
                    </span>
                    <span class="badge">{{ user.id|getMyRequestCount }}</span>
                </a>
                <a href="/docs/requests_dzo/" class="side-nav-link">
                    <i class="fas fa-exchange-alt fa-menu"></i>
                    <span class="link-text">
                        Поступившие заявки
                    </span>
                    <span class="badge">{{ user.id|getMyRequestCount }}</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="/docs/requests_rej/" class="side-nav-link">
                    <i class="fas fa-exchange-alt fa-menu"></i>
                    <span class="link-text">Возврат заявок</span>
                    <span class="badge">{{ user.id|getRequestCount }}</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/docs/ts_list/" class="side-nav-link">
                    <i class="fas fa-sort-alpha-down fa-menu"></i>
                    <span class="link-text">Тех. спецификации</span>
                    <span class="badge"></span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/docs/requests_i/" class="side-nav-link">
                    <i class="fas fa-chart-bar fa-menu"></i>
                    <span class="link-text">Публикации</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/docs/basket/" class="side-nav-link">
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
                <a href="/docs/reports_list/" class="side-nav-link">
                    <i class="fas fa-folder-plus fa-menu"></i>
                    <span class="link-text">Формирование заключения</span>
                    <span class="badge">{{ user.id|getReportItemCount }}</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/docs/ts_list/" class="side-nav-link">
                    <i class="fas fa-sort-alpha-down fa-menu"></i>
                    <span class="link-text">Тех. спецификации</span>
                    <span class="badge"></span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/docs/reports/" class="side-nav-link">
                    <i class="fas fa-chart-bar fa-menu"></i>
                    <span class="link-text">Готовые заключения</span>
                    <span class="badge"></span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/impls/" class="side-nav-link">
                    <i class="fas fa-bars fa-menu"></i>
                    <span class="link-text">Поставщики</span>
                </a>
            </li>


            <li class="nav-item">
                <a href="/docs/kp/" class="side-nav-link">
                    <i class="fas fa-file-signature fa-menu"></i>
                    <span class="link-text">Коммерческие</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/news/" class="side-nav-link">
                    <i class="fas fa-newspaper fa-menu resized-i"></i>
                    <span class="link-text">Новости</span>
                </a>
            </li>
{#            <li class="nav-item">#}
{#                <a href="" class="side-nav-link">#}
{#                    <i class="fas fa-chart-line fa-menu"></i>#}
{#                    <span class="link-text">Аналитика</span>#}
{#                </a>#}
{#            </li>#}

{#            <li class="nav-item">#}
{#                <a href="/docs/notifications/" class="side-nav-link">#}
{#                    <i class="far fa-bell fa-menu"></i>#}
{#                    <span class="link-text">Уведомления</span>#}
{#                </a>#}
{#            </li>#}

            <li class="nav-item">
                <a href="/guide/" class="side-nav-link">
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
                <a href="/logout/" class="side-nav-link">
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

<style lang="scss" scoped>

</style>