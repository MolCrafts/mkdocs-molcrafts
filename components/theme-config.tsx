const raw = document.getElementById('mkdocs-config').textContent;
const themeConfig = JSON.parse(raw);
interface IThemeConfig {
    site_name: string;
}
export { themeConfig };
export type { IThemeConfig };