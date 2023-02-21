export default class RestoService {
    url = 'http://localhost:3000/menu';

    async getMenuItems() {
        let res = await fetch(this.url);

        if (!res.ok) throw new Error(`Server Error: ${res.status}`);

        return await res.json();
    }
}