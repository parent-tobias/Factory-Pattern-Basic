import {Media} from './media.js';

export class CassetteTape extends Media {
  constructor({artist, title, date, sides=[]}){
    super({artist, title, date});
    this.sides = JSON.parse(JSON.stringify(sides));
    this.sideIndex=0;
    this.songIndex=0;
  }
  flip(){
    this.sideIndex = (++this.sideIndex)%this.sides.length;
    this.songIndex = 0;
    // we return a reference to `this`, so we can chain
    return this;
  }
  next(){
    this.songIndex = (++this.songIndex)%this.side.length;
    return this;
  }
  prev(){
    this.songIndex = (this.songIndex + this.side.length-1)%this.side.length;
    return this;
  }

  get side(){
    return this.sides[this.sideIndex];
  }
  get song(){
    return this.side[this.songIndex]
  }
}