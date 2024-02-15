<?php
add_post_type_support('page', 'excerpt');

add_filter('timber/context', 'add_to_context');
function add_to_context($context)
{
	$context['main_menu'] = \Timber::get_menu('main_menu');
	$context['gdpr_menu'] = \Timber::get_menu('gdpr_menu');
	return $context;
}
//Add custom headings to TinyMCE
add_filter('mce_buttons_2', 'vv_add_headings');
function vv_add_headings($headings)
{
	array_unshift($headings, 'styleselect');
	return $headings;
}
add_filter('tiny_mce_before_init', 'vv_insert_headings');
function vv_insert_headings($init_array)
{
	$style_formats = array(
		array(
			'title' => 'Linkknop',
			'classes' => 'btn btn--primary',
			'selector' => 'a',
		)
	);
	$init_array['style_formats'] = json_encode($style_formats);
	return $init_array;
}
