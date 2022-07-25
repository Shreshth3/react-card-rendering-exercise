const express = require('express');
const app = express();

const PORT = 5000;

app.get('/players', (req, res) => {
    const players = [
        {
            firstName: 'LeBron',
            lastName: 'James',
            team: 'Lakers',
            color: 'yellow',
        },
        {
            firstName: 'Giannis',
            lastName: 'Antetokounmpo',
            team: 'Bucks',
            color: 'green',
        },
        {
            firstName: 'Stephen',
            lastName: 'Curry',
            team: 'Warriors',
            color: 'blue',
        },
        {
            firstName: 'Kevin',
            lastName: 'Durant',
            team: 'Nets',
            color: 'black',
        },
        {
            firstName: 'James',
            lastName: 'Harden',
            team: '76ers',
            color: 'white',
        },
    ];

    return res.json(players);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
