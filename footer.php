        </main>

				<div class="clear"></div>
				<?php
				if ( is_active_sidebar('widget-footer') ) {
						dynamic_sidebar( 'widget-footer' );
				} else {
						echo '<div style="color:#555;font-size:14px;text-align:center;">';
						_e('This is widget footer. Go to Appearance -> Widgets to add some widgets.', 'ophim');
						echo '</div>';
				}
				?>
    <?php wp_footer(); ?>
</html>