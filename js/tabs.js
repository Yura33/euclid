document.addEventListener('DOMContentLoaded', function() {

  const btnTabs = document.querySelectorAll('.how-we-work__tab');

  btnTabs.forEach(function(btn) {
    btn.addEventListener('click', (event) => {
      btnTabs.forEach((b) => b.classList.remove('how-we-work__tab_active'));
      event.currentTarget.classList.add('how-we-work__tab_active');

      const path = event.currentTarget.dataset.path;
      const tabsContent = document.querySelectorAll('.how-we-work__inner');

      tabsContent.forEach((e) => {
        e.classList.remove('how-we-work__inner_active');
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__inner_active');
    })
  })
})
