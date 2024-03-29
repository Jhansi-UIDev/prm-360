// Instantiate MDC Drawer
const drawerEl = document.querySelector('.mdc-drawer');
const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

// Instantiate MDC Top App Bar (required)
const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

//topAppBar.setScrollTarget(document.querySelector('.main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});