// open link in new tab
export const openLink = (url: string) => {
  window.open(url, "_blank");
};

// i.e. not mobile
export const canHover = !window.matchMedia("(hover: none)").matches;
