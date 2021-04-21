import {
  Finger,
  FingerCurl,
  FingerDirection,
} from "fingerpose/src/FingerDescription";
import GestureDescription from "fingerpose/src/GestureDescription";

// describe victory gesture ✌️
const loveGesture = new GestureDescription('Violencia de genero');


// thumb:
loveGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.5);
loveGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);
loveGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
loveGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// index:
loveGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);
loveGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
loveGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
loveGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
loveGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
loveGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
loveGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
loveGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
loveGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
loveGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
loveGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
loveGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
loveGesture.setWeight(Finger.Pinky, 2);
loveGesture.setWeight(Finger.Thumb, 2);

export default loveGesture;