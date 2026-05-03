<?php
get_header();

// filter[sort] / filter[range] — đồng bộ với page-videos-sort.php (ophim)
$current_sort = isset($_GET['filter']['sort']) ? sanitize_text_field(wp_unslash($_GET['filter']['sort'])) : 'update';
$current_range = isset($_GET['filter']['range']) ? sanitize_text_field(wp_unslash($_GET['filter']['range'])) : '';

global $wp_query;
$args = $wp_query->query_vars;

if ($current_sort === 'view') {
    $args['meta_query'] = array(
        'relation' => 'OR',
        'has_view' => array(
            'key'     => 'ophim_view',
            'type'    => 'NUMERIC',
            'compare' => 'EXISTS',
        ),
        'no_view'  => array(
            'key'     => 'ophim_view',
            'compare' => 'NOT EXISTS',
        ),
    );
    $args['orderby'] = array(
        'has_view' => 'DESC',
        'modified' => 'DESC',
    );
} elseif ($current_sort === 'year') {
    $args['orderby'] = 'date';
    $args['order']   = 'DESC';
} elseif ($current_sort === 'rate') {
    $args['meta_key'] = 'ophim_rating';
    $args['orderby']  = 'meta_value_num';
    $args['order']    = 'DESC';
} else {
    $args['orderby'] = 'modified';
    $args['order']   = 'DESC';
}

// Lọc theo thời gian đăng (modified không dùng được với date_query trên post_date — dùng post date)
if ($current_range === 'today') {
    $args['date_query'] = array(array('after' => '1 day ago'));
} elseif ($current_range === 'week') {
    $args['date_query'] = array(array('after' => '1 week ago'));
} elseif ($current_range === 'month') {
    $args['date_query'] = array(array('after' => '1 month ago'));
}

query_posts($args);

$queried_term = get_queried_object();
$term_base_url = ($queried_term && isset($queried_term->term_id)) ? get_term_link($queried_term) : home_url('/');
if (is_wp_error($term_base_url)) {
    $term_base_url = home_url('/');
}

/**
 * URL taxonomy + filter (giữ sort khi đổi range và ngược lại).
 *
 * @param string      $sort       update|view|year|rate
 * @param string|null $range_mode null = giữ range hiện tại; '' = bỏ range
 */
$ophim_tax_filter_url = static function ($sort, $range_mode = null) use ($term_base_url, $current_range) {
    $q = array(
        'filter' => array(
            'sort' => $sort,
        ),
    );
    if ($range_mode === null) {
        $r = $current_range;
    } elseif ($range_mode === '') {
        $r = '';
    } else {
        $r = $range_mode;
    }
    if ($r !== '') {
        $q['filter']['range'] = $r;
    }
    return esc_url(add_query_arg($q, $term_base_url));
};

$sort_labels = array(
    'update' => __('Newest', 'ophim'),
    'view'   => __('Most viewed', 'ophim'),
    'year'   => __('Publish date', 'ophim'),
    'rate'   => __('Rating', 'ophim'),
);
$sort_display = isset($sort_labels[$current_sort]) ? $sort_labels[$current_sort] : $sort_labels['update'];

$range_labels = array(
    ''      => __('All time', 'ophim'),
    'month' => __('Last month', 'ophim'),
    'week'  => __('Last week', 'ophim'),
    'today' => __('Last 24H', 'ophim'),
);
$range_display = ($current_range !== '' && isset($range_labels[$current_range])) ? $range_labels[$current_range] : $range_labels[''];
?>
<div class="sm:mx-[3%] md:container dark:text-white mx-auto">
    <div class="max-w-full mt-5 mb-2 md:mt-9 px-[3%] sm:px-0 text-f14 md:text-f24 text-black-darkest dark:text-white tracking-tight whitespace-nowrap">
        <h1 class="block tracking-normal text-f19 md:text-f32 mr-5 font-bold text-black-darkest dark:text-white tracking-tight truncate"><?php echo esc_html(single_term_title('', false)); ?> <?php esc_html_e('Videos', 'ophim'); ?></h1>
        <div class="inline-block align-top md:font-bold pt-2"><?php esc_html_e('Sort by:', 'ophim'); ?></div>
        <div class="gandermenu inline-block relative mr-3 pt-2 capitalize text-light-red md:text-black1 md:dark:text-white focus:outline-none cursor-pointer ">
            <span id="sort" class="vidselector select"><?php echo esc_html($sort_display); ?></span> <span class="pointmIcon inline-block w-2.5 h-2 bg-red1 md:bg-black1 md:dark:bg-white fill-current float-right ml-[5px] mt-1.25 md:mt-5 align-middle"></span>
            <div class="invisible skrit absolute left-0 z-10 bg-white-two dark:bg-black-three rounded-md shadow-lg ring-1 ring-black dark:ring-black-four ring-opacity-5 tracking-normal" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style="visibility: hidden;">
                <div class="py-1 text-f14 md:text-f15 font-semibold text-black1 dark:text-white" role="none">
                    <?php
                    $sort_opts = array(
                        'update' => __('Newest', 'ophim'),
                        'view'   => __('Most viewed', 'ophim'),
                        'year'   => __('Publish date', 'ophim'),
                        'rate'   => __('Rating', 'ophim'),
                    );
                    foreach ($sort_opts as $sid => $slabel) {
                        $active = ($current_sort === $sid) ? ' text-light-red' : '';
                        echo '<a href="' . $ophim_tax_filter_url($sid) . '" class="links sortmenu block cursor-pointer px-3 py-1 hover:text-light-red' . esc_attr($active) . '">' . esc_html($slabel) . '</a>';
                    }
                    ?>
                </div>
            </div>
        </div>

        <div class="gandermenu inline-block relative mr-3 pt-2 capitalize text-light-red md:text-black1 md:dark:text-white focus:outline-none cursor-pointer ">
            <span id="filter" class="vidselector select"><?php echo esc_html($range_display); ?></span> <span class="pointmIcon inline-block w-2.5 h-2 bg-red1 md:bg-black1 md:dark:bg-white fill-current float-right ml-[5px] mt-1.25 md:mt-5 align-middle"></span>
            <div class="invisible skrit absolute left-0 z-10 bg-white-two dark:bg-black-three rounded-md shadow-lg ring-1 ring-black dark:ring-black-four ring-opacity-5 tracking-normal" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style="visibility: hidden;">
                <div class="py-1 text-f14 md:text-f15 font-semibold text-black1 dark:text-white" role="none">
                    <?php
                    $range_opts = array(
                        ''      => __('All time', 'ophim'),
                        'month' => __('Last month', 'ophim'),
                        'week'  => __('Last week', 'ophim'),
                        'today' => __('Last 24H', 'ophim'),
                    );
                    foreach ($range_opts as $rid => $rlabel) {
                        $active = ($current_range === $rid) ? ' text-light-red' : '';
                        echo '<a href="' . $ophim_tax_filter_url($current_sort, $rid) . '" class="links sortmenu block cursor-pointer px-3 py-1 hover:text-light-red' . esc_attr($active) . '">' . esc_html($rlabel) . '</a>';
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full grid portrait:gap-x-0.1 portrait:gap-y-0.1 gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <?php 
        $key = 0; 
        if (have_posts()) : 
            while (have_posts()) : the_post(); 
                $key++;
                get_template_part('templates/section/section_thumb_item');
            endwhile; 
        else: 
            echo '<p style="text-align:center;width:100%;color:#888;">No videos found in this sequence.</p>';
        endif; 
        ?>

        <div class="clearfix"></div>
        

    </div>

    <div class="flex items-center col-span-full mt-8 border-b-1 border-white-five dark:border-black-a2">
        <?php 
        if (function_exists('ophim_pagination1')) {
            ophim_pagination1();
        } elseif (function_exists('ophim_pagination')) {
            ophim_pagination();
        } else {
            the_posts_pagination();
        }
        ?>
    </div>
</div>


<?php
get_footer();
