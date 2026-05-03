<div class=" max-w-full mt-5 mb-2 md:mt-9 px-[3%] sm:px-0">
    <h2 class="inline-block text-f19 md:text-f32 font-bold text-black-darkest dark:text-white tracking-tight"><?= $title ?></h2>    
</div>

<div class="js-popular mb-5 md:mb-10 w-full grid portrait:gap-x-0.1 portrait:gap-y-0.1 gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
    <?php $key =0; while ($query->have_posts()) : $query->the_post(); $key++;
        get_template_part('templates/section/section_thumb_item');
    endwhile; ?>
</div>

<div class="clearfix"></div>

<div class="flex items-center col-span-full mt-8 border-b-1 border-white-five dark:border-black-a2">
    <?php if ($query->max_num_pages > 1) {
        ophim_pagination1($query);
    } ?>
</div>