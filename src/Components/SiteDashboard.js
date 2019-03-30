import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, PieChart, Pie, Cell, Legend, LabelList, BarChart, Bar } from 'recharts';

let fakeData = {
    currentFatigue: [
        { "workerName": "Imran", "howFatigued": "normal" },
        { "workerName": "Jeremy", "howFatigued": "elevated" },
        { "workerName": "Julian", "howFatigued": "high" },
        { "workerName": "Kuleen", "howFatigued": "normal" },
        { "workerName": "Taylor", "howFatigued": "elevated" },
        { "workerName": "Zeeshan", "howFatigued": "high" },
        { "workerName": "Zhen", "howFatigued": "high" },
    ],
    groupAverageFatigueByHourOfDay: [
        {
            "time": "07:00",
            "fatigue": 0.5
        },
        {
            "time": "10:00",
            "fatigue": 0.75
        },
        {
            "time": "13:00",
            "fatigue": 1.0
        },
        {
            "time": "16:00",
            "fatigue": 1.5
        },
    ],
    groupAverageFatigueByDayOfWeek: [
        {
            "name": "Monday",
            "fatigue": 0.5
        },
        {
            "name": "Tuesday",
            "fatigue": 1.0
        },
        {
            "name": "Wednesday",
            "fatigue": 0.8
        },
        {
            "name": "Thursday",
            "fatigue": 0.5
        },
        {
            "name": "Friday",
            "fatigue": 1.25
        },

    ]
};

let MakePrettyTableBody = (data) => {
    let retData = data.map((element, index) => {
        let highlightStyle = {};
        switch (element.howFatigued) {
            case "normal":
                highlightStyle = {
                    backgroundColor: "lightgreen",
                };
                break;
            case "elevated":
                highlightStyle = {
                    backgroundColor: "lightyellow",
                };
                break;
            case "high":
                highlightStyle = {
                    backgroundColor: "pink",
                };
                break;
            default:
                break;
        }
        return (
            <tr key={index}>
                <td>{element.workerName}</td>
                <td style={highlightStyle}>{element.howFatigued}</td>
            </tr>);
    });
    return retData;
};

let FatigueTable = () => {
    return (
        <React.Fragment>
            <Col sm="12" md={{ size: 4, offset: 1 }}>
                <h4>Current Risk</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Worker</th>
                            <th>Fatigue Accident Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MakePrettyTableBody(fakeData.currentFatigue)}
                    </tbody>
                </table>
            </Col>
        </React.Fragment>
    );
};

let FatigueTrendChart = () => {
    return (
        <Col sm="12" md="3">
            <h4>Team Fatigue by Hour</h4>
            <LineChart
                width={500}
                height={300}
                data={fakeData.groupAverageFatigueByHourOfDay}
            >
                <XAxis dataKey="time" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="fatigue" stroke="#8884d8" />
            </LineChart>
        </Col>
    );
};

let FatigueWeekChart = () => {
    return (
        <Col sm="12" md={{ size: 4, offset: 1 }}>
            <h4>Team Fatigue by Day</h4>
            {/* <LineChart
                width={500}
                height={300}
                data={fakeData.groupAverageFatigueByDayOfWeek}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="fatigue" stroke="#8884d8" />
            </LineChart> */}
            <BarChart
                width={500}
                height={300}
                data={fakeData.groupAverageFatigueByDayOfWeek}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Bar fill="#8884d8" dataKey="fatigue" stroke="#8884d8" />
            </BarChart>
            
        </Col>
    );

};

let PercentCurrentlyFatiguedPie = () => {
    // generate the data -- we need simple category names, and we need the counts per category.
    // Categories -- normal, elevated, high.
    let categoryCounts = { "normal": 0, "elevated": 0, "high": 0 };
    for (let index = 0; index < fakeData.currentFatigue.length; index++) {
        switch (fakeData.currentFatigue[index].howFatigued) {
            case "normal":
                categoryCounts.normal++;
                break;
            case "elevated":
                categoryCounts.elevated++;
                break;
            case "high":
                categoryCounts.high++;
                break;
            default:
                break;
        }
    }
    const data = [
        { name: "normal", value: categoryCounts.normal },
        { name: "elevated", value: categoryCounts.elevated },
        { name: "high", value: categoryCounts.high },
    ];
    console.log(data);
    const COLORS = ['green', 'orange', 'red'];
    return (
        <Col sm="12" md="4" style={{ backgroundColor: "#f0f0f0", border: "1px solid red", borderRadius: "10px" }}>
            <h4>Fatigue Counts</h4>
            <PieChart width={210} height={310} >
                <Pie
                    data={data}
                    dataKey="value"
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    label
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}>                     <LabelList dataKey="name" position="insideTop" angle="45" />
                        </Cell>)
                    }
                </Pie>
            </PieChart>
        </Col>
    );
}

let SiteDashboard = (props) => {
    return (
        <Container className="standout">
            <Row>
                <Col sm="12" md={{ size: 12, offset: 4 }}>
                    <h1>Fatigue for Site 27</h1>
                </Col>
            </Row>
            <Row>
                <FatigueTable />
                <Col md="2"></Col>
                <PercentCurrentlyFatiguedPie />
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <FatigueTrendChart />
                <Col md="2"></Col>
                <FatigueWeekChart />
            </Row>
        </Container>);
}

export default SiteDashboard;