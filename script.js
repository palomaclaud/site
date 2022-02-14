const getDOM = (selector) => () => {
  return document.querySelector(selector);
};

document.title = `${main.name} | ${main.role}`;

const dom = {
  main: {
    name: getDOM("#main #name"),
    mail: getDOM("#main #mail"),
    img: getDOM("#main #img"),
    role: getDOM("#main #role"),
    connects: getDOM("#main #connects"),
  },
  projects: getDOM("#projects"),
  logo: getDOM("#projects-page #logo"),
};

function assignDOM(dom, value, options) {
  if (options && options.isImg) {
    dom.src = value;
    return;
  }

  if (options && options.isAdjacent) {
    dom.insertAdjacentHTML("afterbegin", value);
  }

  dom.innerHTML = value;
}

assignDOM(dom.main.name(), main.name);
assignDOM(dom.main.mail(), main.mail);
dom.main.mail().href = `mailto:${main.mail}?Subject=Hello%20again`;
assignDOM(dom.main.img(), main.img, { isImg: true });
assignDOM(dom.main.role(), main.role);

const connectsDOM = main.connects
  .map(
    ({ name, iconName, link }) =>
      `<a href=${link} target="_blank"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
  )
  .join("\n");
assignDOM(dom.main.connects(), connectsDOM);
