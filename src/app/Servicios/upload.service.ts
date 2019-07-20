import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { Upload } from '../modelos/upload.model';
import { AuthService } from '../servicios/auth.service';
import * as firebase from 'firebase';
import { UploadComponent } from '../upload/upload.component';

@Injectable()
export class UploadService {
  private basePath = '/uploads';

  constructor(
    private ngFire: AngularFireModule,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}

  uploadFile(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        upload.progress =
          (uploadTask.snapshot.bytesTransferred /
            uploadTask.snapshot.totalBytes) *
          100;
      },
      (): any => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        upload.userID = this.authService.currentUserID;
        this.saveFileData(upload);
      }
    );
  }
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }
}
