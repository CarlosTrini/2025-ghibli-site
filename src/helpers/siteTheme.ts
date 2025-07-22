export const checkCurrentTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const iconTheme = document.querySelector('#iconTheme');
    document.body.setAttribute('data-theme', currentTheme);


    if ( !currentTheme) {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        iconTheme?.setAttribute('src', '/img/icon-dark.svg');
    }


     if ( currentTheme === 'dark' ) {
        iconTheme?.setAttribute('src', '/img/icon-light.svg');
    } else {
        iconTheme?.setAttribute('src', '/img/icon-dark.svg');
    }

}

export const changeHeroImageTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const heroImage = document.querySelector('#heroImage');
    if ( currentTheme === 'dark' ) {
        heroImage?.setAttribute('src', '/img/hero-dark.webp');
    } else {
        heroImage?.setAttribute('src', '/img/hero-light.webp');
    }
}

export const changeTheme = () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const  iconTheme = document.querySelector('#iconTheme');

    if ( currentTheme === 'dark' ) {
        document.body.setAttribute('data-theme', 'light');
        iconTheme?.setAttribute('src', '/img/icon-dark.svg');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        iconTheme?.setAttribute('src', '/img/icon-light.svg');
        localStorage.setItem('theme', 'dark');
    }
}

export const allAboutTheme = () => {
    // check if the user has a saved theme preference
      checkCurrentTheme();
      changeHeroImageTheme();

      const themeButton = document.getElementById("themeButton");
      if (themeButton) {
        themeButton.addEventListener("click", () => {
        //   import("../helpers/siteTheme").then((module) => {
        //     module.changeTheme();
        //     module.changeHeroImageTheme();
        //   });
        changeTheme();
        changeHeroImageTheme();
        });
      }
}