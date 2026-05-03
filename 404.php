<?php
get_header();
?>
<div class="flex flex-col mx-8 justify-center mt-9">
        <div class="sm:w-[520px] sm:mx-auto">
            <div class="bg-black-33 bg-opacity-50 shadow rounded py-4 p-12">
                <h1 @click="submitForm" class="text-f26 font-semibold tracking-tight mb-9 text-white-two text-center">
                    404 Page not found.                </h1>
                <p class="text-white-two text-center">Sorry about that. Try searching for something else.</p>

                

                <div class="flex justify-center items-center mb-6">
                    <a href="/" class="text-xl m-10 mb-0 text-white-two text-center hover:underline">
                        Home Page                    </a>
                </div>
            </div>
        </div>
    </div>
<?php
get_footer();
?>
