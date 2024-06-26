<?php
/**
 * Plugin Name: Hostinger
 * Plugin URI: https://hostinger.com
 * Description: Hostinger WordPress plugin.
 * Version: 2.1.3
 * Requires at least: 5.5
 * Requires PHP: 7.4
 * Author: Hostinger
 * License: GPL v3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Author URI: https://www.hostinger.com
 * Text Domain: hostinger
 * Domain Path: /languages
 *
 * @package Hostinger
 */

use Hostinger\Hostinger;
use Hostinger\Activator;
use Hostinger\Deactivator;

defined( 'ABSPATH' ) || exit;

if ( ! defined( 'HOSTINGER_VERSION' ) ) {
	define( 'HOSTINGER_VERSION', '2.1.3' );
}

if ( ! defined( 'HOSTINGER_ABSPATH' ) ) {
	define( 'HOSTINGER_ABSPATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'HOSTINGER_PLUGIN_FILE' ) ) {
	define( 'HOSTINGER_PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'HOSTINGER_PLUGIN_URL' ) ) {
	define( 'HOSTINGER_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'HOSTINGER_ASSETS_URL' ) ) {
	define( 'HOSTINGER_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets' );
}

if ( ! defined( 'HOSTINGER_WP_CONFIG_PATH' ) ) {
	define( 'HOSTINGER_WP_CONFIG_PATH', ABSPATH . '.private/config.json' );
}

if ( ! defined( 'HOSTINGER_WP_TOKEN' ) ) {
	$hostinger_dir_parts        = explode( '/', __DIR__ );
	$hostinger_server_root_path = '/' . $hostinger_dir_parts[1] . '/' . $hostinger_dir_parts[2];
	define( 'HOSTINGER_WP_TOKEN', $hostinger_server_root_path . '/.api_token' );
}

if ( ! defined( 'HOSTINGER_REST_URI' ) ) {
	define( 'HOSTINGER_REST_URI', 'https://rest-hosting.hostinger.com' );
}

$vendor_file = __DIR__ . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

if ( file_exists( $vendor_file ) ) {
	require_once $vendor_file;
}

/**
 * Plugin activation hook.
 */
function hostinger_activate(): void {
	Activator::activate();
}

/**
 * Plugin deactivation hook.
 */
function hostinger_deactivate(): void {
	Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'hostinger_activate' );
register_deactivation_hook( __FILE__, 'hostinger_deactivate' );


$hostinger = new Hostinger();
$hostinger->run();
