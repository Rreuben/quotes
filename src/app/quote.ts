export class Quote {
  public showDetails : boolean;
  constructor( public user:string, public author:string, public quote:string, public upVote:number, public downVote:number, uploadDate:Date ) {
    this.showDetails = false;
  }
}
