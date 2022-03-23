export class Template {
    async pieChart(overload) {
        let labels = [];
        let data = [];

        for (let label in overload) {
            labels.push(label);
            data.push(overload[label]);
        }
        return `{
            "type":"doughnut",
            "data":{
                "labels":${labels},
                "datasets":[
                {"label":"","backgroundColor":[
                "#EFA8A8","#858796","#3a3b45"],
                "borderColor":["#ffffff","#ffffff","#ffffff"],
                "data":${data}}]},
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
}