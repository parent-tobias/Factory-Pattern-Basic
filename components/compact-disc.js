import {Media} from './media.js';

export class CompactDisc extends Media {
  constructor({artist, title, date, songs=[]}){
    super({artist, title, date});
    this.songs = JSON.parse(JSON.stringify(songs));
    this.songIndex=0;
  }
  flip(){
    // in the case of a cd, flip does nothing.
    return this;
  }
  next(){
    this.songIndex = (++this.songIndex)%this.songs.length;
    return this;
  }
  prev(){
    this.songIndex = (this.songIndex + this.songs.length-1)%this.songs.length;
    return this;
  }

  get side(){
    return "Compact Discs... are one sided. Foo.";
  }
  get song(){
    return this.songs[this.songIndex]
  }
}