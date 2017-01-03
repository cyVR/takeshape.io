import ko from 'knockout';
import railway from 'knockout-railway';
import koInview from "knockout-inview";

ko.bindingHandlers.railway = railway(ko);

export const inview = koInview(ko);
export {default as backgroundVideo} from './background-video';
export {default as parallax} from './parallax';
export {default as imageLoaded} from './image-loaded';
export {default as ticker} from './ticker';
export {default as dateFromNow} from './date-from-now';
