import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.SERVER_PORT;
const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.get('/search', async (req, res) => {
    const { keyword, location } = req.query;

    if (!keyword || !location) {
        return res.status(401).send({
            status: 401,
            data: [],
            message: 'Missing params; keyword or location',
        });
    }

    try {
        const {
            status,
            data: { results },
        } = await axios({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
            params: {
                key: process.env.GOOGLE_MAPS_API,
                keyword,
                location,
                radius: 5000,
            },
        });

        return res.status(status).send({
            data: results,
            status,
            message: '',
        });
    } catch (err) {
        const message = err.message || 'An unexpected error has occurred';
        return res.status(401).send({
            status: 401,
            data: [],
            message,
        });
    }
});

app.listen(port, () => console.info(`server running on port ${port}`));
