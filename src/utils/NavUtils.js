class NavUtils {
	static redirectToRoot() {
		if (window.location.href !== '/') {
			window.location.href = '/';
		}
	}
}

export default NavUtils;
