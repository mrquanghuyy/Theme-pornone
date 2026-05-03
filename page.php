<?php
get_header();
?>
<div class="container">
    <?php if (wp_is_mobile()): ?>
        <?php include_once THEME_URL . '/templates/sidebar-mobile.php'; ?>
    <?php endif; ?>
    <div class="content">
        <div class="policy-wrapper">
            <div class="policy-content">
                <?php
                // Render directly from currently queried page to avoid loop side-effects.
                $page_id = get_queried_object_id();
                if ($page_id) :
                    $page_post = get_post($page_id);
                    if ($page_post instanceof WP_Post) :
                        ?>
                        <h1><?php echo esc_html(get_the_title($page_post)); ?></h1>
                        <?php echo apply_filters('the_content', $page_post->post_content); ?>
                        <?php
                    endif;
                endif;
                ?>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();
?>
