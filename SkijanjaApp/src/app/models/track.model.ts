
export class Track{
    _id: number;
    mountain_id: number;
    name: string;
    length_km: string;
    rating: string;
    color: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.mountain_id = obj && obj.mountain_id || "";
        this.name = obj && obj.name || "";
        this.length_km = obj && obj.length_km || "";
        this.rating = obj && obj.rating || "";
        this.color = obj && obj.color || "";
    }
}

export class TrackList {

    results: Track[];

    constructor(obj?:any) {
        this.results = obj && obj.map((x:any) => {
            return new Track(x);
        }) || [];
    }
}