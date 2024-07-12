// (() => {
//     const load = () => {
//       const s = document.createElement('script');
//       s.src = 'https://js.search-studio.zoovu.com/plugin/bundle/49777.js';
//       s.setAttribute('async', 'async');
//       document.body.appendChild(s);
//     };
//     const isLoadedAndHydrated = () => document.querySelector('.navbar') !== null && document.querySelector('html[data-has-hydrated="true"]') !== null;
//     // wait for navbar to be rendered
//     if (isLoadedAndHydrated()) {
//       load();
//     } else {
//       const mo = new MutationObserver(() => {
//         if (isLoadedAndHydrated()) {
//           load();
//           mo.disconnect();
//         }
//       });
//       mo.observe(document.body, { attributes: false, childList: true, subtree: true });
//       mo.observe(document.querySelector('html'), { attributes: true, childList: false, subtree: false });
//     }
// })()