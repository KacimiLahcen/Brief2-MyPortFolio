document.getElementById('lang').addEventListener('change', function () {
    const selectedValue = this.value;
    window.location.href = selectedValue;
  });