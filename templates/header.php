<?php
// Prepare nav data from WordPress taxonomies
$nav_genres  = get_terms(['taxonomy' => 'ophim_genres',  'hide_empty' => false, 'orderby' => 'count', 'order' => 'DESC', 'number' => 12]);
$nav_tags    = get_terms(['taxonomy' => 'ophim_tags',    'hide_empty' => false, 'orderby' => 'count', 'order' => 'DESC', 'number' => 40]);
$nav_actors  = get_terms(['taxonomy' => 'ophim_actors',  'hide_empty' => false, 'orderby' => 'count', 'order' => 'DESC', 'number' => 8]);

$genres_url  = get_post_type_archive_link('ophim') ?: home_url('/');
$tags_url    = home_url('/');
$actors_url  = home_url('/');

$actor_slug  = get_option('ophim_slug_actors') ?: 'actors';

$current_queried = is_tax() ? get_queried_object() : null;
$current_tax     = $current_queried ? $current_queried->taxonomy : '';
$current_term_id = $current_queried ? (int) $current_queried->term_id : 0;

$default_avatar = get_template_directory_uri() . '/assets/images/avatar-default.webp';

// Menu primary (giống Theme-beegcom: lấy object rồi wp_get_nav_menu_items theo term_id)
$header_menu_items = array();
$menu_locations = get_nav_menu_locations();
if (isset($menu_locations['primary-menu'])) {
    $menu_obj = wp_get_nav_menu_object($menu_locations['primary-menu']);
    if ($menu_obj) {
        $header_menu_items = wp_get_nav_menu_items($menu_obj->term_id);
    }
}
?>
<div class="max-w-full bg-white dark:bg-black-dark border-b-1 md:border-0 border-white-five dark:border-black-a2">
    <div class="flex flex-row h-[55px] px-4.5 items-center justify-between border-b-1 border-white-five dark:border-black-a2">
        <div class="z-10 basis-1/3">
            <a href="/" class="flex-shrink-0 flex items-center" title="Pornone Logo">
                <?php op_the_logo('height:28px') ?>
            </a>
        </div>
        <div class="hidden md:flex-1 md:flex basis-1/3 items-center justify-center">
            <div class="hidden md:block md:w-[320px] lg:w-[480px] xl:w-[600px]">
                <form action="/" method="get" id="search-form-sub" class="relative">
                    <div onclick="if (!window.__cfRLUnblockHandlers) return false; document.getElementById('search-form-sub').submit();" class=" cursor-pointer absolute inset-y-0 right-3 pl-3 flex items-center ">
                        <span class="searchIcon w-[17px] h-[17px] inline-block bg-warm-grey fill-current"></span>
                    </div>
                                        <input id="search-inp-desk" name="q" class="block w-full text-md h-[34px] py-2 pl-3 pr-3 rounded bg-white-six border border-white-six dark:text-white dark:bg-black-33 dark:border-black-four" type="text" autocomplete="off" placeholder="Search">
                </form>
            </div>
        </div>

        <div class="basis-2/3 md:basis-1/3 flex items-center justify-end text-f14">
            <div class="relative flex md:hidden items-center justify-end z-50" id="search-container">
                <input type="text" id="search-input" class="absolute right-12 h-12 w-0 opacity-[0] p-0 dark:bg-black1 bg-white text-gray-700 dark:text-white z-51 rounded-l-md outline-none" placeholder="Search">
                <button id="search-btn" aria-label="Search" class="flex items-center justify-center cursor-pointer rounded-md relative border border-transparent z-[52]" data-path="/search/">
                    <svg class="dark:text-white text-black1 fill-current w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <span class="block h-5 border border-l-1 mx-2.5 md:mx-5 dark:border-black-33 border-white-five"></span>
            <label for="menuToggle" class="cursor-pointer">
                <img id="avatarBtn" class="rounded-full" width="30" height="30" src="<?= get_template_directory_uri() ?>/assets/images/avatar.svg" alt="Avatar">
            </label>
            <input type="checkbox" id="menuToggle" class="peer hidden">
            <div id="shMenu" class="z-10000 invisible opacity-0 peer-checked:visible peer-checked:opacity-100 transition-all duration-150 fixed w-full sm:w-100 h-full top-0 left-0 sm:left-auto right-0 rounded-md shadow-lg bg-white-two dark:bg-black-three ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 dark:divide-gray-600 focus:outline-none overflow-x-auto" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                                        <span class="text-gray-700 dark:text-white px-4 py-2 pl-2 text-sm font-bold inline-block">
                        Account                    </span>
                                        <div class="h-7 float-right mt-2 mr-2">
                        <label for="menuToggle" class="bg-white-two dark:bg-black-dark rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer inline-block">
                            <span class="sr-only">Close panel</span>
                            <span class="closeIcon inline-block h-6 w-6 bg-gray-400 hover:bg-gray-500 fill-currentt"></span>
                        </label>
                    </div>
                </div>
                <div class="py-1 block md:hidden" role="none">
                    <?php
                    // Icon: 1) class trên mục menu (Appearance → Menus) 2) đoán theo URL (categories → categoriesIcon, actors/pornstars → pornstarsIcon, …)
                    $known_icons = ['myvideosIcon', 'pornstarsIcon', 'categoriesIcon', 'channelIcon'];
                    if (!empty($header_menu_items)) :
                        foreach ($header_menu_items as $item) :
                            if ((int) $item->menu_item_parent !== 0) {
                                continue;
                            }
                            $icon_class = '';
                            foreach ((array) $item->classes as $cl) {
                                $cl = trim((string) $cl);
                                if ($cl !== '' && in_array($cl, $known_icons, true)) {
                                    $icon_class = $cl;
                                    break;
                                }
                            }
                            if ($icon_class === '') {
                                $raw_path = wp_parse_url($item->url, PHP_URL_PATH);
                                $path_trim = $raw_path ? strtolower(trim((string) $raw_path, '/')) : '';
                                $segments = $path_trim === '' ? [] : explode('/', $path_trim);
                                $actor_slug_l = strtolower((string) $actor_slug);
                                if (in_array('categories', $segments, true)) {
                                    $icon_class = 'categoriesIcon';
                                } elseif (in_array('channels', $segments, true)) {
                                    $icon_class = 'channelIcon';
                                } elseif (in_array('shorts', $segments, true)) {
                                    $icon_class = 'myvideosIcon';
                                } elseif (
                                    in_array('pornstars', $segments, true)
                                    || in_array('actors', $segments, true)
                                    || ($actor_slug_l !== '' && in_array($actor_slug_l, $segments, true))
                                ) {
                                    $icon_class = 'pornstarsIcon';
                                }
                            }
                            if ($icon_class === '') {
                                $icon_class = 'pornone-nav-item-icon';
                            }
                            ?>
                    <a href="<?php echo esc_url($item->url); ?>" class="text-gray-700 dark:text-white group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                        <span class="<?php echo esc_attr($icon_class); ?> inline-block mr-3 h-5 w-5 bg-gray-400 group-hover:bg-gray-500 fill-current"></span>
                        <?php echo esc_html($item->title); ?>
                    </a>
                            <?php
                        endforeach;
                    else :
                        ?>
                    <a href="/shorts/" class="text-gray-700 dark:text-white group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                        <span class="myvideosIcon inline-block mr-3 h-5 w-5 bg-gray-400 group-hover:bg-gray-500 fill-current"></span>
                        Shorts </a>
                    <a href="/pornstars/" class="text-gray-700 dark:text-white group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                        <span class="pornstarsIcon inline-block mr-3 h-5 w-5 bg-gray-400 group-hover:bg-gray-500 fill-current"></span>
                        Pornstars </a>
                    <a href="/categories/" class="text-gray-700 dark:text-white group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                        <span class="categoriesIcon inline-block mr-3 h-5 w-5 bg-gray-400 group-hover:bg-gray-500 fill-current"></span>
                        Categories </a>
                    <a href="/channels/" class="text-gray-700 dark:text-white group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1">
                        <span class="channelIcon inline-block mr-3 h-5 w-5 bg-gray-400 group-hover:bg-gray-500 fill-current"></span>
                        Channels </a>
                        <?php
                    endif;
                    ?>
                </div>
                <div class="py-1" role="none">
                    <style>
                        input:checked~.dot {
                            transform: translateX(100%);
                        }
                    </style>
                    <a href="javascript:void(0);" class=" text-gray-700 dark:text-white group flex items-center px-3 py-2 text-sm js-change-theme" role="menuitem" tabindex="-1">
                        <label for="toggleFive" class="flex cursor-pointer select-none items-center">
                            <div class="relative">
                                <input id="toggleFive" type="checkbox" class="sr-only js-change-theme">
                                <div class="h-3 w-6 rounded-full bg-gray-400 shadow-inner"></div>
                                <div class="dot shadow-switch-1 absolute left-0 top-0 flex h-3 w-3 items-center justify-center rounded-full bg-white transition">
                                    <span class="active h-1 w-1 rounded-full bg-gray-400"></span>
                                </div>
                            </div>

                            <div class="ml-3">
                                Dark mode </div>
                        </label>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="flex relative px-[18px] box-border h-[50px] justify-between align-baseline border-b-1 border-white-five bg-white-two dark:bg-black-dark dark:border-black-a2">
    <nav class="flex-1 flex items-center justify-center mx-1 text-f12 sx:text-f14 dark:text-white whitespace-nowrap">
        <?php
        if (!empty($header_menu_items)) :
            foreach ($header_menu_items as $item) :
                if ((int) $item->menu_item_parent !== 0) {
                    continue;
                }

                $current_url = home_url(add_query_arg([], $_SERVER['REQUEST_URI']));
                $item_url = rtrim($item->url, '/');
                $current_url = rtrim($current_url, '/');

                $classActive = ($current_url === $item_url) ? 'border-b-2 border-red1' : '';
                ?>
                <a href="<?php echo esc_url($item->url); ?>" class="hidden md:inline-block toptext <?php echo $classActive; ?>">
                    <?php echo esc_html($item->title); ?>
                </a>
                <?php
            endforeach;
        else :
            ?>
            <?php
        endif;
        ?>
    </nav>
</div>