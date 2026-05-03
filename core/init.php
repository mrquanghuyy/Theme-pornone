<?php

if (!function_exists('ophim_theme_setup')) {
    function ophim_theme_setup()
    {

        /*
         * Tự chèn RSS Feed links trong <head>
         */
        add_theme_support('automatic-feed-links');
        /*
         * Thêm chức năng title-tag để tự thêm <title>
         */
        add_theme_support('title-tag');
        add_theme_support('custom-logo');
        add_theme_support('post-thumbnails');

        /*
         * Tạo menu cho theme
         */
        register_nav_menu('primary-menu', __('Primary Menu', 'ophim'));

    }

    add_action('init', 'ophim_theme_setup');

}

// Cài đặt theme: bật/tắt ảnh preview khi hover vào item phim
add_action('customize_register', 'nqt_beegcom_customize_preview_hover');
function nqt_beegcom_customize_preview_hover($wp_customize)
{
    $wp_customize->add_section('ophim_preview_section', array(
        'title'    => __('Ảnh preview phim', 'ophim'),
        'priority' => 130,
    ));
    $wp_customize->add_setting('ophim_hover_preview', array(
        'default'           => true,
        'sanitize_callback' => 'wp_validate_boolean',
    ));
    $wp_customize->add_control('ophim_hover_preview', array(
        'label'   => __('Bật ảnh preview khi hover vào item phim', 'ophim'),
        'section' => 'ophim_preview_section',
        'type'    => 'checkbox',
    ));
}




function wp_get_menu_array($current_menu)
{
    $menu_name = $current_menu;
    $locations = get_nav_menu_locations();
    $menu = wp_get_nav_menu_object($locations[$menu_name]);
    $array_menu = wp_get_nav_menu_items($menu->term_id);
    $menu = array();
    foreach ($array_menu as $m) {
        if (empty($m->menu_item_parent)) {
            $menu[$m->ID] = array();
            $menu[$m->ID]['ID'] = $m->ID;
            $menu[$m->ID]['title'] = $m->title;
            $menu[$m->ID]['url'] = $m->url;
            $menu[$m->ID]['children'] = array();
        }
    }
    $submenu = array();
    foreach ($array_menu as $m) {
        if ($m->menu_item_parent) {
            $submenu[$m->ID] = array();
            $submenu[$m->ID]['ID'] = $m->ID;
            $submenu[$m->ID]['title'] = $m->title;
            $submenu[$m->ID]['url'] = $m->url;
            $menu[$m->menu_item_parent]['children'][$m->ID] = $submenu[$m->ID];
        }
    }
    return $menu;
}

function ophim_pagination1($custom_query = null) {
    ophim_pagination($custom_query);
}

function op_get_genre_link($genre_slug) {
    $term = get_term_by('slug', $genre_slug, 'ophim_genres');
    
    if (!$term || is_wp_error($term)) {
        return '';
    }
    
    return get_term_link($term);
}

function ophim_pagination($custom_query = null)
{
    global $wp_query;
    $query_obj = $custom_query ? $custom_query : $wp_query;
    $max_num_pages = (int) $query_obj->max_num_pages;
    if ($max_num_pages <= 1) {
        return;
    }

    $current = max(1, (int) get_query_var('paged'));
    $big = 999999999;

    $query_args = array();
    foreach ($_GET as $key => $val) {
        if ($key !== 'paged' && $key !== 'p') {
            $query_args[$key] = $val;
        }
    }

    // Giữ cửa sổ số trang gần trang hiện tại (tương tự ví dụ: 1–3 … 7–10)
    $pages = paginate_links(array(
        'base'      => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
        'format'    => '?paged=%#%',
        'current'   => $current,
        'total'     => $max_num_pages,
        'type'      => 'array',
        'prev_next' => true,
        'prev_text' => '__PREV__',
        'next_text' => '__NEXT__',
        'add_args'  => $query_args,
        'mid_size'  => 3,
        'end_size'  => 2,
    ));

    if (!is_array($pages) || empty($pages)) {
        return;
    }

    $prev_block = '';
    $next_block = '';
    $number_chunks = array();

    $btn_class = 'linkage group rounded border border-solid cursor-pointer bg-white-four bg-gradient-to-b dark:bg-black-33 dark:from-inherit dark:to-inherit hover:border-light-red hover:text-light-red from-white-three to-white-four border-black-lightest dark:border-black-four dark:text-white inline-flex items-center';

    foreach ($pages as $page) {
        if (strpos($page, '__PREV__') !== false) {
            if (preg_match('/href="([^"]+)"/', $page, $m)) {
                $prev_block = '<a href="' . esc_url($m[1]) . '" title="' . esc_attr(__('Previous Page', 'ophim')) . '" class="' . esc_attr($btn_class . ' pr-[11px] mr-[6px]') . '"><span class="prevIcon inline-block h-5 w-5 bg-black1 dark:bg-white group-hover:bg-light-red fill-current"></span><span class="">' . esc_html__('Previous', 'ophim') . '</span></a>';
            }
            continue;
        }
        if (strpos($page, '__NEXT__') !== false) {
            if (preg_match('/href="([^"]+)"/', $page, $m)) {
                $next_block = '<a href="' . esc_url($m[1]) . '" title="' . esc_attr(__('Next Page', 'ophim')) . '" class="' . esc_attr($btn_class . ' pl-[11px] ml-[6px]') . '"><span class="">' . esc_html__('Next', 'ophim') . '</span><span class="nextIcon inline-block h-5 w-5  bg-black1 dark:bg-white group-hover:bg-light-red fill-current"></span></a>';
            }
            continue;
        }
        $number_chunks[] = $page;
    }

    $nav_class = 'hidden md:inline-flex z-0 mx-auto dark:text-white font-semibold text-f15 mb-[30px]';

    echo '<nav class="' . esc_attr($nav_class) . '" aria-label="' . esc_attr(__('Pagination', 'ophim')) . '">';
    echo $prev_block;
    echo '<ul class="flex items-center">';
    foreach ($number_chunks as $page) {
        echo '<li class="pr-[6px]">';
        if (strpos($page, 'dots') !== false) {
            echo ' ... ';
        } elseif (strpos($page, 'current') !== false) {
            $label = trim(wp_strip_all_tags($page));
            echo '<div class="linkage w-[34px] flex rounded h-[34px] items-center justify-center bg-light-red text-white border border-black-lightest dark:border-black-four"><span class="">' . esc_html($label) . '</span></div>';
        } elseif (preg_match('/href="([^"]+)"/', $page, $m)) {
            $label = trim(wp_strip_all_tags($page));
            echo '<a href="' . esc_url($m[1]) . '" class="linkage"><div class="w-[34px] cursor-pointer numround"><span class="">' . esc_html($label) . '</span></div></a>';
        }
        echo '</li>';
    }
    echo '</ul>';
    echo $next_block;
    echo '</nav>';
}

add_action('admin_enqueue_scripts', 'ophim_include_vung_admin_script');
function ophim_include_vung_admin_script()
{
    wp_enqueue_style('admin_vung', get_stylesheet_directory_uri() . '/admin/css/admin.css', false, '');
}

/**
 * Tự động load giao diện Các trang tĩnh (Actors, Genres, Tags) 
 * mà không cần người dùng phải tự tạo Page trong WP-Admin.
 */
add_action('template_redirect', 'ophim_bypass_custom_pages');
function ophim_bypass_custom_pages() {
    $req_uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    
    $actor_slug = get_option('ophim_slug_actors') ?: 'actors';
    $genre_slug = get_option('ophim_slug_genres') ?: 'genres';
    $tag_slug   = get_option('ophim_slug_tags') ?: 'tags';

    if ($req_uri === $actor_slug || preg_match('/^' . preg_quote($actor_slug, '/') . '\/page\/[0-9]+\/?$/', $req_uri)) {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-actors.php');
            exit;
        }
    }
    
    if ($req_uri === $genre_slug || preg_match('/^' . preg_quote($genre_slug, '/') . '\/page\/[0-9]+\/?$/', $req_uri)) {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-categories.php');
            exit;
        }
    }
    
    if ($req_uri === $tag_slug || preg_match('/^' . preg_quote($tag_slug, '/') . '\/page\/[0-9]+\/?$/', $req_uri)) {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-tags.php');
            exit;
        }
    }

    // Bắt link các trang Sort tĩnh (Videos Dropdown)
    $sort_pages = array(
        'latest-updates' => 'update',
        'most-popular'   => 'view',
        'top-rated'      => 'year'
    );
    $req_base = explode('/', $req_uri)[0];
    if (array_key_exists($req_base, $sort_pages)) {
        if ($req_uri === $req_base || preg_match('/^' . preg_quote($req_base, '/') . '\/page\/[0-9]+\/?$/', $req_uri)) {
            $_GET['filter']['sort'] = $sort_pages[$req_base];
            if (!is_page()) {
                global $wp_query;
                $wp_query->is_404 = false;
                status_header(200);
                include(get_template_directory() . '/page-videos-sort.php');
                exit;
            }
        }
    }
    
    // Bắt link trang Terms
    if ($req_uri === 'terms' || $req_uri === 'terms-of-service') {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-terms.php');
            exit;
        }
    }
    
    // Bắt link trang Privacy Policy
    if ($req_uri === 'privacy' || $req_uri === 'privacy-policy') {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-privacy.php');
            exit;
        }
    }

    // Trang Cookie Policy: /cookie-policy/
    if ($req_uri === 'cookie-policy') {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-cookie-policy.php');
            exit;
        }
    }

    // Bắt link trang DMCA
    if ($req_uri === 'dmca') {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-dmca.php');
            exit;
        }
    }

    // Trang 18 USC 2257: /2257/ hoặc /18usc2257/
    if ($req_uri === '2257' || $req_uri === '18usc2257') {
        if (!is_page()) {
            global $wp_query;
            $wp_query->is_404 = false;
            status_header(200);
            include(get_template_directory() . '/page-2257.php');
            exit;
        }
    }
}

/**
 * Fix tính năng tìm kiếm: Theme gốc dùng thuộc tính name="q" thay vì "s" của WordPress.
 * Đoạn filter này bắt dính đường dẫn /?q=... và biến nó thành query tìm kiếm gốc của WP.
 */
add_filter('request', 'ophim_fix_search_q_parameter');
function ophim_fix_search_q_parameter($query_vars) {
    if (isset($_GET['q']) && empty($query_vars['s'])) {
        $query_vars['s'] = sanitize_text_field($_GET['q']);
    }
    return $query_vars;
}