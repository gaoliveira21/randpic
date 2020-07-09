import React, { useEffect, useState, useContext } from 'react';
import { format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import { utcToZonedTime } from 'date-fns-tz';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import AuthContext from '../../contexts/auth';
import Header from '../../components/Header';
import './styles.css';

function Download() {
    const [downloads, setDownloads] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        async function loadDownloads() {
            const response = await api.get('/downloads', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = response.data.map(({ id, download_url, created_at }) => {
                const date = new Date(created_at);

                const subDate = subHours(date, 3);

                return {
                    id,
                    download_url,
                    created_at: format(subDate, "dd/MM/yyyy", { locale: pt })
                }
            })

            setDownloads(data);
        }
        loadDownloads();
    }, []);

    return (
        <>
            <Header></Header>
            <main>
                <section className="container-download">
                    <h1>Download List</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloads.map(download => (
                                <tr key={download.id}>
                                    <td>
                                        <img src={download.download_url} />
                                    </td>
                                    <td>
                                        <span>{download.created_at}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}
export default Download;
