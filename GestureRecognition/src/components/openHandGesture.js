import {
  Finger,
  FingerCurl,
  FingerDirection,
} from "fingerpose/src/FingerDescription";
import GestureDescription from "fingerpose/src/GestureDescription";

// describe thumbs up gesture 👍
const openHandGesture = new GestureDescription("full open");

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
  openHandGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  openHandGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  openHandGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
  openHandGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
}

export default openHandGesture;
