import {Media} from  './media.js';
import {LP} from './lp.js';
import {EightTrack} from './eight-track.js';
import {CassetteTape} from './cassette-tape.js';
import {CompactDisc} from './compact-disc.js';

/***
 * The MediaFactory will generate any of the types of which
 *  it has been made aware. Based on the `type` property we
 *  pass in, we create and return the chosen object type.
 * If we want to add in any class to our factory (say a DVD
 *  or CD or LaserDisc or BetaMax), we simply define the
 *  Media class above, define an interface (which is more of
 *  a guideline than a hard rule), and add it to the switch
 *  statement below.
 */
export function MediaFactory() {}
// We define a 'default' media class, using our base.
MediaFactory.prototype.mediaClass = Media;
// the create function is the actual factory, and in here,
//  we can create any Media type by simply adding another case.
MediaFactory.prototype.create = function(options) {
  switch (options.mediaType){
    case "LP":
      this.mediaClass=LP;
      break;
    case "8-track":
      this.mediaClass=EightTrack;
      break;
    case "CD":
      this.mediaClass=CompactDisc;
      break;
    case "Tape":
      this.mediaClass=CassetteTape;
      break;
  }
  return new this.mediaClass(options)
}