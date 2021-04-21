
import {
    Finger,
    FingerCurl,
    FingerDirection,
  } from "fingerpose/src/FingerDescription";
  import GestureDescription from "fingerpose/src/GestureDescription";

  const ThumbsUpGesture = new GestureDescription('Persona envejeciente');


const ThumbsUpGesture = new GestureDescription('thumbs_up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
ThumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
ThumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ThumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ThumbsUpGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  ThumbsUpGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default ThumbsUpGesture;

