import React from 'react';
import { Media } from 'reactstrap';

const RenderLeader = ({ leader }) => {
    return (
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <h4>{leader.designation}</h4>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    )
}

export default RenderLeader;


