<?php
$taxonomyName = 'ophim_genres';
$taxonomy = get_the_terms(get_the_id(), $taxonomyName);

$actors = op_get_actor();
$first_actor = (is_array($actors) && !is_wp_error($actors) && !empty($actors)) ? reset($actors) : null;

$getslug = get_option('ophim_slug_actors');
if($getslug){
    $slug = $getslug;
}else{
    $slug = 'actors';
}
$preview_enabled = get_theme_mod('ophim_hover_preview', true);
$preview_images = function_exists('op_get_preview_images') ? op_get_preview_images() : array();
$use_preview = $preview_enabled && count($preview_images) >= 2;
$preview_class = $use_preview ? ' js-hover-preview' : '';
?>

<a href="<?= the_permalink(); ?>" class="popbop vidLinkFX  videocard linkage <?= $preview_class ?>" <?= $use_preview ? 'data-preview-images="' . esc_attr(json_encode($preview_images)) . '"' : '' ?>>
    <div class="thumbcont">
        <div class="preloadLine bg-red1" style="opacity: 0; width: 0px;"></div>
        <span class="hdcont">
            <span class="durlabel"><img class="inline mr-[5px] mb-0.7" alt="HD Video" width="18" height="10" src="https://th-eu4.pornone.com/images/svg/hd.svg"><?= op_get_runtime() ?>
            </span></span><img src="<?= op_get_poster_url() ?>" 
                     data-src="<?= op_get_poster_url() ?>" 
                     alt="<?= the_title_attribute(); ?>" 
                     data-p="<?= op_get_poster_url() ?>"
                     data-preview="<?= op_get_poster_url() ?>"  alt="<?= the_title_attribute(); ?>" width="270" height="158" class=" imgvideo thumbimg js-preview-img lazyload" id="<?= get_the_id() ?>">
    </div>
    <div class="videoinfo">
        <div class="titlecont">
            <div class="videotitle "><?= the_title() ?></div>
            <div class="author portrait:text-white flex text-brownish-grey">
                <span class="basis-1/2 truncate">
                    by <span class="font-semibold capitalize"><?= $first_actor ? esc_html($first_actor->name) : '' ?></span>
                </span>
                <span class="basis-1/2 text-right">
                    <i class="statsicon viewsIcon"></i><?= op_get_post_view() ?>
                </span>
            </div>
        </div>
    </div>
</a>