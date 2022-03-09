export function get_image_url(name: any) {
  return new URL(`./assets/img/${name}`, import.meta.url).href;
}
