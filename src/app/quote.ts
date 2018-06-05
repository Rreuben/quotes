export class Quote {
  public showDetails : boolean;
  constructor( public user:string, public author:string, public quote:string, public uploadDate:Date ) {
    this.showDetails = false;
  }
}
