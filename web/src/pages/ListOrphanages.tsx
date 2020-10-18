import React, { useEffect, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/list-orphanages.css';

import Sidebar from "../components/Sidebar";
import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
}

export default function ListOrphanages() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
    
    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return(
        <div id="page-list-orphanages">
            <Sidebar />

            <main>
                <div className="orphanage-details">
                    <fieldset>
                        <legend>Lista de Orfanatos</legend>

                        <ul>
                            {orphanages.map(orphanage => {
                                return (
                                    <div className="orphanage-details-list">
                                        <h2 className="text-orphanage">
                                            { orphanage.name }
                                            <Link to={`/orphanages/${orphanage.id}`}>
                                                <FiInfo size={40} color="#5C8599" />
                                            </Link>
                                        </h2>
                                    </div>
                                )
                            })}
                        </ul>

                    </fieldset>
                </div>
            </main>

        </div>
    )
}
