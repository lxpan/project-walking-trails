import React from 'react';
import '../../styles/Trail/TrailTag.css';

function TrailTag({ tags }) {
    return (
        <div className="TrailTag">
            {tags.map((tag) => (
                <div className="TrailTag-tag" key={tag}>
                    {tag}
                </div>
            ))}
        </div>
    );
}

export default TrailTag;
