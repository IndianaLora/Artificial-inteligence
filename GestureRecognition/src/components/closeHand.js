import {
  Finger,
  FingerCurl,
  FingerDirection,
} from "fingerpose/src/FingerDescription";
import GestureDescription from "fingerpose/src/GestureDescription";

// describe thumbs up gesture 👍
const closeHandGesture = new GestureDescription("closeHand");

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [
  Finger.Index,
  Finger.thumb,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  closeHandGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  closeHandGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  closeHandGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default closeHandGesture;
