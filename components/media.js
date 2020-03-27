export class Media {
  constructor({artist, title, date}){
    this.artist = artist;
    this.title = title;
    this.date = date;
  }
  toString(){
    return `${this.artist}: ${this.title} (${this.date})`;
  }
}
