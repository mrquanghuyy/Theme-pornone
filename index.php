<?php
get_header();
?>
<div class="sm:mx-[3%] md:container dark:text-white mx-auto">
    <?php if ( is_active_sidebar('widget-area') ) {
        dynamic_sidebar( 'widget-area' );
    } else {
        _e(' Go to Appearance -> Widgets to add some widgets.', 'ophim');
    }
    ?>
</div>
<?php
get_footer();
?>