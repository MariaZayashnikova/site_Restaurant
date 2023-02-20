export default class AddOrder {
    url = 'http://localhost:3000/orders';

    async postOrder(data) {
        let res = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(data.entries()))
        });

        if (!res.ok) throw new Error(`Server Error: ${res.status}`);

        return res;
    }
}
