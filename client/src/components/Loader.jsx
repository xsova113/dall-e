import React from 'react';
import { PacmanLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div role="status">
            <PacmanLoader
                sizeUnit={"px"}
                size={30}
                color={'#6469ff'}
                loading={true}
            />
        </div>
    );
}