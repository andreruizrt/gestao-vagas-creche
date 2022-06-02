
export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            console.log('creche::handler [Method] GET');
            get(req, res);
            break;
        case 'POST':
            console.log('creche::handler [Method] POST');
            post(req, res);
            break;
        case 'PUT':
            console.log('creche::handler [Method] PUT');
            put(req, res);
            break;
        case 'DELETE':
            console.log('creche::handler [Method] DELETE');
            delete_(req, res);
            break;
        default:
            res.status(405).send('Method Not Allowed');
            break;
    }
}

async function get(req: any, res: any) {

    console.log('creche::get [Method] GET' + req.query.id ? ` [ID] ${req.query.id}` : '');

    const url = req.query.id ? `${process.env.API_URL}/creche/${req.query.id}` : `${process.env.API_URL}/creche`;

    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.cookies.token}`
        }
    }).then(response => {
        res.status(200).send(response.json());
    }).catch(error => {
        throw new Error("creche::get [Error] " + error.message);
    });
}

async function post(req: any, res: any) {
    console.log('creche::post [Method] POST');

    await fetch(`${process.env.API_URL}/creche`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.cookies.token}`
        },
        body: JSON.stringify(req.body)
    }).then(response => {
        res.status(200).send(response.json());
    }).catch(error => {
        throw new Error("creche::post [Error] " + error.message);
    });
}


async function put(req: any, res: any) {
    console.log('creche::put [Method] PUT');

    await fetch(`${process.env.API_URL}/creche`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.cookies.token}`
        },
        body: JSON.stringify(req.body)
    }).then(response => {
        res.status(200).send(response.json());
    }).catch(error => {
        throw new Error("creche::put [Error] " + error.message);
    });
}

async function delete_(req: any, res: any) {
    console.log('creche::delete [Method] DELETE');
    await fetch(`${process.env.API_URL}/creche`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${req.cookies.token}`
        },
        body: JSON.stringify(req.body)
    }).then(response => {
        res.status(200).send(response.json());
    }).catch(error => {
        throw new Error("creche::delete [Error] " + error.message);
    });
}
