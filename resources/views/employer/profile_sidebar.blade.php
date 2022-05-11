<div class="mobile-menu-btn sidebar-btn">
        <span>
            Меню
        </span>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 20"
            width="6px" height="20px">
        <path fill-rule="evenodd"  fill="#212529"
              d="M4.004,0.013 L2.009,0.013 C0.907,0.013 0.014,0.908 0.014,2.012 L0.014,4.012 C0.014,5.117 0.907,6.012 2.009,6.012 L4.004,6.012 C5.105,6.012 5.999,5.117 5.999,4.012 L5.999,2.012 C5.999,0.908 5.105,0.013 4.004,0.013 ZM3.006,4.012 C2.455,4.012 2.009,3.564 2.009,3.012 C2.009,2.460 2.455,2.012 3.006,2.012 C3.557,2.012 4.004,2.460 4.004,3.012 C4.004,3.564 3.557,4.012 3.006,4.012 ZM4.004,7.012 L2.009,7.012 C0.907,7.012 0.014,7.907 0.014,9.011 L0.014,11.011 C0.014,12.115 0.907,13.010 2.009,13.010 L4.004,13.010 C5.105,13.010 5.999,12.115 5.999,11.011 L5.999,9.011 C5.999,7.907 5.105,7.012 4.004,7.012 ZM3.006,11.011 C2.455,11.011 2.009,10.563 2.009,10.011 C2.009,9.459 2.455,9.011 3.006,9.011 C3.557,9.011 4.004,9.459 4.004,10.011 C4.004,10.563 3.557,11.011 3.006,11.011 ZM4.004,14.010 L2.009,14.010 C0.907,14.010 0.014,14.906 0.014,16.010 L0.014,18.010 C0.014,19.114 0.907,20.009 2.009,20.009 L4.004,20.009 C5.105,20.009 5.999,19.114 5.999,18.010 L5.999,16.010 C5.999,14.906 5.105,14.010 4.004,14.010 ZM3.006,18.010 C2.455,18.010 2.009,17.562 2.009,17.010 C2.009,16.458 2.455,16.010 3.006,16.010 C3.557,16.010 4.004,16.458 4.004,17.010 C4.004,17.562 3.557,18.010 3.006,18.010 Z"/>
    </svg>
</div>

<aside class="sidebar">
    <ul class="ul-reset">
        <li>
            <a href="{{ route('company.edit') }}" class="{{ request()->is('company/edit') ? 'active' : '' }} sidebar__link">
                <img src="/images/sidebar/sidebar-1.png" class="img-fluid" alt="">
                Компания
            </a>
        </li>
        <li>
            <a href="{{ route('vacancy.list') }}" class="{{ request()->is('vacancies') ? 'active' : '' }} sidebar__link">
                <img src="/images/sidebar/sidebar-2.png" class="img-fluid" alt="">
                Мои вакансии
            </a>
        </li>
        <li>
            <a href="{{ route('employer.profile') }}" class="{{ request()->is('employer/profile') ? 'active' : '' }} sidebar__link">
                <img src="/images/sidebar/sidebar-4.png" class="img-fluid" alt="">
                Личные данные
            </a>
        </li>
        <li>
            <a href="{{ route('logout.get') }}" class="sidebar__link">
                <img src="/images/sidebar/sidebar-5.png" class="img-fluid" alt="">
                Выход
            </a>
        </li>
    </ul>
</aside>
