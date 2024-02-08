// write basic server code in ES module
import express from 'express';
import process from 'process';
import prerender from 'prerender-node';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();


app.use(express.static(path.join(__dirname, 'dist')));

app.use(prerender);

app.get('/', (req, res) => {
    res.send( 'Hello from server!' );
}); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
}
);

app.use(prerender.set('prerenderToken', 'QNSitUY1IP8O6HZimwKc'));

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    () => console.log(
        `Server running mode on port ${PORT}`
    )
);
