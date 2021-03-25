const { Router } = require('next/router');

// initRouterListeners();

export function initRouterListeners() {
  const routes = [];

  Router.events.on('routeChangeStart', (url) => {
    pushCurrentRouteInfo();
  });

  Router.events.on('routeChangeComplete', (url) => {
    fixScrollPosition();
  });

  // Hack to set scrollTop because of this issue:
  // - https://github.com/zeit/next.js/issues/1309
  // - https://github.com/zeit/next.js/issues/3303

  function pushCurrentRouteInfo() {
    routes.push({ pathname: Router.pathname, scrollY: window.scrollY });
  }

  // TODO: We guess we're going back, but there must be a better way
  // https://github.com/zeit/next.js/issues/1309#issuecomment-435057091
  function isBack() {
    return routes.length >= 2 && Router.pathname === routes[routes.length - 2].pathname;
  }

  function fixScrollPosition() {
    let scrollY = 0;

    if (isBack()) {
      routes.pop(); // route where we come from
      const targetRoute = routes.pop(); // route where we return
      scrollY = targetRoute.scrollY; // scrollY we had before
    }

    window.requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }
}
