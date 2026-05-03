<?php
$actors_list = get_the_terms(get_the_ID(), 'ophim_actors');
$genres = get_the_terms(get_the_ID(), 'ophim_genres');
$tags = get_the_terms(get_the_ID(), 'ophim_tags');
$actors_list = (!empty($actors_list) && !is_wp_error($actors_list)) ? $actors_list : array();
$genres = (!empty($genres) && !is_wp_error($genres)) ? $genres : array();
$tags = (!empty($tags) && !is_wp_error($tags)) ? $tags : array();
$primary_actor = (!empty($actors_list) && !is_wp_error($actors_list)) ? reset($actors_list) : null;
$getslug = get_option('ophim_slug_actors');
$actor_slug = $getslug ? $getslug : 'actors';

?>
<script>
    // ID bài ophim cho vote()/favorite trong global.min.js (trùng postid gửi ratemovie)
    var video = <?= (int) get_the_ID() ?>;
    var ophimPostId = video;
</script>
<link href="<?= get_template_directory_uri() ?>/assets/css/video.css" rel="stylesheet" />
<style>#kt_player iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}</style>
<div class="container">
    <div data-vjs-player class="popbop lg:min-h-[524px] md:min-h-[358px] h-auto overflow-hidden">
        <div class="relative aspect-auto w-full overflow-hidden">
        <?php $first_episode = get_first_episode_info(); if ($first_episode): ?>
                                <?php if (!empty($first_episode['link_m3u8'])): ?>
                                    <button style="display:none;" data-id="<?= $first_episode['server_key'] ?>" data-link="<?= $first_episode['link_m3u8'] ?>" data-type="m3u8" onclick="chooseStreamingServer(this)" class="pu-link player__cdn set-player-source">Server 1</button>
                                <?php elseif (!empty($first_episode['link_embed'])): ?>
                                    <button style="display:none;" data-id="<?= $first_episode['server_key'] ?>" data-link="<?= $first_episode['link_embed'] ?>" data-type="embed" onclick="chooseStreamingServer(this)" class="pu-link player__cdn set-player-source">Server 2</button>
                                <?php endif; ?>
                            <?php endif; ?>
            <div  id="kt_player" class="aspect-auto video-js vjs-16-9 vjs-big-play-centered linkage pornone-video-player-dimensions vjs-controls-enabled vjs-touch-enabled vjs-workinghover vjs-v7 vjs-up-next vjs-landscape-fullscreen vjs-has-started vjs-920 vjs-waiting vjs-paused vjs-has-mouse vjs-user-inactive vjs-touch-inactive">

            </div>
        </div>
    </div>

    <div class="popbop lg:hidden py-3 border-b border-white-five dark:border-black-four items-center bg-white-500 dark:bg-black-dark">
        <div class="grid ml-auto grid-cols-7 items-center justify-end font-semibold text-lg dark:text-warm-grey">
            <div onclick="vote(1,null);" class="text-center cursor-pointer">
                <span id="voteupmob" class="voteupIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                <div class="voteupcount text-f11 text-center">
                    <?= op_get_like_count() ?> </div>
            </div>
            <div onclick="vote(0,null);" class="text-center cursor-pointer">
                <span id="votedownmob" class="votedownIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                <div class="votedowncount text-f11 text-center">
                    <?= op_get_dislike_count() ?> </div>
            </div>
            
            <div class="relative gandermenu text-center cursor-pointer">
                <span class="moreIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                <div class="text-f11 text-center">
                    More </div>
                <div class="invisible skrit absolute right-0 w-36 z-100 bg-white-two dark:bg-black-three rounded-md shadow-lg ring-1 ring-black dark:ring-black-four ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1 font-semibold dark:text-white flex flex-col text-left" role="none">
                        <span onclick="navigator.share({ title: '<?= get_the_title() ?>', url: window.location.href })" title="Report video" class="block px-4 py-2 hover:text-light-red cursor-pointer focus:outline-none" role="menuitem" tabindex="-1">
                            <span class="shareIcon inline-block bg-black1 dark:bg-white mx-auto fill-current mr-1"></span>
                            Share </span>
                        <span onclick="shareTweeter(); return false;" title="Share on Twitter" class="block px-4 py-2 hover:text-light-red cursor-pointer focus:outline-none" role="menuitem" tabindex="-1">
                            <span class="xIcon inline-block bg-black1 dark:bg-white mx-auto fill-current mr-1"></span>
                            Twitter </span>
                        <span onclick="showEmbed();" class="block px-4 py-2 hover:text-light-red cursor-pointer focus:outline-none" role="menuitem" tabindex="-1">
                            <span class="embedIcon inline-block bg-black1 dark:bg-white mx-auto fill-current mr-1 mt-2"></span>
                            Embed </span>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full md:border-b border-white-five dark:border-black-four">
        <div class="max-w-full pt-3 md:pt-0">
            <h1 class="text-f19 md:text-f28 mx-4 md:mx-0 md:my-2 font-medium leading-loose truncate tracking-tighter dark:text-white capitalize">
                <?= get_the_title() ?>                             
            </h1>

            <span class="block text-left mx-4 md:mx-0 md:my-2 font-medium md:text-f15 text-warm-grey"><?= op_get_post_view() ?> views • <?= op_get_quality() ?> • <?= human_time_diff(get_the_modified_time('U'), current_time('timestamp')) ?> ago</span>
        </div>
        <div class="flex items-center justify-between px-4 md:px-0 py-3 md:py-2">
            <div onclick="showHideElmnt('#pageinfo'); $('#infoshownmob').toggleClass('transform');" class="md:hidden pr-2 py-1 pl-1 items-center justify-end cursor-pointer">
                <span id="infoshownmob" class="pointvIcon inline-block -rotate-180 bg-black1 fill-current dark:bg-warm-grey"></span>
            </div>
            <div class="hidden lg:grid grid-cols-7 lg:gap-5 items-center justify-start font-medium text-lg dark:text-warm-grey">
                <div onclick="vote(1,null); event.stopPropagation();" class="text-center cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="I like this">
                    <span id="voteup" class="voteupIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                    <div class="voteupcount text-f11 text-center">
                        <?= op_get_like_count() ?>                </div>
                </div>
                <div onclick="vote(0,null); event.stopPropagation();" class="text-center cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="I dislike this">
                    <span id="votedown" class="votedownIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                    <div class="votedowncount text-f11 text-center">
                        <?= op_get_dislike_count() ?>                </div>
                </div>

                <div class="relative gandermenu text-center cursor-pointer">
                    <span class="moreIcon inline-block bg-black1 dark:bg-warm-grey mx-auto mb-2 fill-current"></span>
                    <div class="text-f11 text-center">
                        More                </div>
                    <div class="invisible skrit absolute left-0 w-34 z-100 text-left text-f14 bg-white-two dark:bg-black-three rounded-md shadow-lg ring-1 ring-black dark:ring-black-four ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style="visibility: hidden;">
                        <div class="py-1 font-semibold dark:text-white flex flex-col text-left" role="none">
                            <span onclick="shareTweeter(); return false;" title="Share on Twitter" class="block px-4 py-2 hover:text-light-red cursor-pointer focus:outline-none" role="menuitem" tabindex="-1">
                                  <span class="xIcon inline-block bg-black1 dark:bg-white mx-auto fill-current mr-1"></span>
                                  Twitter                            </span>
                            <span onclick="showEmbed();" class="block px-4 py-2 hover:text-light-red cursor-pointer focus:outline-none" role="menuitem" tabindex="-1">
                                  <span class="embedIcon inline-block bg-black1 dark:bg-white mx-auto fill-current mr-1 mt-2"></span>
                                    Embed                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php if ($primary_actor) :
        $actor_archive_link = get_term_link($primary_actor);
        if (is_wp_error($actor_archive_link)) {
            $actor_archive_link = '#';
        }
        $actor_avatar_url = op_get_actor_image($primary_actor->term_id);
        ?>
    <div class="w-full flex md:h-26 py-4 border-b border-white-five dark:border-black-four items-center">
        <a href="<?= esc_url($actor_archive_link) ?>" class="mx-4 md:ml-2 h-12 md:h-14 w-12 md:w-14 flex-none">
            <img src="<?= esc_url($actor_avatar_url) ?>" class="avatarsvg inline-block h-12 md:h-14 w-12 md:w-14 rounded-full" alt="<?= esc_attr($primary_actor->name) ?>" width="48" height="48" loading="lazy">
        </a>
        <a href="<?= esc_url($actor_archive_link) ?>" class="text-md md:text-f15 font-semibold text-black1 dark:text-white-two truncate"><?= esc_html($primary_actor->name) ?></a>
        <div class="ml-auto"></div>
        <div onclick="showHideElmnt('#pageinfo'); $('#infoshown').toggleClass('transform');" class=" hidden md:inline-block float-right my-4  pr-2 py-4 pl-4 items-center justify-end fill-current dark:text-warm-grey cursor-pointer" data-toggle="tooltip" data-placement="top" data-original-title="Show Info">
            <span id="infoshown" class="pointvIcon inline-block -rotate-180  fill-current bg-black1 dark:bg-warm-grey"></span>
        </div>
    </div>
    <?php endif; ?>

    <div id="pageinfo" class="w-full p-6 md:pl-20 text-f13 dark:text-warm-grey-two border-b border-white-five dark:border-black-four items-center" style="display: block;">
        <div class="mb-9">
            <span class="md:mb-1 p-1 font-semibold w-[136px] dark:text-white">Description</span>
            <div id="prepdesc-container" class="md:mb-1 p-1 pt-2.4 relative overflow-hidden">
                <span id="prepdesc" class="block break-words"><?= get_the_excerpt() ?></span>
                <!-- <button id="toggleBtn" class="hidden text-light-red-two">more</button> -->
            </div>
        </div>
        <div class="mb-9">
            <span class="md:mb-2 p-1 font-semibold w-[136px] dark:text-white">Categories</span>
            <span class="pt-1 flex flex-wrap leading-none">
                <?php if (!empty($genres)) : ?>
                    <?php foreach ($genres as $genre): ?>
                        <a id="cat<?= $genre->term_id ?>" href="<?= get_term_link($genre) ?>" class="md:mb-1 p-1 dark:text-warm-grey-two  hover:text-red1 links"><?= $genre->name ?>,</a>
                    <?php endforeach; ?>
                <?php else : ?>
                    <span class="md:mb-1 p-1 dark:text-warm-grey-two">Đang cập nhật</span>
                <?php endif; ?>
            </span>
        </div>
        <div class="mb-9">
            <span class="md:mb-1 p-1 font-semibold w-[136px] flex-shrink-0 dark:text-white">
                Tags            
            </span>
            <p class="pt-1 flex flex-wrap">             
                    <?php if (!empty($tags)) : ?>
                        <?php foreach ($tags as $tag): ?>
                            <a id="tag<?= $tag->term_id ?>" href="<?= get_term_link($tag) ?>" class="md:mb-1 p-1 dark:text-warm-grey-two  hover:text-red1 links"><?= $tag->name ?>,</a>
                        <?php endforeach; ?>
                    <?php else : ?>
                        <span class="md:mb-1 p-1 dark:text-warm-grey-two">Đang cập nhật</span>
                    <?php endif; ?>
            </p>
        </div>
       
        <div class="mb-9">
            <span class="md:mb-1 p-1 font-semibold w-[136px] dark:text-white justify-self-center">Pornstars</span>
            <p class="pt-1  flex flex-wrap">
                <?php if (!empty($actors_list)) : ?>
                    <?php foreach ($actors_list as $actor): ?>
                        <a id="actor<?= $actor->term_id ?>" href="<?= get_term_link($actor) ?>" class="md:mb-1 p-1 dark:text-warm-grey-two  hover:text-red1 links"><?= $actor->name ?>,</a>
                    <?php endforeach; ?>
                <?php else : ?>
                    <span class="md:mb-1 p-1 dark:text-warm-grey-two">Đang cập nhật</span>
                <?php endif; ?>
            </p>
        </div>
    </div>

    <div class="flex items-center col-span-full max-w-full mt-5 mb-2 md:mt-9 px-[3%] sm:px-0"><h2 class="block text-f19 md:text-f32 font-bold text-black-darkest dark:text-white tracking-tight">Related Videos</h2></div>

    <div class="w-full grid portrait:gap-x-0.1 portrait:gap-y-0.1 gap-x-4 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <?php
        $postType = 'ophim';
        $taxonomyName = 'ophim_genres';
        $taxonomy = get_the_terms(get_the_id(), $taxonomyName);
        if ($taxonomy) {
            $category_ids = array();
            foreach ($taxonomy as $individual_category) $category_ids[] = $individual_category->term_id;
            $args = array('post_type' => $postType, 'post__not_in' => array(get_the_id()), 'posts_per_page' => 12, 'tax_query' => array(array('taxonomy' => $taxonomyName, 'field' => 'term_id', 'terms' => $category_ids,),));
            $my_query = new wp_query($args);

            if ($my_query->have_posts()):
                while ($my_query->have_posts()):$my_query->the_post(); ?>
                    <?php get_template_part('templates/section/section_thumb_item'); ?>
                <?php
                endwhile;
            endif;
            wp_reset_postdata();
        }
        ?>
    </div>
</div>

<script type="text/html" id="embedcode">
	<div class="" id="embed-modal">
        <div class="fixed z-10 inset-x-0 top-0 md:inset-0 overflow-y-auto">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" >&#8203;</span >
                <div class="inline-block align-bottom bg-white-500 dark:bg-black-d1 md:w-[520px]  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:p-6">
                    <div class="absolute top-0 right-0 pt-4 pr-4">
                            <span id="close-edit" class="closeIcon32 inline-block h-8 w-8 fill-current bg-gray-400 hover:bg-gray-500 focus:outline-none"></span>
                    </div>
                    <div class="bg-white dark:bg-black-33 px-4 shadow md:rounded p-12 md:p-12">
                        <h3 class="text-f26  md:mb-8  text-black-darkest dark:text-white-two text-center">
                            Embed this code                        </h3>
                        <form class="space-y-6" action="#" method="POST">
                            <div>
                                <div class="mt-1">
                                    <textarea id="text-embed" name="embedurl" rows="3" class="py-3 px-4 block w-full border border-gray-300 rounded-md shadow-sm bg-white-six border border-white-six dark:text-white dark:bg-black1 dark:border-black-four focus:outline-none text-lg">&lt;iframe src=&quot;<?= the_permalink(); ?>/&quot; width=&quot;400&quot; height=&quot;300&quot; scrolling=&quot;no&quot; allowfullscreen=&quot;true&quot;&gt;&lt;/iframe&gt;</textarea>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <button  id="copycode" type="button" class="w-full md:w-56 h-12 mt-6 flex justify-center py-3 px-4 text-xl border border-transparent rounded shadow-sm  font-semibold text-white bg-red1 ">
                                    Copy code                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
	</div>
    </script>

<?php
add_action('wp_footer', function (){?>
    <script src="<?= get_template_directory_uri() ?>/assets/player/js/p2p-media-loader-core.min.js"></script>
    <script src="<?= get_template_directory_uri() ?>/assets/player/js/p2p-media-loader-hlsjs.min.js"></script>
    <?php op_jwpayer_js(); ?>
    <script>
        
        var episode_id = '<?= get_first_episode_info()['server_key'] ?>';
        const wrapper = document.getElementById('kt_player');
        const vastAds = "<?= get_option('ophim_jwplayer_advertising_file') ?>";

        function chooseStreamingServer(el) {
            const type = el.dataset.type;
            const link = el.dataset.link.replace(/^http:\/\//i, 'https://');
            const id = el.dataset.id;

            episode_id = id;

            Array.from(document.getElementsByClassName('pu-link')).forEach(server => {
                server.classList.remove('player__cdn--active');
            })
            el.classList.add('player__cdn--active');
            wrapper.style.display = 'block';

            renderPlayer(type, link, id);
        }

        function renderPlayer(type, link, id) {
            if (type == 'embed') {
                if (vastAds) {
                    wrapper.innerHTML = `<div id="fake_jwplayer"></div>`;
                    const fake_player = jwplayer("fake_jwplayer");
                    const objSetupFake = {
                        key: "<?= get_option('ophim_jwplayer_license', 'ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc=') ?>",
                        aspectratio: "16:9",
                        width: "100%",
                        file: "<?= get_template_directory_uri() ?>/assets/player/1s_blank.mp4",
                        volume: 100,
                        mute: false,
                        autostart: true,
                        advertising: {
                            tag: "<?= get_option('ophim_jwplayer_advertising_file') ?>",
                            client: "vast",
                            vpaidmode: "insecure",
                            skipoffset: <?= get_option('ophim_jwplayer_advertising_skipoffset') ?:  5 ?>,
                            skipmessage: "Bỏ qua sau xx giây",
                            skiptext: "Bỏ qua"
                        }
                    };
                    fake_player.setup(objSetupFake);
                    fake_player.on('complete', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });

                    fake_player.on('adSkipped', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });

                    fake_player.on('adComplete', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });
                } else {
                    if (wrapper) {
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                    }
                }
                return;
            }

            if (type == 'm3u8' || type == 'mp4') {
                wrapper.innerHTML = `<div id="jwplayer"></div>`;
                const player = jwplayer("jwplayer");
                const objSetup = {
                    key: "<?= get_option('ophim_jwplayer_license', 'ITWMv7t88JGzI0xPwW8I0+LveiXX9SWbfdmt0ArUSyc=') ?>",
                    aspectratio: "16:9",
                    width: "100%",
                    image: "<?= op_get_poster_url() ?>",
                    file: link,
                    playbackRateControls: true,
                    playbackRates: [0.25, 0.75, 1, 1.25],
                    sharing: {
                        sites: [
                            "reddit",
                            "facebook",
                            "twitter",
                            "googleplus",
                            "email",
                            "linkedin",
                        ],
                    },
                    volume: 100,
                    mute: false,
                    autostart: true,
                    logo: {
                        file: "<?= get_option('ophim_jwplayer_logo_file') ?>",
                        link: "<?= get_option('ophim_jwplayer_logo_link') ?>",
                        position: "<?= get_option('ophim_jwplayer_logo_position') ?>",
                    },
                    advertising: {
                        tag: "<?= get_option('ophim_jwplayer_advertising_file') ?>",
                        client: "vast",
                        vpaidmode: "insecure",
                        skipoffset: <?= get_option('ophim_jwplayer_advertising_skipoffset') ?:  5 ?>,
                        skipmessage: "Bỏ qua sau xx giây",
                        skiptext: "Bỏ qua"
                    }
                };

                if (type == 'm3u8') {
                    const segments_in_queue = 50;

                    var engine_config = {
                        debug: !1,
                        segments: {
                            forwardSegmentCount: 50,
                        },
                        loader: {
                            cachedSegmentExpiration: 864e5,
                            cachedSegmentsCount: 1e3,
                            requiredSegmentsPriority: segments_in_queue,
                            httpDownloadMaxPriority: 9,
                            httpDownloadProbability: 0.06,
                            httpDownloadProbabilityInterval: 1e3,
                            httpDownloadProbabilitySkipIfNoPeers: !0,
                            p2pDownloadMaxPriority: 50,
                            httpFailedSegmentTimeout: 500,
                            simultaneousP2PDownloads: 20,
                            simultaneousHttpDownloads: 2,
                            httpDownloadInitialTimeout: 0,
                            httpDownloadInitialTimeoutPerSegment: 17e3,
                            httpUseRanges: !0,
                            maxBufferLength: 300,
                        },
                    };
                    if (Hls.isSupported() && p2pml.hlsjs.Engine.isSupported()) {
                        var engine = new p2pml.hlsjs.Engine(engine_config);
                        player.setup(objSetup);
                        jwplayer_hls_provider.attach();
                        p2pml.hlsjs.initJwPlayer(player, {
                            liveSyncDurationCount: segments_in_queue,
                            maxBufferLength: 300,
                            loader: engine.createLoaderClass(),
                        });
                    } else {
                        player.setup(objSetup);
                    }
                } else {
                    player.setup(objSetup);
                }


                const resumeData = 'OPCMS-PlayerPosition-' + id;
                player.on('ready', function() {
                    if (typeof(Storage) !== 'undefined') {
                        if (localStorage[resumeData] == '' || localStorage[resumeData] == 'undefined') {
                            console.log("No cookie for position found");
                            var currentPosition = 0;
                        } else {
                            if (localStorage[resumeData] == "null") {
                                localStorage[resumeData] = 0;
                            } else {
                                var currentPosition = localStorage[resumeData];
                            }
                            console.log("Position cookie found: " + localStorage[resumeData]);
                        }
                        player.once('play', function() {
                            console.log('Checking position cookie!');
                            console.log(Math.abs(player.getDuration() - currentPosition));
                            if (currentPosition > 180 && Math.abs(player.getDuration() - currentPosition) >
                                5) {
                                player.seek(currentPosition);
                            }
                        });
                        window.onunload = function() {
                            localStorage[resumeData] = player.getPosition();
                        }
                    } else {
                        console.log('Your browser is too old!');
                    }
                });

                player.on('complete', function() {
                    if (typeof(Storage) !== 'undefined') {
                        localStorage.removeItem(resumeData);
                    } else {
                        console.log('Your browser is too old!');
                    }
                })

                function formatSeconds(seconds) {
                    var date = new Date(1970, 0, 1);
                    date.setSeconds(seconds);
                    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
                }
            }
        }
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const episode = '<?= get_first_episode_info()['server_key'] ?>';
            let playing = document.querySelector(`[data-id="${episode}"]`);
            if (playing) {
                playing.click();
                return;
            }

            const servers = document.getElementsByClassName('pu-link');
            if (servers[0]) {
                servers[0].click();
            }
        });
    </script>

<?php }) ?>
