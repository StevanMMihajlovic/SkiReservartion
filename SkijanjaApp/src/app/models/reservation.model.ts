export class Reservation {
    _id: number;
    mountain_id: number;
    firstName: string;
    lastName: string;
    from: ReservationDate;
    to: ReservationDate;
    price: number;
  
    constructor(obj?: any) {
      this._id = obj && obj._id || 0
      this.mountain_id = obj && obj.mountain_id || 0
      this.firstName = obj && obj.firstName || "";
      this.lastName = obj && obj.lastName || "";
      this.from = obj && new ReservationDate(obj.from) || new ReservationDate();
      this.to = obj && new ReservationDate(obj.to) || new ReservationDate();
      this.price = obj && obj.price || 0;
    }
  
    calculateDateDifference(): number {
      let oneDay = 24*60*60*1000;
      let fromDate = new Date(this.from.year, this.from.month, this.from.day);
      let toDate = new Date(this.to.year, this.to.month, this.to.day);
  
      let diffDays = Math.round((toDate.getTime() - fromDate.getTime())/(oneDay));
  
      return diffDays;
    }
  }
  
  class ReservationDate {
    day: number;
    month: number;
    year: number;
  
    constructor(obj?: any) {
      this.day = obj && obj.day || 0;
      this.month = obj && obj.month || 0;
      this.year = obj && obj.year || 0;
    }
  }