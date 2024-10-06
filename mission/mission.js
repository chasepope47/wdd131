document.getElementById('theme-selector').addEventListener('change', function () {
    const theme = this.value;
    document.body.className = theme + '-theme';
  });

  