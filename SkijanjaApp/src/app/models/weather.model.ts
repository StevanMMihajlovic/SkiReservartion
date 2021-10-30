
export class Weather{
    _id: number;
    mountain_id: number;
    date: string;
    temperature_min: number;
    temperature_max: number;
    wind: number
    outlook: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.mountain_id = obj && obj.mountain_id || "";
        this.date = obj && obj.date || "";
        this.temperature_min = obj && obj.temperature_min || 0;
        this.temperature_max = obj && obj.temperature_max || 0;
        this.wind = obj && obj.wind || 0;
        this.outlook = obj && obj.outlook || "";
    }
}

export class WeatherList {

    results: Weather[];

    constructor(obj?:any) {
        this.results = obj && obj.map((x:any) => {
            return new Weather(x);
        }) || [];
    }
}