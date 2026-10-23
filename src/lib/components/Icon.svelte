<script>
  export let name = 'arrow';
  export let size = 20;
  export let className = '';
  const paths = {
    arrow: 'M7 17 17 7M7 7h10v10',
    right: 'M4 12h16m-6-6 6 6-6 6',
    back: 'M20 12H4m6-6-6 6 6 6',
    code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14',
    check: 'm5 12 4 4L19 6',
    mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7',
    download: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
    menu: 'M4 6h16M4 12h16M4 18h16',
    close: 'm6 6 12 12M6 18 18 6',
    link: 'M10 13a5 5 0 0 0 7 .5l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l2-2',
    book: 'M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3V3Zm0 15a3 3 0 0 1 3-3h13M8 7h8M8 11h5',
    location:
      'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
  };
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.65"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={className}
  aria-hidden="true"><path d={paths[name] || paths.arrow} /></svg
>
