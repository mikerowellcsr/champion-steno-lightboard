// Settings API

import { db } from './firebase';

export const fetchSpeakerPhotos = () =>
     db.ref(`/`).child(`speakerPhotos`).once(`value`);