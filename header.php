<!DOCTYPE html>
<html <?php language_attributes(); ?> class="">
<head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <link rel="profile" href="http://gmgp.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <?php wp_head(); ?>
    <script>
        var url = '<?= get_template_directory_uri() ?>';
        var siteUrl = '<?= esc_url( home_url( '/' ) ); ?>';
        var ajaxUrl = '<?= admin_url( 'admin-ajax.php' ); ?>';
        var actorsSlug = '<?= esc_js( get_option('ophim_slug_actors') ?: 'actors' ) ?>';
        var twfSearchNonce = '<?= esc_js( wp_create_nonce( 'twf_search_suggestions' ) ); ?>';
    </script>
    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri() ?>/assets/css/app.css" />

    <style>
    @media (min-width:992px){.demo_container_left{margin: auto;width: 50%;padding: 10px;}}
    @media (max-width:480px){.demo_container_left{width: 100%;}}
    @media (max-width:600px){.demo_container_left{width: 100%;}}
    </style>
    <script type="text/javascript">
        const lang_id = '1';
        const lang_locale = 'en_US.utf8';
        const lang_name = 'en';
        const login_url = 'https://pornone.com/login/';
        const path = '';
        const notlost = 0;
        const ct = '';
        var listq = []; var vafids = '';
        const infoCantAdd = "You can't add more videos in this playlist.";
        const infoAddedTo = "Added to";
        const infoAlready = "this Video is already in";
        const infoAddQueue = "Add to Queue";
        const infoDelFavs = "Del from Favs";
        const infoAddFavs = "Add to Favorites";
        const infoAddPlayl = "Add to Playlist";
        const infoLoginTo = "Log in to create playlists";
        const infoNewPlayl = "New playlist";
        const infoNoMore = "You can't add more playlists.";
        const infoCreated = "has been created!";
        const infoMust4 = "The playlist name must be at least 4 characters!";
        const infoCantAddQ = "You can't add more videos in the Queue list.";
        const infoAddedQ = "Added to Queue!";
        const infoVideos = "Videos";
        const infoAlreadyQ = "this Video is already in Queue!";
        const infoUndoV = "Undo deleted video!";
        const infoUndoPl = "Undo deleted playlist!";
        const infoDELETED = "DELETED";
        const infoERROR = "ERROR";
        const infoPlaylist = "Playlist";
        const infoUndoQ = "Undo deleted queue video!";
        const infoVoted = "You already voted for this video!";
        const infoRemVaf = "Removed from Favorites";
        const infoAddVaf = "Added to Favorites";
        const infoEnterSom = "Enter at least 4 symbols.";
        const infoSuccessful = "successful";
        const infoUnsuccessful = "unsuccessful";
        const infoCopCl = "Copying to clipboard was";
        const infoOops = "Oops, unable to copy! Use Ctrl-C button or touch..";
        const infoImageUpl = "Image Uploaded.";
        const infoRecap = "Please check the recaptcha";
        const infoSelectMain = "Please select Main category";
        const infoNoVideoQueue = "No videos in your Queue list.";
        const infoShowMore = "Show More";
        const infoShowPrev = "Show Previous";
    </script>
    <script type="text/javascript" src="<?= get_template_directory_uri() ?>/assets/js/index.js?v=11122221"></script>
    <script type="text/javascript" src="<?= get_template_directory_uri() ?>/assets/js/global.min.js?v=3"></script>
    
</head>
<body class="bg-white-500 dark:bg-black-d1">
    <div class="scrollBar1"></div>
    <?php get_template_part('templates/header'); ?>
    <main class="flex-grow bg-white-500 dark:bg-black-d1">
    <script type="text/javascript">
            var pathArr = [],thumbsArr = [],preloadArr={},showing=[],
            imgpath = 'https://th-eu3.pornone.com',ismobile = true,thumbpath = 'https://th-eu4.pornone.com/',
            isrow = null,state = window.location.href;
            document.querySelector('body').classList.add(ismobile ? 'mobile' : 'desktop');
        </script>
    <script data-cfasync="false">
            const theme = localStorage.getItem('theme') ? localStorage.getItem('theme').toLowerCase().replace(' ', '-') : 'dark-theme';
            localStorage.setItem('theme', theme);
            document.querySelector('body').classList.add(theme);
            if (theme === 'dark-theme') {
                document.documentElement.classList.toggle('dark', true);
            }
        </script>