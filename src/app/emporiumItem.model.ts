import { AvatarImageComponent } from './avatar-image/avatar-image.component';
import { LibraryNameComponent } from './library-name/library-name.component';
import { BookCountComponent } from './book-count/book-count.component';
import { RatingComponent } from './rating/rating.component';

/**
* Provides a emporium item
*/
export class EmporiumItem {
    constructor(
        public userID: string,
        public avatar: AvatarImageComponent,
        public LibraryName: LibraryNameComponent,
        public size: BookCountComponent,
        public rating: RatingComponent) {
    }
}