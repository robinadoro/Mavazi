export class Template {

    /**
     * 
     * @param {*} overload 
     * @returns 
     */
    pieChart(overload) {
        let labels = [];
        let data = [];

        for (let label in overload) {
            labels.push(`"${label}"`);
            data.push(`"${overload[label]}"`);
        }
        return `{
            "type":"doughnut",
            "data":{
                "labels":[${labels}],
                "datasets":[
                {"label":"","backgroundColor":[
                "#EFA8A8","#858796","#3a3b45"],
                "borderColor":["#ffffff","#ffffff","#ffffff"],
                "data":[${data}]}]},
                "options":{
                    "maintainAspectRatio":false,"legend":{
                        "display":false,"labels":{
                            "fontStyle":"normal"
                        }
                        },
                        "title":{
                                "fontStyle":"normal"
                            }
                        }
                    }`
    }
    /**
     * 
     * @param {*} overload 
     * @returns 
     */
    lineGraph(overload) {
        let labels = [];
        let data = [];

        for (let label in overload) {
            labels.push(`"${label}"`);
            data.push(overload[label]);
        }
        return `{
            "type":"line",
            "data":{
                "labels":[${labels}],
                "datasets":[
                {
                    "label":"Recommendations","fill":false,
                    "data":[${data}],
                    "backgroundColor":"rgba(78, 115, 223, 0.05)",
                    "borderColor":"#EFA8A8"}]},
                    "options":{
                        "maintainAspectRatio":false,
                        "legend":{
                            "display":false,
                            "labels":{
                                "fontStyle":"normal"}},"title":{"fontStyle":"normal"},
                                "scales":{"xAxes":[
                                {"gridLines":{
                                    "color":"rgb(234, 236, 244)",
                                    "zeroLineColor":"rgb(234, 236, 244)",
                                    "drawBorder":false,"drawTicks":false,"borderDash":["2"],
                                    "zeroLineBorderDash":["2"],"drawOnChartArea":false},
                                    "ticks":{"fontColor":"#858796","fontStyle":"normal",
                                    "padding":20}}],"yAxes":[{"gridLines":{
                                        "color":"rgb(234, 236, 244)",
                                        "zeroLineColor":"rgb(234, 236, 244)",
                                        "drawBorder":false,"drawTicks":false,
                                        "borderDash":["2"],"zeroLineBorderDash":["2"]},
                                        "ticks":{"fontColor":"#858796","fontStyle":"normal",
                                        "padding":20
                                    }
                                }
                                ]
                            }
                        }
                    }`
    }

    /**
     * 
     * @param {*} trending 
     * @returns 
     */
    trending(trending) {
        return `
        <div class="d-flex align-items-center flex-column w-10">
            <img class="border rounded-circle img-profile" src="${trending.img}" />
            <div class="fw-bold mt-2">${trending.name}</div>
        </div>
        `;
    }
}
