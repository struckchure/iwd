export function get_image_url(name: string): string {
  return new URL(`./assets/img/${name}`, import.meta.url).href;
}
