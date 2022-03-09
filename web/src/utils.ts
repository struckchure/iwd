export function get_image_url(name) {
  return new URL(`./assets/img/${name}`, import.meta.url).href;
}
