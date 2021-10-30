import { Skiresort } from "./skiresort.model";

export class SkiresortList {

    results: Skiresort[];

    constructor(obj?:any) {
        this.results = obj && obj.map((x:any) => {
            return new Skiresort(x);
        }) || [];
    }
}