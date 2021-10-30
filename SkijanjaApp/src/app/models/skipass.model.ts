
export class Skipass{
    _id: number;
    mountain_id: number;
    duration: number;
    price: number;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.mountain_id = obj && obj.mountain_id || 0;
        this.duration = obj && obj.duration || 0;
        this.price = obj && obj.price || 0;
    }
}

export class SkipassList {

    results: Skipass[];

    constructor(obj?:any) {
        this.results = obj && obj.map((x:any) => {
            return new Skipass(x);
        }) || [];
    }
}