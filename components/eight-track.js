import {Media} from './media.js';
/***
 * The EightTrack class extends the Media class, and
 *  overrides the toString() method, extending it by
 *  wrapping it. Additionally, we implement some common
 *  functionality. All our Media types should implement
 *  flip() method, even if it does nothing, and a next()
 *  and prev() method.
 * How they implement these methods internally may differ.
 */
export class EightTrack extends Media {
  constructor({title, artist, date, tracks = []}){
    super({title, artist, date});

    // This is unique to the 8-track
    this.tracks = JSON.parse(JSON.stringify(tracks));
    this.trackIndex=0;
    this.songIndex=0;
  }
  toString(){
    return `8-Track: ${super.toString() }`;
  }
  flip(){
    this.trackIndex = (++this.trackIndex)%this.tracks.length;
    this.songIndex=0;
    return this;
  }
  next(){
    this.songIndex = (++this.songIndex)%this.track.length;
    return this;
  }
  prev(){
    this.songIndex = (this.songIndex+this.track.length-1)%this.track.length;
    return this;
  }
  get track() {
    return this.tracks[this.trackIndex]
  }
  get song(){
    return this.track[this.songIndex]
  }
}