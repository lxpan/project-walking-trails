import React from 'react';
import Plot from 'react-plotly.js';

function ReviewHistogram({ ratings }) {
    return (
        <div className="Review-Histogram">
            <Plot
                data={[
                    {
                        y: ratings,
                        type: 'histogram',
                        marker: { color: 'lightgreen' },
                        hoverinfo: 'none',
                    },
                ]}
                layout={{
                    yaxis: { range: [1, 5.5] },
                    xaxis: { visible: false },
                    margin: {
                        pad: 5,
                        l: 20,
                        r: 0,
                        t: 0,
                        b: 20,
                    },
                    width: 180,
                    height: 120,
                    bargap: 0.5,
                }}
            />
        </div>
    );
}

export default ReviewHistogram;
